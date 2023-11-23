import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../service/event.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [provideIcons({ heroStarSolid })],
})
export class HomePageComponent {
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
  
  eventos : IEvent[] = [
    {
      id: 1,
      title: 'Viernes de Bandas',
      description: 'A vibrant night of live band performances.',
      date: { id: 1, beginDate: 'Sábado 09 sep. - 8:00pm', endDate: 'Domingo 10 sep. -10pm' },
      location: { id: 1, address: '123 Music Street', district: { id: 1, name: 'Downtown', department : { id: 1, name: "Downtown"} } },
      eventCategories: [{ id: 1, name: 'Music' }, { id: 2, name: 'Entertainment' }],
      eventState: { id: 1, name: 'Scheduled' },
      image : '/assets/img/events/1.jpg'
    },
    {
      id: 2,
      title: 'Visita al Campus',
      description: 'Guided tour around the university campus.',
      date: { id: 2, beginDate: 'Sábado 09 sep. - 8:00pm', endDate: 'Domingo 10 sep. -10pm' },
      location: { id: 2, address: '456 University Ave', district: { id: 2, name: 'University District', department : { id: 1, name: "University"} } },
      eventCategories: [{ id: 3, name: 'Education' }],
      eventState: { id: 1, name: 'Scheduled' },
      image : '/assets/img/events/2.jpg'
    },
    {
      id: 3,
      title: 'Viernes de Bandas',
      description: 'A vibrant night of live band performances.',
      date: { id: 1, beginDate: 'Sábado 09 sep. - 8:00pm', endDate: 'Domingo 10 sep. -10pm' },
      location: { id: 1, address: '123 Music Street', district: { id: 1, name: 'Downtown', department : { id: 1, name: "Downtown"} } },
      eventCategories: [{ id: 1, name: 'Music' }, { id: 2, name: 'Entertainment' }],
      eventState: { id: 1, name: 'Scheduled' },
      image : '/assets/img/events/3.jpg'
    },
    {
      id: 4,
      title: 'Visita al Campus',
      description: 'Guided tour around the university campus.',
      date: { id: 2, beginDate: 'Sábado 09 sep. - 8:00pm', endDate: 'Domingo 10 sep. -10pm' },
      location: { id: 2, address: '456 University Ave', district: { id: 2, name: 'University District', department : { id: 1, name: "University"} } },
      eventCategories: [{ id: 3, name: 'Education' }],
      eventState: { id: 1, name: 'Scheduled' },
      image : '/assets/img/events/4.jpg'
    },

  ];

}
