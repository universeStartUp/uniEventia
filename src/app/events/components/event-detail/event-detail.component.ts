import { Component, ViewChild, ElementRef } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent {
  event!: IEvent;
  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 };
  zoom = 12;
  markers: any[] = [];

  private geocoder = new google.maps.Geocoder();

  @ViewChild('map') mapElement!: ElementRef;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params['id'];
      this.loadEvent(eventId);
    });
  }

  private loadEvent(id: number): void {
    this.eventService.getEventById(id).subscribe((event) => {
      this.event = event;
      this.setMapLocation(event.location.address);
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  private setMapLocation(address: string): void {
    this.geocoder.geocode({ address: address }, (results: any, status: any) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        // Optionally, add a marker to the map
        this.addMarker(this.center);
      } else {
        console.error(
          `Geocode was not successful for the following reason: ${status}`
        );
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
