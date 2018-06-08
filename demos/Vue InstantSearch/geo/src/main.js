import Vue from 'vue';
import App from './App.vue';
import InstantSearch from 'vue-instantsearch';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBnDR4e5_qobPG6Vn_zjhc1vyOIooChZt8',
  },
})


Vue.use(InstantSearch);

new Vue({
  el: '#app',
  render: h => h(App),
});
