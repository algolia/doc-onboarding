import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Configure,
  RefinementList,
  Panel,
} from 'react-instantsearch-dom';
import './App.css';
import Stats from './Stats.js';
import Hit from './Hit.js';
import RangeSlider from './RangeSlider.js';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_ecommerce"
      >
        <main className="search-container">
          <Configure
            hitsPerPage={5}
            attributesToSnippet={['description:24']}
            snippetEllipsisText=" [...]"
          />
          <div className="left-panel">
            <div id="categories">
              <Panel header="Categories">
                <RefinementList attribute="categories" />
              </Panel>
            </div>

            <div id="brands">
              <Panel header="Brands">
                <RefinementList attribute="brand" searchable={true} />
              </Panel>
            </div>

            <div id="price">
              <Panel header="Price">
                <RangeSlider attribute="price" />
              </Panel>
            </div>
          </div>
          <div className="right-panel">
            <div id="searchbox">
              <SearchBox
                translations={{ placeholder: 'Search for products' }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="hits">
              <Hits hitComponent={Hit} />
            </div>
            <div id="pagination">
              <Pagination />
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
