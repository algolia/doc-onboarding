import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import { connectRefinementList } from 'react-instantsearch/connectors'
export default connectRefinementList(
  ({ attribute, items }) =>
    items.length && items.length > 0 ? (
      <RefinementList attribute={attribute} />
    ) : (
      <div className="ais-RefinementList-item">No results.</div>
    )
)
