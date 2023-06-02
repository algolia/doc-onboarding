import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  Configure,
  InstantSearch,
  Pagination,
  RangeInput,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-hooks-web'

import { Content } from './Content'
import { Stats } from './Stats'
import { Panel } from './Panel'

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
)

export function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="demo_ecommerce"
      insights={true}
    >
      <main className="search-container">
        <Configure
          hitsPerPage={5}
          attributesToSnippet={['description:24']}
          snippetEllipsisText=" [...]"
        />
        <div className="right-panel">
          <div id="hits">
            {/* Uncomment the following widget to add hits list */}
            {/* <Content /> */}
          </div>
          <div id="searchbox">
            {/* Uncomment the following widget to add a search bar */}
            {/* <SearchBox placeholder="Search for products" /> */}
          </div>
          <div id="stats">
            {/* Uncomment the following widget to add search stats */}
            {/* <Stats /> */}
          </div>
          <div id="pagination">
            {/* Uncomment the following widget to add pagination */}
            {/* <Pagination /> */}
          </div>
        </div>
        <div className="left-panel">
          <div id="categories">
            {/* Uncomment the following widget to add categories list */}
            {/* <Panel header="Categories">
              <RefinementList
                attribute="categories"
                translations={{ noResultsText: 'No results' }}
              />
            </Panel> */}
          </div>
          <div id="brands">
            {/* Uncomment the following widget to add brands list */}
            {/* <Panel header="Brands">
              <RefinementList
                attribute="brand"
                searchable={true}
                searchablePlaceholder="Search for other..."
                translations={{ noResultsText: 'No results' }}
              />
            </Panel> */}
          </div>
          <div id="price">
            {/* Uncomment the following widget to add price */}
            {/* <Panel header="Price">
              <RangeInput attribute="price" />
            </Panel> */}
          </div>
        </div>
      </main>
    </InstantSearch>
  )
}
