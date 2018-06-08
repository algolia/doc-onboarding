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

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_media"
      >
        <main className="search-container">
          <Configure hitsPerPage={3} attributesToSnippet={['content:14']} snippetEllipsisText={" [...]"} />
          <div className="left-panel">
            <div id="categories">
              <Panel header="Categories">
                <RefinementList attribute="categories" />
              </Panel>
            </div>
          </div>
          <div className="right-panel">
            <div id="searchbox">
              <SearchBox translations={{ placeholder: 'Search articles' }} />
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
