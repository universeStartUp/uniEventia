import { Component, OnInit } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { EventInterface } from './interfaces/event.interface';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [provideIcons({ heroStarSolid })],
})
export class AppComponent implements OnInit{
  constructor (private eventService : EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      console.log(events);
    });
  }
  
  eventos : EventInterface[] = [
    { title: 'Viernes de Bandas', date: 'Sábado 09 sep. - 8:00pm', price: 'Gratis', image: '/assets/img/events/1.jpg' },
    { title: 'Visita al Campus', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.20', image: '/assets/img/events/2.jpg' },
    { title : 'Viernes Cultural', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.30', image: '/assets/img/events/3.jpg'},
    { title: 'Conversatorio: Historias de Pandemia', date: 'Sábado 09 sep. - 8:00pm', price: 'S/.40', image: '/assets/img/events/4.jpg' },
  ];

}
