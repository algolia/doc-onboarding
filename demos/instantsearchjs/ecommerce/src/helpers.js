export function hitTemplate(hit, { html, components }) {
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
