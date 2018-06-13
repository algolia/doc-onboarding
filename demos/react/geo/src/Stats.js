import React from 'react';
import PropTypes from 'prop-types';
import { connectStateResults } from 'react-instantsearch-dom';

const Stats = ({ searchState, searchResults }) => {
  const { query } = searchState;

  return (
    searchResults && (
      <div className="ais-Stats">
        <span role="img" aria-label="Lighting fast">
          ⚡️
        </span>{' '}
        <strong>{searchResults.nbHits}</strong> results found
        {query && (
          <span>
            for <strong>&quot;{query}&quot;</strong>
          </span>
        )}{' '}
        in {searchResults.processingTimeMS}ms
      </div>
    )
  );
};

Stats.propTypes = {
  searchState: PropTypes.object,
  searchResults: PropTypes.object,
};

export default connectStateResults(Stats);
