import { Component, Input } from '@angular/core';

import { IEvent } from 'src/app/interfaces/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event!: IEvent;
  @Input() image: string = '';

  constructor(private router: Router) {}

  goToEventDetail(id: number) {
    this.router.navigate(['/events/detail', id]);
  }
}
