<template>
  <ais-index
    app-id="B1G2GM9NG0"
    api-key="aadef574be1f9252bb48d4ea09b5cfe5"
    index-name="demo_geo"
    :query-parameters="{
      hitsPerPage: 6,
      getRankingInfo: true,
      aroundLatLngViaIP: true,
      typoTolerance: 'min'
    }"
  >
    <main class="search-container">
      <div class="left-panel">
        <div id="hits">
          <ais-results>
            <template slot-scope="{ result }">
              <div class="hit">
                <h2 class="hit-name">
                  <span class="hit-airport-name">
                    <ais-highlight attribute-name="name" :result="result"/>
                    <ais-highlight attribute-name="city" :result="result"/>
                  </span>
                  <span class="hit-airport-code">
                    (<ais-highlight attribute-name="airport_id" :result="result"/>)
                  </span>
                </h2>
                <p class="hit-location">
                  <ais-highlight attribute-name="country" :result="result"/>
                  <span class="hit-distance">({{distance(result)}} km away)</span>
                </p>
              </div>
            </template>
          </ais-results>
        </div>
      </div>
      <div class="right-panel">
        <div id="searchbox">
          <ais-search-box placeholder="Search airports by name, city, airport code" class="ais-search-box"/>
        </div>
        <div id="stats">
          <div>
            <ais-stats>
              <div slot-scope="{ totalResults, processingTime, query, resultStart, resultEnd }">
                ⚡️ <strong>{{ totalResults }}</strong> results found
                <span v-if="query !== ''">for <strong>"{{ query }}"</strong></span>
                in <strong>{{ processingTime }}ms</strong>
              </div>
            </ais-stats>
          </div>
        </div>
        <div id="map">
          <geo-map/>
        </div>
      </div>
    </main>
    <footer>
      Source Code on
      <a href="https://github.com/algolia/doc-onboarding">GitHub</a> | Powered by
      <a href="https://www.algolia.com">Algolia</a>
    </footer>
  </ais-index>
</template>

<script>
import GeoMap from './GeoMap.vue'

export default {
  components: {
    'geo-map': GeoMap
  },
  methods: {
    distance(result) {
      return parseInt(
        result._rankingInfo.matchedGeoLocation.distance / 1000,
        10
      )
    }
  }
}
</script>

<style src="./assets/styles.css"></style>
