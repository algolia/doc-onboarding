<template>
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
      <span class="hit-distance">({{ getFormattedDistance(result._rankingInfo.matchedGeoLocation.distance) }} km away)</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  },
  methods: {
    getFormattedDistance(distance) {
      return parseInt(distance / 1000, 10)
    }
  }
}
</script>
