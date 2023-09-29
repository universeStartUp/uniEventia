import { Component, Input} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroCalendarSolid } from '@ng-icons/heroicons/solid';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  providers: [provideIcons({ heroCalendarSolid })],
})
export class EventCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() price: string = '';
  @Input() image: string = '';
}
