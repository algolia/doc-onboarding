/* global instantsearch */

const search = instantsearch({
  appId: "B1G2GM9NG0",
  apiKey: "aadef574be1f9252bb48d4ea09b5cfe5",
  indexName: "demo_geo",
  searchParameters: {
    hitsPerPage: 6,
    getRankingInfo: true,
    aroundLatLngViaIP: true,
    highlightPreTag: "<em class='highlight'>",
    highlightPostTag: "</em>",
    typoTolerance: "min"
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search airports by name, city, airport code",
    autofocus: false
  })
);

search.addWidget(
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
);

const map = new google.maps.Map(document.querySelector("#map"), {
  streetViewControl: false,
  mapTypeControl: false,
  zoom: 4,
  minZoom: 3,
  maxZoom: 6,
  styles: [{ stylers: [{ hue: "#3596D2" }] }]
});

let markers = [];

search.addWidget(
  instantsearch.connectors.connectHits(function(HitsRenderingOptions) {
    const hits = HitsRenderingOptions.hits;

    removeMarkersFromMap();
    markers = [];

    for (let i = 0; i < hits.length; ++i) {
      const hit = hits[i];
      const marker = new google.maps.Marker({
        position: { lat: hit._geoloc.lat, lng: hit._geoloc.lng },
        map: map,
        airport_id: hit.objectID,
        title: hit.name + " - " + hit.city + " - " + hit.country
      });
      markers.push(marker);
      attachInfoWindow(marker, hit);
    }

    fitMapToMarkers();
  })()
);

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `⚡️ <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
);

search.start();

/* Helpers */

function removeMarkersFromMap() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function fitMapToMarkers() {
  const mapBounds = new google.maps.LatLngBounds();
  for (let i = 0; i < markers.length; i++) {
    mapBounds.extend(markers[i].getPosition());
  }
  map.fitBounds(mapBounds);
}

function attachInfoWindow(marker, hit) {
  const message =
    hit.name === hit.city
      ? `${hit.name} - ${hit.country}`
      : `${hit.name} - ${hit.city} - ${hit.country}`;
  const infowindow = new google.maps.InfoWindow({ content: message });
  marker.addListener("click", function() {
    setTimeout(function() {
      infowindow.close();
    }, 3000);
  });
}
