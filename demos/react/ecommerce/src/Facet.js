import React from "react";
import { RefinementList, connectRefinementList } from "react-instantsearch-dom";

export default connectRefinementList(
  ({ translations, searchable, attribute, items, isFromSearch }) =>
    isFromSearch || (items.length && items.length > 0) ? (
      <RefinementList
        attribute={attribute}
        searchable={searchable}
        translations={translations}
      />
    ) : (
      <div className="ais-RefinementList-item">No results.</div>
    )
);
