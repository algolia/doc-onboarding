import React from "react";
import { RefinementList } from "react-instantsearch-dom";
import { connectRefinementList } from "react-instantsearch/connectors";
export default connectRefinementList(
  ({ translations, searchable, attribute, items }) =>
    items.length && items.length > 0 ? (
      <RefinementList
        attribute={attribute}
        searchable={searchable}
        translations={translations}
      />
    ) : (
      <div className="ais-RefinementList-item">No results.</div>
    )
);
