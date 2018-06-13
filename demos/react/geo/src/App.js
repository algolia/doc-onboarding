import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  Configure,
  SearchBox,
} from 'react-instantsearch-dom';
import Hit from './Hit';
import Stats from './Stats';
import GoogleMaps from './GoogleMaps';
import './App.css';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_geo"
      >
        <Configure
          hitsPerPage={6}
          getRankingInfo
          aroundLatLngViaIP
          typoTolerance="min"
        />

        <main className="search-container">
          <div className="left-panel">
            <div id="hits">
              <Hits hitComponent={Hit} />
            </div>
          </div>
          <div className="right-panel">
            <div id="searchbox">
              <SearchBox
                translations={{
                  placeholder: 'Search airports by name, city, airport code',
                }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="map">
              <GoogleMaps />
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
