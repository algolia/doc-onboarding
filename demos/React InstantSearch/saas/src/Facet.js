import React from 'react';
import { RefinementList, connectRefinementList } from 'react-instantsearch-dom';

export default connectRefinementList(
  ({ attribute, items }) =>
    items.length && items.length > 0 ? (
      <RefinementList attribute={attribute} />
    ) : (
      <div className="ais-RefinementList-item">No results.</div>
    )
);
