import { Component } from '@angular/core';
import { EventInterface } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/service/event.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  constructor (private eventService : EventService) {}
  events : IEvent[] = [];
  loggedIn : boolean = false;

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
    if (localStorage.getItem('user')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  
  eventos : EventInterface[] = [
    { title: 'Viernes de Bandas', date: 'Sábado 09 sep. - 8:00pm', price: 'Gratis', image: '/assets/img/events/1.jpg' },
    { title: 'Visita al Campus', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.20', image: '/assets/img/events/2.jpg' },
    { title : 'Viernes Cultural', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.30', image: '/assets/img/events/3.jpg'},
    { title: 'Conversatorio: Historias de Pandemia', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.40', image: '/assets/img/events/4.jpg' },
  ];

}
