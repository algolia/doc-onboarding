/* global instantsearch */

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_media",
  searchParameters: {
    hitsPerPage: 3,
    attributesToSnippet: ["content:14"],
    snippetEllipsisText: " [...]",
    highlightPreTag: "<em class='highlight'>",
    highlightPostTag: "</em>"
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search articles",
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      item(hit) {
        return `
          <div>
            <article>
              <div class="post-img">
                <a href="${hit.permalink}">
                <img src="${hit.image}">
                </a>
              </div>
              <div class="post-content">
                <div class="post-date">
                  ${hit.post_date_formatted}
                </div>
                <h2 class="entry-title">
                  <a href="${hit.permalink}" rel="bookmark">
                  ${hit._highlightResult.post_title.value}
                  </a>
                </h2>
                <div class="post-excerpt">
                  ${hit._snippetResult.content.value}
                </div>
                <div class="entry-meta clear">
                  <div class="author-gravatar">
                    <img src="${hit.author_image_url}" width="40" height="40">
                  </div>
                  <div class="entry-author-content">
                    <div class="author-name">
                      ${hit._highlightResult.author_name.value}
                    </div>
                    <div class="post-meta-info">
                      ${hit.time_to_read} min read in ${
          hit._highlightResult.categories[0].value
        }
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>`;
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
    container: "#categories",
    attributeName: "categories",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
);

search.start();
