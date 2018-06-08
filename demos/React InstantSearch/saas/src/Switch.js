import PropTypes from 'prop-types';
import { connectStateResults } from 'react-instantsearch-dom';

const Switch = ({ searchResults, hasResultsElement, noResultsElement }) =>
  searchResults && searchResults.nbHits > 0
    ? hasResultsElement
    : noResultsElement;

Switch.propTypes = {
  hasResultsElement: PropTypes.element,
  noResultsElement: PropTypes.element,
};

Switch.defaultProps = {
  hasResultsElement: null,
  noResultsElement: null,
};

export default connectStateResults(Switch);
