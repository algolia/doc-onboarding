/* global instantsearch */

import { hitTemplate } from "./helpers";

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_ecommerce",
  searchParameters: {
    hitsPerPage: 5,
    attributesToSnippet: ["description:24"],
    snippetEllipsisText: " [...]"
  }
});

// Uncomment the following widget to add hits list.

/* search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      item: function(hit) {
        return hitTemplate(hit);
      }
    }
  })
); */

// Uncomment the following widget to add a search bar.

/* search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for products",
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

// Uncomment the following widget to add categories list.

/* search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#categories",
    attributeName: "categories",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
); */

// Uncomment the following widget to add brands list.

/* search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attributeName: "brand",
    searchForFacetValues: true,
    autoHideContainer: false,
    templates: {
      header: "Brands"
    }
  })
); */

// Uncomment the following widget to add price range.

/*  search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: "#price",
    autoHideContainer: false,
    attributeName: "price",
    templates: {
      header: "Price"
    }
  })
); */

// Uncomment the following widget to add pagination.

/* search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
); */

search.start();
