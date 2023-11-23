import { Component } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroCalendar } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  providers: [provideIcons({ heroCalendar })],
})

export class EventDetailComponent {
  event!: IEvent;
  constructor(private eventServices: EventService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const eventId = +params['id']; // The '+' operator converts the string to a number
      this.loadEvent(eventId);
    });
  }

  private loadEvent(id: number): void {
    this.eventServices.getEventById(id).subscribe(event => {
      this.event = event;
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
}
