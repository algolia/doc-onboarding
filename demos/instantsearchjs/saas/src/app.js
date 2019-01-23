/* global instantsearch */

const arrayToTable = (data, options) => {
  let table = $("<table ></table>"),
    thead,
    tfoot,
    rows = [],
    row,
    i,
    j,
    defaults = {
      th: true, // should we use th elemenst for the first row
      thead: false, //should we incldue a thead element with the first row
      tfoot: false, // should we include a tfoot element with the last row
      attrs: {} // attributes for the table element, can be used to
    };
  options = $.extend(defaults, options);
  table.attr(options.attrs);
  // loop through all the rows, we will deal with tfoot and thead later
  for (i = 0; i < data.length; i = i + 1) {
    row = $("<tr ></tr>");
    for (j = 0; j < data[i].length; j = j + 1) {
      if (i === 0 && options.th) {
        row.append($("<th ></th>").html(data[i][j]));
      } else {
        row.append($("<td ></td>").html(data[i][j]));
      }
    }
    rows.push(row);
  }
  // if we want a thead use shift to get it
  if (options.thead) {
    thead = rows.shift();
    thead = $("<thead ></thead>").append(thead);
    table.append(thead);
  }
  // if we want a tfoot then pop it off for later use
  if (options.tfoot) {
    tfoot = rows.pop();
  }
  // add all the rows
  for (i = 0; i < rows.length; i = i + 1) {
    table.append(rows[i]);
  }
  // and finally add the footer if needed
  if (options.tfoot) {
    tfoot = $("<tfoot ></tfoot>").append(tfoot);
    table.append(tfoot);
  }
  return table;
}

const hitTemplate = res => {
  const tables = {
    contact: {
      title: "Contacts",
      fields: [["Name", "Account", "Email"]]
    },
    opportunity: {
      title: "Opportunities",
      fields: [["Name", "Account", "Owner", "CloseDate", "StageName", "Amount"]]
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

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_saas",
  searchParameters: {
    hitsPerPage: 4,
    distinct: 3
  }
});

// Uncomment the following widget to add hits list.

/* search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      allItems(res) {
        return hitTemplate(res);
      }
    }
  })
); */

// Uncomment the following widget to add a search bar.

/* search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search in your CRM",
    autofocus: false
  })
); */

// Uncomment the following widget to add search stats.

/* search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
); */

// Uncomment the following widget to add types list.

/* search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#type",
    attributeName: "type",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
); */

search.start();
