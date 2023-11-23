import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

const routes: Routes = [
  { path: 'all', component: EventsComponent },
  { path : 'create', component: CreateEventComponent},
  { path : 'detail/:id', component: EventDetailComponent},
  // ... other auth routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
