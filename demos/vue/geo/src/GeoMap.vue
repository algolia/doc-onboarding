<template>
  <google-map
    :center="{lat:0, lng:0}"
    :zoom="4"
    style="width: 100%; height: 100%"
    :options="{
      streetViewControl: false,
      mapTypeControl: false,
      minZoom: 3,
      maxZoom: 6,
      styles: [{ stylers: [{ hue: '#3596D2' }] }]
    }"
  >
    <google-map-marker
      v-for="(m) in markers"
      :key="m.key"
      :position="m.position"
      :clickable="false"
      :draggable="false"
    >
    </google-map-marker>
  </google-map>
</template>

<script>
import { Component } from 'vue-instantsearch';
import { Map, Marker } from 'vue2-google-maps';

export default {
  mixins: [Component],
  components: {
    'google-map-marker': Marker,
    'google-map': Map,
  },
  computed: {
    markers() {
      return this.searchStore.results.map(({ objectID, _geoloc }) => ({
        key: objectID,
        position: _geoloc,
      }));
    },
  },
};
</script>

