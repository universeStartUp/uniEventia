import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component'; // Import ReactiveFormsModule
import { EventRoutingModule } from './event-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent,
    CreateEventComponent,
    EventDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    NgIconComponent,
    SharedModule,
    FormsModule,
    GoogleMapsModule,
    MaterialModule,
  ],
  exports: [
    EventCardComponent, // Export the components you want to use in other modules
  ],
})
export class EventModule {}
