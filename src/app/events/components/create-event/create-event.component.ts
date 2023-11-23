import { Component, ViewChild, ElementRef, NgZone} from '@angular/core';
import { IDepartment } from 'src/app/events/interfaces/department';
import { IDistrict } from 'src/app/events/interfaces/district';
import { ILocation } from 'src/app/events/interfaces/location';



declare var google: any;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  center: google.maps.LatLngLiteral = {lat: -9.226014, lng: -74.939174};
  zoom = 12;
  markers: any[] = [];

  selectedDepartment: IDepartment | undefined;
  selectedDistrict: IDistrict | undefined;
  selectedLocation: ILocation | undefined;

  private geocoder = new google.maps.Geocoder();
  @ViewChild('map') mapElement!: ElementRef;
  @ViewChild('addressInput') addressInput!: ElementRef;

  private map!: google.maps.Map;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // Initialize the map when the component is ready
    this.initMap();
  }

  private initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: this.center,
      zoom: this.zoom,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Add click event listener to the map
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.ngZone.run(() => {
        this.setMapLocationByLatLng(event.latLng);
      });
    });
  }

  private setMapLocationByLatLng(latLng: google.maps.LatLng): void {
    // Convert LatLng to address
    this.geocoder.geocode({ location: latLng }, (results: any, status: any) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          const address = results[0].formatted_address;
          this.center = {
            lat: latLng.lat(),
            lng: latLng.lng(),
          };
          this.addMarker(this.center);
          this.ngZone.run(() => {
            this.selectedLocation = {
              id: 1, // You may need to generate a unique ID
              address: address,
              district: this.selectedDistrict!,
            };
          });
        }
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  }

  private clearMarkers(): void {
    // Clear all markers from the map
    this.markers.forEach(marker => {
      marker.setMap(null);
    });

    // Remove all markers from the array
    this.markers = [];
  }

  onSelectDepartment(department: IDepartment): void {
    this.selectedDepartment = department;
    this.selectedDistrict = undefined; // Clear the selected district when department changes
    this.selectedLocation = undefined; // Clear the selected location when department changes
  }
  onSelectDistrict(district: IDistrict): void {
    this.selectedDistrict = district;
    this.selectedLocation = undefined; // Clear the selected location when district changes
  }

   ngAfterViewInit() {
    this.initializeAutocomplete();
  }

  private initializeAutocomplete(): void {
    if (!this.addressInput) return;

    const autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.error('Autocomplete\'s returned place contains no geometry');
          return;
        }
        this.updateMapLocation(place.geometry.location);
      });
    });
  }

  private updateMapLocation(location: google.maps.LatLng) {
    this.center = {
      lat: location.lat(),
      lng: location.lng(),
    };
    this.addMarker(this.center);
    this.map.setCenter(this.center);
  }

  private addMarker(position: google.maps.LatLngLiteral): void {
    this.clearMarkers(); // Clear existing markers
  
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: 'Event Location',
    });
  
    this.markers.push(marker); // Add the marker to the array
  }
  
}
