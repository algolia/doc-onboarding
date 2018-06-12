import React, { Component } from "react";
import {
  InstantSearch,
  Configure,
  Panel,
  SearchBox
} from "react-instantsearch-dom";
import Stats from "./Stats";
import Switch from "./Switch";
import Content from "./Content";
import Facet from "./Facet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_saas"
      >
        <Configure hitsPerPage={4} distinct={3} />
        <main className="search-container">
          <div className="left-panel">
            <div id="type">
              <Panel header="Categories">
                <Facet attribute="type" />
              </Panel>
            </div>
          </div>
          <div className="right-panel">
            <div id="searchbox">
              <SearchBox translations={{ placeholder: "Search in your CRM" }} />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="hits">
              <Content />
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
