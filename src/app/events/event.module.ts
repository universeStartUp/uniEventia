import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component'; // Import ReactiveFormsModule
import { EventRoutingModule } from './event-routing.module';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule
  ]
})
export class EventModule { }
