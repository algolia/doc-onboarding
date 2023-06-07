export function hitTemplate(hit) {
  return `
    <div class="hit">
      <div class="hit-image">
        <img src="${hit.image}" />
      </div>
      <div class="hit-content">
        <div>
          <div class="hit-name">${hit._highlightResult.name.value}</div>
          <div class="hit-description">${
            hit._snippetResult.description.value
          }</div>
        </div>
        <div class="hit-price">$${hit.price}</div>
      </div>
    </div>
  `;
}

export function mHitTemplate(hit, { html, components }) {
  return html`
  <div class="hit">
    <div class="hit-image">
      <img src="${hit.image}" />
    </div>
    <div class="hit-content">
      <div class="hit-name">${instantsearch.highlight({ attribute: 'name', hit })}</div>
      <div class="hit-description">${instantsearch.snippet({ attribute: 'description', hit })}</div>
      <div class="hit-price">$${hit.price}</div>
    </div>
  </div>
  `
}
