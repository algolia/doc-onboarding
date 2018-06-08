/* global instantsearch */

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_ecommerce",
  searchParameters: {
    hitsPerPage: 5,
    attributesToSnippet: ["description:24"],
    snippetEllipsisText: " [...]",
    highlightPreTag: "<em class='highlight'>",
    highlightPostTag: "</em>"
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for products",
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      item: function(hit) {
        return `
          <div class="hit">
            <div class="hit-image">
              <img src="${hit.image}" />
            </div>
            <div class="hit-content">
              <div class="hit-name">${hit._highlightResult.name.value}</div>
              <div class="hit-description">${
                hit._snippetResult.description.value
              }</div>
              <div class="hit-price">$${hit.price}</div>
            </div>
          </div>
        `;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body: function(hit) {
        let typedQuery = hit.query != "" ? `for <b>"${hit.query}"</b>` : ``;
        return `<div>⚡️ <b>${
          hit.nbHits
        }</b> results found ${typedQuery} in <b>${
          hit.processingTimeMS
        }ms</b></div>`;
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#categories",
    attributeName: "categories",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attributeName: "brand",
    searchForFacetValues: true,
    autoHideContainer: false,
    templates: {
      header: "Brands",
    }
  })
);

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: "#price",
    autoHideContainer: false,
    attributeName: "price",
    templates: {
      header: "Price"
    }
  })
);

search.start();
