import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';

class GoogleMaps extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object.isRequired),
  };

  markers = [];

  componentDidMount() {
    this.instance = new window.google.maps.Map(this.el, {
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 4,
      minZoom: 3,
      maxZoom: 6,
      styles: [
        {
          stylers: [
            {
              hue: '#3596D2',
            },
          ],
        },
      ],
    });
  }

  componentDidUpdate() {
    const { hits } = this.props;

    this.markers.forEach(marker => marker.setMap(null));

    this.markers = hits.filter(hit => hit._geoloc).map(hit => {
      const marker = new window.google.maps.Marker({
        map: this.instance,
        title: `${hit.name} - ${hit.city} - ${hit.country}`,
        position: {
          lat: hit._geoloc.lat,
          lng: hit._geoloc.lng,
        },
      });

      return marker;
    });

    if (this.markers.length) {
      this.instance.fitBounds(
        this.markers.reduce(
          (acc, marker) => acc.extend(marker.getPosition()),
          new window.google.maps.LatLngBounds()
        )
      );
    }
  }

  render() {
    return <div className="ais-Maps" ref={c => (this.el = c)} />;
  }
}

export default connectHits(GoogleMaps);
