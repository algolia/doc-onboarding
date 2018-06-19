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
          <div className="right-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
              {/* <Content /> */}
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              {/* <SearchBox translations={{ placeholder: "Search in your CRM" }} /> */}
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
              {/* <Stats /> */}
            </div>
          </div>
          <div className="left-panel">
            <div id="type">
              {/* Uncomment the following widget to add types list */}
              {/* <Panel header="Categories">
                <Facet attribute="type" />
              </Panel> */}
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
