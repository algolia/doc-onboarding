<template>
  <google-map
    ref="gmap"
    :center="{ lat: 0, lng: 0 }"
    :zoom="4"
    :options="{
      streetViewControl: false,
      mapTypeControl: false,
      minZoom: 3,
      maxZoom: 6,
      styles: [{ stylers: [{ hue: '#3596D2' }] }]
    }"
  >
    <google-map-marker
      v-for="marker in markers"
      :key="marker.key"
      :position="marker.position"
      :clickable="false"
      :draggable="false"
    />
  </google-map>
</template>

<script>
import { Component } from 'vue-instantsearch'
import { Map, Marker } from 'vue2-google-maps'

export default {
  mixins: [Component],
  components: {
    'google-map-marker': Marker,
    'google-map': Map
  },
  computed: {
    markers() {
      return this.searchStore.results.map(({ objectID, _geoloc }) => ({
        key: objectID,
        position: _geoloc
      }))
    },
    getMapBounds() {
      const mapBounds = new google.maps.LatLngBounds()
      for (let marker of this.markers) {
        mapBounds.extend(marker.position)
      }
      return mapBounds
    }
  },
  methods: {
    fitBounds(bounds) {
      this.$refs.gmap.$mapObject.fitBounds(bounds)
    }
  },
  updated() {
    this.$refs.gmap.$mapPromise.then(map => {
      this.fitBounds(this.getMapBounds)
    })
  }
}
</script>

