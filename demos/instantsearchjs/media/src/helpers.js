export function hitTemplate(hit, { html, components }) {
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
        ${instantsearch.highlight({ attribute: 'post_title', hit })}
        </a>
      </h2>
      <div class="post-excerpt">
        ${instantsearch.snippet({ attribute: 'content', hit })}
      </div>
      <div class="entry-meta clear">
        <div class="author-gravatar">
          <img src="${hit.author_image_url}" width="40" height="40">
        </div>
        <div class="entry-author-content">
          <div class="author-name">
            ${instantsearch.highlight({ attribute: 'author_name', hit })}
          </div>
          <div class="post-meta-info">
            ${hit.time_to_read} min read in ${instantsearch.highlight({
    attribute: 'categories',
    hit,
  })}
    <!--Not sure how to map this value to join-->
          </div>
        </div>
      </div>
    </div>
      </article>
    </div>`
}
