/* global instantsearch */
import { arrayToTable } from './helpers';

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_saas",
  searchParameters: {
    hitsPerPage: 4,
    distinct: 3
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search in your CRM",
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      allItems(res) {
        const tables = {
          contact: {
            title: "Contacts",
            fields: [["Name", "Account", "Email"]]
          },
          opportunity: {
            title: "Opportunities",
            fields: [
              ["Name", "Account", "Owner", "CloseDate", "StageName", "Amount"]
            ]
          },
          account: {
            title: "Accounts",
            fields: [["Name", "Website", "Owner"]]
          },
          lead: {
            title: "Leads",
            fields: [["Name", "Email", "Owner"]]
          }
        };

        let html = "";

        res.hits.forEach(hit => {
          tables[hit.type.toLowerCase()].fields.push(
            tables[hit.type.toLowerCase()].fields[0].map(item => {
              return hit._highlightResult[item]
                ? hit._highlightResult[item].value
                : hit[item];
            })
          );
        });

        Object.entries(tables).forEach(item => {
          if (item[1].fields.length > 1) {
            html +=
              "<div class='hit'><h2>" +
              item[1].title +
              "</h2><div class='table-responsive'>" +
              arrayToTable(item[1].fields)[0].outerHTML +
              "</div></div>";
          }
        });

        return html;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `⚡️ <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#type",
    attributeName: "type",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
);

search.start();
