import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
export default connectStateResults(({ searchResults }) => {
  if (searchResults === null) return null;
  return (
    <div className="ais-Stats">
      ⚡️ <strong>{searchResults.nbHits}</strong> results found{' '}
      {searchResults.query !== '' && (
        <React.Fragment>
          for <strong>{`"${searchResults.query}"`}</strong>
        </React.Fragment>
      )}{' '}
      in <strong>{searchResults.processingTimeMS}ms</strong>
    </div>
  );
});
