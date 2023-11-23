import { Component, ViewChild, ElementRef, NgZone} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  center: google.maps.LatLngLiteral = {lat: 40.7128, lng: -74.0060};
  zoom = 12;
  markers: any[] = [];

  private geocoder = new google.maps.Geocoder();
  @ViewChild('map') mapElement!: ElementRef;


  private setMapLocation(address: string): void {
    this.geocoder.geocode({ 'address': address }, (results : any, status : any) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        // Optionally, add a marker to the map
        this.addMarker(this.center);
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  }

  private addMarker(position: google.maps.LatLngLiteral): void {
    // Assuming you have a markers array to manage multiple markers
    this.markers.push({
      position: position,
      title: 'Event Location',
    });
  }
}
