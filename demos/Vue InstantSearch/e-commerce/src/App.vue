<template>
  <ais-index
    app-id="B1G2GM9NG0"
    api-key="aadef574be1f9252bb48d4ea09b5cfe5"
    index-name="demo_ecommerce"
    :query-parameters="{
      hitsPerPage: 5,
      attributesToSnippet: ['description:24'],
      snippetEllipsisText: ' [...]'
    }"
  >
    <main class="search-container">
      <div class="left-panel">
        <div id="categories">
          <refinement-list attribute-name="categories" header-title="Categories"/>
        </div>
        <div id="brands">
          <refinement-list attribute-name="brand" header-title="Brands"/>
        </div>
      </div>
      <div class="right-panel">
        <div id="searchbox">
          <ais-search-box placeholder="Search for products" class="ais-search-box"/>
        </div>
        <div id="stats">
          <div>
            <ais-stats>
              <template slot-scope="{ totalResults, processingTime, query, resultStart, resultEnd }">
                ⚡️ <strong>{{ totalResults }}</strong> results found
                <span v-if="query !== ''">for <strong>"{{ query }}"</strong></span>
                in <strong>{{ processingTime }}ms</strong>
              </template>
            </ais-stats>
          </div>
        </div>
        <div id="hits">
          <ais-results class="ais-hits">
            <template slot-scope="{ result }">
              <hit :result="result"/>
            </template>
          </ais-results>
          <ais-no-results>
            <template slot-scope="props">
              No results found for <strong>{{ props.query }}</strong>.
            </template>
          </ais-no-results>
        </div>
        <div id="pagination">
          <ais-pagination>
            <template slot="first">«</template>
            <template slot="previous">‹</template>
            <template slot="next">›</template>
            <template slot="last">»</template>
          </ais-pagination>
        </div>
      </div>
    </main>
  </ais-index>
</template>

<script>
import Hit from './components/Hit'
import RefinementList from './components/RefinementList'

export default {
  components: { Hit, RefinementList }
}
</script>

<style src="./assets/styles.css"></style>
