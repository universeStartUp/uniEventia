import { Component, Input, Output} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroCalendarSolid } from '@ng-icons/heroicons/solid';
import { IEvent } from 'src/app/interfaces/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  providers: [provideIcons({ heroCalendarSolid })],
})
export class EventCardComponent {
  @Input() event! : IEvent;
  @Input() image: string = '';

  constructor(private router: Router) { 
  }

  goToEventDetail(id: number) {
    this.router.navigate(['/events/detail', id]);
  }
  
}
