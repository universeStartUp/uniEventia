import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component'; // Import ReactiveFormsModule
import { EventRoutingModule } from './event-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent,
    CreateEventComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    NgIconComponent,
    SharedModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    EventCardComponent // Export the components you want to use in other modules
  ]
})
export class EventModule { }
