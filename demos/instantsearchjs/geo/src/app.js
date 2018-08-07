/* global instantsearch */

import * as Helpers from "./helpers";

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_geo",
  searchParameters: {
    hitsPerPage: 6,
    getRankingInfo: true,
    aroundLatLngViaIP: true,
    typoTolerance: "min"
  }
});

// Uncomment the following widget to add a map.

/* let { map, markers, infoWindows } = Helpers.initGoogleMaps();

search.addWidget(
  instantsearch.connectors.connectHits(HitsRenderingOptions => {
    const hits = HitsRenderingOptions.hits;

    markers = Helpers.resetMarkers(markers);

    for (let i = 0; i < hits.length; ++i) {
      const hit = hits[i];
      const marker = new google.maps.Marker({
        position: { lat: hit._geoloc.lat, lng: hit._geoloc.lng },
        map: map,
        airport_id: hit.objectID,
        title:
          hit.name === hit.city
            ? `${hit.name} - ${hit.country}`
            : `${hit.name} - ${hit.city}, ${hit.country}`
      });
      const infowindow = Helpers.buildInfoWindow(hit);

      markers.push(marker);
      infoWindows.push(infowindow);

      marker.addListener("click", () => {
        infoWindows.forEach(infowindow => infowindow.close());
        infowindow.open(map, marker);
      });
    }

    map.fitBounds(Helpers.getMapBounds(markers));
  })()
); */

// Uncomment the following widget to add a search bar.

/* search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search airports by name, city, airport code",
    autofocus: false
  })
); */

// Uncomment the following widget to add hits list.

/* search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      item(hit) {
        return `
          <div class="hit">
            <h2 class="hit-name">
              <span class="hit-airport-name">
                ${hit._highlightResult.name.value}
                ${!hit.displayCity ? " " + hit._highlightResult.city.value : ""}
              </span>
              <span class="hit-airport-code">
                (${hit._highlightResult.airport_id.value})
              </span>
            </h2>
            <p class="hit-location">
              ${hit._highlightResult.country.value}
              <span class="hit-distance">(${parseInt(
                hit._rankingInfo.matchedGeoLocation.distance / 1000,
                10
              )} km away)</span>
            </p>
          </div>
        `;
      }
    }
  })
); */

// Uncomment the following widget to add search stats.

/* search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${
          hit.nbHits
        }</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
); */

search.start();
