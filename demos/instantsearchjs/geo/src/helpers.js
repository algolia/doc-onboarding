export function initGoogleMaps() {
  const map = new google.maps.Map(document.querySelector("#map"), {
    streetViewControl: false,
    mapTypeControl: false,
    zoom: 4,
    minZoom: 3,
    maxZoom: 6,
    styles: [{ stylers: [{ hue: "#3596D2" }] }]
  });

  let markers = [];
  let infoWindows = [];

  return { map, markers, infoWindows };
}

export function resetMarkers(markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  return markers;
}

export function getMapBounds(markers) {
  const mapBounds = new google.maps.LatLngBounds();
  for (let i = 0; i < markers.length; i++) {
    mapBounds.extend(markers[i].getPosition());
  }
  return mapBounds;
}

export function buildInfoWindow(hit) {
  return new google.maps.InfoWindow({
    content:
      hit.name === hit.city
        ? `${hit.name} - ${hit.country}`
        : `${hit.name} - ${hit.city} - ${hit.country}`
  });
}
