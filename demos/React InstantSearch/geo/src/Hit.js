import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';

const Hit = ({ hit }) => (
  <div className="hit">
    <h2 className="hit-name">
      <span className="hit-airport-name">
        <Highlight attribute="name" hit={hit} />{' '}
        {!hit.displayCity && <Highlight attribute="city" hit={hit} />}{' '}
      </span>
      <span className="hit-airport-code">
        (<Highlight attribute="airport_id" hit={hit} />)
      </span>
    </h2>
    <p className="hit-location">
      <Highlight attribute="country" hit={hit} />{' '}
      <span className="hit-distance">
        ({parseInt(hit._rankingInfo.matchedGeoLocation.distance / 1000, 10)} km
        away)
      </span>
    </p>
  </div>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
