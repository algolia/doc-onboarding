<template>
  <ais-index
    app-id="B1G2GM9NG0"
    api-key="aadef574be1f9252bb48d4ea09b5cfe5"
    index-name="demo_geo"
    :query-parameters="{
      hitsPerPage: 6,
      getRankingInfo: true,
      aroundLatLngViaIP: true,
      highlightPreTag: '<em class=\'highlight\'>',
      highlightPostTag: '</em>',
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
                    <ais-highlight attribute-name="name" :result="result"></ais-highlight>
                    <ais-highlight
                      attribute-name="city"
                      :result="result"
                      v-if="result.displayCity"
                    >
                    </ais-highlight>
                  </span>
                  <span class="hit-airport-code">
                    (<ais-highlight attribute-name="airport_id" :result="result"></ais-highlight>)
                  </span>
                </h2>
                <p class="hit-location">
                  <ais-highlight attribute-name="country" :result="result"></ais-highlight>
                  <span class="hit-distance">({{distance(result)}} km away)</span>
                </p>
              </div>
            </template>
          </ais-results>
        </div>
      </div>
      <div class="right-panel">
        <div id="searchbox">
          <ais-search-box></ais-search-box>
        </div>
        <div id="stats">
          <ais-stats>
            <template slot-scope="{ totalResults, processingTime, query, resultStart, resultEnd }">
              ⚡️ <strong>{{ totalResults }}</strong> results found <span v-if="query !== ''">for <strong>"{{ query }}"</strong></span> in <strong>{{ processingTime }}ms</strong>
            </template>
          </ais-stats>
        </div>
        <div id="map">
          <geo-map></geo-map>
        </div>
      </div>
    </main>
    <footer>Source Code on <a href="#">GitHub</a></footer>
  </ais-index>
</template>

<script>
import GeoMap from './GeoMap.vue';

export default {
  components: {
    'geo-map': GeoMap,
  },
  methods: {
    distance(result) {
      return parseInt(
        result._rankingInfo.matchedGeoLocation.distance / 1000,
        10
      );
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

html,
body {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100%;
  padding: 24px;
  font-size: 14px;
  line-height: 24px;
  overflow-y: scroll;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  background: #f0f2f5;
  flex-direction: column;
}

a {
  color: #5468ff;
}

.highlight {
  font-style: normal;
  font-weight: bold;
}

.search-container {
  flex-grow: 1;
  display: flex;
  width: 960px;
  min-height: 100%;
  margin: 0 auto;
}

@media (max-width: 1007px) {
  .search-container {
    width: 100%;
  }
}

.hit,
.ais-input {
  height: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.ais-input:focus {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.left-panel {
  flex: 0 0 240px;
}

.right-panel {
  width: calc(100% - 256px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#searchbox {
  flex-grow: 0;
  margin-bottom: 8px;
}

#searchbox,
#stats {
  flex-grow: 0;
}
.ais-search-box__form {
  position: relative;
  height: auto;
  width: 100%;
}

.ais-search-box__submit,
.ais-clear {
  position: absolute;
  top: 0;
  left: inherit;
  margin: 14px 16px;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
}

.ais-search-box__submit svg,
.ais-clear svg {
  width: 13px;
  height: 13px;
  display: block;
}

.ais-search-box__submit svg {
  fill: #5468ff;
}

.ais-clear svg {
  fill: #ed5a6a;
}

.ais-search-box__submit {
  right: 0;
}

.ais-clear {
  right: 30px;
}

.ais-clear--disabled {
  display: none;
}

.ais-input {
  width: 100%;
  padding: 8px 16px;
  font-weight: normal;
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

.ais-input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

#stats {
  flex-grow: 0;
  margin-bottom: 16px;
}

.ais-stats {
  font-size: 12px;
  color: #697782;
  opacity: 1;
}

#hits {
  margin-right: 24px;
  flex-grow: 1;
}

.hit {
  margin-bottom: 24px;
  padding: 16px;
}

.hit .hit-airport-code,
.hit .hit-location,
.hit .hit-name {
  margin: 0;
}

.hit .hit-name {
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.hit .hit-location {
  text-transform: uppercase;
  font-size: 12px;
  color: #999;
}

.hit:last-child {
  margin-bottom: 0;
}

#map {
  height: 100%;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 24px;
}

footer {
  flex-grow: 0;
  text-align: center;
  font-size: 12px;
  color: #999;
}

/* Placeholders */

#searchbox:empty:before,
#hits:empty:before,
#map:empty:before,
#stats:empty:before {
  display: block;
  color: #999;
  padding: 16px;
}

#searchbox:empty,
#hits:empty,
#map:empty,
#stats:empty {
  padding: 0;
  background: none;
  border: dashed 3px #ddd;
  box-shadow: none;
  border-radius: 4px;
}

#searchbox:empty,
#stats:empty,
#map:empty {
  margin-bottom: 24px;
}

#searchbox:empty:before {
  content: 'Uncomment the searchBox widget to add a search bar.';
}

#hits:empty:before {
  content: 'Uncomment the hits widget to add hits list.';
}

#stats:empty:before {
  content: 'Uncomment the stats widget to add search stats.';
}

#map:empty:before {
  content: 'Uncomment the map widget to add a map.';
}
</style>
