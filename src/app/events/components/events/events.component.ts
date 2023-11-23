import { Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EventService } from 'src/app/service/event.service';
import { IEvent } from 'src/app/interfaces/event';
import { provideIcons } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { IDistrict } from 'src/app/interfaces/district';
import { IEventCategory } from 'src/app/interfaces/eventCategory';
import { IEventState } from 'src/app/interfaces/eventState';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  providers: [provideIcons({ heroStarSolid })],
})
export class EventsComponent {
  constructor (private eventService : EventService) {}
  events : IEvent[] = [];
  loggedIn : boolean = false;

  displayedEvents: IEvent[] = [];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  filters: any = {
    title: '',
    category: '',
    department: '',
    beginDate: '',
    endDate: '',
    state: ''
  };
  districts : IDistrict[] = [];
  categories : IEventCategory[] = [];
  states : IEventState[] = [];

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
      this.updateDisplayedEvents();
      // Flattening the nested array of categories
      this.categories = [...new Set(this.events.flatMap((event) => event.eventCategories.map((category) => category)))];
      this.districts = [...new Set(this.events.map((event) => event.location.district))];
      this.states = [...new Set(this.events.map((event) => event.eventState))];
    });
  
    if (localStorage.getItem('user')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  private updateDisplayedEvents() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedEvents = this.events.slice(startIndex, startIndex + this.paginator.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.updateDisplayedEvents();
    });
  }
  
  applyFilters() {
    let filteredEvents = this.events;
  
    if (this.filters.title) {
      filteredEvents = filteredEvents.filter(event => event.title.toLowerCase().includes(this.filters.title.toLowerCase()));
    }
    if (this.filters.category) {
      filteredEvents = filteredEvents.filter(event => event.eventCategories.some(category => category.name.toLowerCase() === this.filters.category.toLowerCase()));
    }
    if (this.filters.department) { // Make sure this is consistent with your template
      filteredEvents = filteredEvents.filter(event => event.location.district.department.name.toLowerCase() === this.filters.department.toLowerCase());
    }
    if (this.filters.beginDate) {
      filteredEvents = filteredEvents.filter(event => new Date(event.date.beginDate) >= new Date(this.filters.beginDate));
    }
    if (this.filters.endDate) {
      filteredEvents = filteredEvents.filter(event => new Date(event.date.endDate) <= new Date(this.filters.endDate));
    }
    if (this.filters.state) {
      filteredEvents = filteredEvents.filter(event => event.eventState.name.toLowerCase() === this.filters.state.toLowerCase());
    }
  
    this.displayedEvents = filteredEvents;
    this.paginator.pageIndex = 0;
    this.updateDisplayedEvents();
  }
}
