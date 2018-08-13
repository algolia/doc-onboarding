import React, { Component } from 'react';
import { GeoSearch, Marker } from 'react-instantsearch-dom-maps';

class Geo extends Component {
  InfoWindow = new this.props.google.maps.InfoWindow();

  onClickMarker = ({ hit, marker }) => {
    if (this.InfoWindow.getMap()) {
      this.InfoWindow.close();
    }

    this.InfoWindow.setContent(hit.name);

    this.InfoWindow.open(marker.getMap(), marker);
  };

  render() {
    const { google } = this.props;

    return (
      <GeoSearch
        google={google}
        enableRefine={false}
        streetViewControl={false}
        mapTypeControl={false}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        styles={[
          {
            stylers: [
              {
                hue: '#3596D2',
              },
            ],
          },
        ]}
      >
        {({ hits }) => (
          <div>
            {hits.map(hit => (
              <Marker
                key={hit.objectID}
                hit={hit}
                onClick={({ marker }) => {
                  this.onClickMarker({
                    hit,
                    marker,
                  });
                }}
              />
            ))}
          </div>
        )}
      </GeoSearch>
    );
  }
}

export default Geo;
