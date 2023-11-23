import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component'; // Import ReactiveFormsModule
import { EventRoutingModule } from './event-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    NgIconComponent,
  ],
  exports: [
    EventCardComponent // Export the components you want to use in other modules
  ]
})
export class EventModule { }
