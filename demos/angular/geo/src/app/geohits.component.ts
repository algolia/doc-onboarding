import {
  Component,
  Inject,
  forwardRef,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectGeoSearch } from 'instantsearch.js/es/connectors';
import {} from '@types/googlemaps';
import { Hit } from 'angular-instantsearch/instantsearch/instantsearch';

@Component({
  selector: 'ais-geo-hits',
  template: '<div #map id="map"></div>',
})
export class GeoHits extends BaseWidget {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  state: {
    items: any;
  };
  markers = [];

  updateState = state => {
    this.updateMarkers(state.items);
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('GeoHits');
  }

  public ngOnInit() {
    this.createWidget(connectGeoSearch);
    super.ngOnInit();
  }

  public ngOnDestroy() {
    this.removeMarkersFromMap()
  }

  private updateMarkers(items) {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 4,
      minZoom: 3,
      maxZoom: 6,
      styles: [{ stylers: [{ hue: '#3596D2' }] }],
    });

    items.forEach(hit => {
      const marker = new google.maps.Marker({
        position: { lat: hit._geoloc.lat, lng: hit._geoloc.lng },
        map: this.map,
        title: `${hit.name} - ${hit.city} - ${hit.country}`,
      });

      this.markers.push(marker);
      this.attachInfoWindow(marker, hit);
    })

    this.fitMapToMakers();
  }

  private attachInfoWindow(marker, hit) {
    const message =
      hit.name === hit.city
        ? `${hit.name} - ${hit.country}`
        : `${hit.name} - ${hit.city} - ${hit.country}`;

    const infowindow = new google.maps.InfoWindow({ content: message });

    marker.addListener('click', function() {
      setTimeout(function() {
        infowindow.close();
      }, 3000);
    });
  }

  private removeMarkersFromMap() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    })
  }

  private fitMapToMakers() {
    const mapBounds = new google.maps.LatLngBounds();

    this.markers.forEach(marker => {
      mapBounds.extend(marker.getPosition());
    })

    this.map.fitBounds(mapBounds);
  }
}
