/* global instantsearch */

import { hitTemplate } from "./helpers";

const search = instantsearch({
  searchClient: algoliasearch(
    'B1G2GM9NG0',
    'aadef574be1f9252bb48d4ea09b5cfe5',
  ),
  indexName: "demo_media"
});

search.addWidget(
  instantsearch.widgets.configure({
    hitsPerPage: 3,
    attributesToSnippet: ["content:14"],
    snippetEllipsisText: " [...]"
  })
);

// Uncomment the following widget to add hits list.

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results found.",
      item: hitTemplate
    }
  })
);

// Uncomment the following widget to add a search bar.

 search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search articles",
    autofocus: false
  })
);

// Uncomment the following widget to add search stats.

search.addWidget(
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
);

// Uncomment the following widget to add categories list.

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#categories",
    attribute: "categories",
    templates: {
      header: "Categories"
    }
  })
);

// Uncomment the following widget to add pagination.

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.start();
