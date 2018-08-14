import React, { Component } from 'react'
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch-dom'
import { GoogleMapsLoader } from 'react-instantsearch-dom-maps'
import Stats from './Stats'
import Content from './Content'
import Geo from './Geo'
import './App.css'

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
          <div className="right-panel">
            <div id="map">
              {/* Uncomment the following widget to add a map */}
              {/* <div style={{ height: '100%' }}>
                <GoogleMapsLoader apiKey="AIzaSyBnDR4e5_qobPG6Vn_zjhc1vyOIooChZt8">
                  {google => <Geo google={google} />}
                </GoogleMapsLoader>
              </div> */}
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              {/* <SearchBox
                translations={{
                  placeholder: 'Search airports by name, city, airport code'
                }}
              /> */}
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
              {/* <Stats /> */}
            </div>
          </div>
          <div className="left-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
              {/* <Content /> */}
            </div>
          </div>
        </main>
      </InstantSearch>
    )
  }
}

export default App
