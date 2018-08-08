<template>
  <div>
    <span role="img" aria-label="emoji">⚡️️</span>
    <strong>{{ result.totalResults }}</strong> airports found
    <span v-if="matchedCityOrCountry">
      in the <strong class="cityOrCountry">{{ result.query }}</strong> <span v-show="isCity">city</span><span v-show="isCountry">country</span> in <strong>{{ result.processingTime }}ms</strong>.
      They are ordered them by number of liaisons.
    </span>
    <span v-else>
      <span v-if="result.query !== ''">for <strong>"{{ result.query }}"</strong></span> in <strong>{{ result.processingTime }}ms</strong>.
      They are ordered by proximity to your current location.
    </span>
  </div>
</template>

<script>
import { Component } from 'vue-instantsearch'

export default {
  props: {
    result: Object
  },
  mixins: [Component],
  computed: {
    getRawResults() {
      return this.searchStore._helper.lastResults._rawResults[0]
    },
    getAppliedRules() {
      return this.getRawResults.appliedRules
    },
    getAppliedRule() {
      return parseInt(this.getAppliedRules[0].objectID)
    },
    matchedCityOrCountry() {
      return (
        !!this.getRawResults && !!this.getAppliedRules && !!this.getAppliedRule
      )
    },
    isCity() {
      return this.getAppliedRule === 1533666439869
    },
    isCountry() {
      return this.getAppliedRule === 1533666408827
    }
  }
}
</script>
