import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EventService } from 'src/app/events/service/event.service';
import { IEvent } from 'src/app/events/interfaces/event';
import { IDistrict } from 'src/app/events/interfaces/district';
import { IEventCategory } from 'src/app/events/interfaces/eventCategory';
import { IEventState } from 'src/app/events/interfaces/eventState';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  constructor(private eventService: EventService) {}
  events: IEvent[] = [];
  loggedIn: boolean = false;

  displayedEvents: IEvent[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private paginatorInitialized = false;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    if (mp) {
      this.paginatorInitialized = true;
      this.paginator.page.subscribe(() => {
        this.applyFilters();
      });
      this.applyFilters(); // Apply filters when paginator is ready
    }
  }

  filters: {
    title: string;
    category: string;
    district: string;
    beginDate: string;
    endDate: string;
    state: string;
  } = {
    title: '',
    category: '',
    district: '',
    beginDate: '',
    endDate: '',
    state: '',
  };
  districts: IDistrict[] = [];
  categories: IEventCategory[] = [];
  states: IEventState[] = [];

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
      this.updateDisplayedEvents(events);
      // Get unique categories
      const categoryMap = new Map(
        this.events
          .flatMap((event) => event.eventCategories)
          .map((category) => [category.name, category])
      );
      this.categories = Array.from(categoryMap.values());

      // Get unique districts
      const districtMap = new Map(
        this.events.map((event) => [
          event.location.district.name,
          event.location.district,
        ])
      );
      this.districts = Array.from(districtMap.values());

      // Get unique states
      const stateMap = new Map(
        this.events.map((event) => [event.eventState.name, event.eventState])
      );
      this.states = Array.from(stateMap.values());
    });

    if (localStorage.getItem('user')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  private updateDisplayedEvents(filteredEvents: IEvent[]) {
    if (!this.paginatorInitialized) return;

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.displayedEvents = filteredEvents.slice(startIndex, endIndex);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe(() => {
        // Only update the displayed events based on the current page
        this.updateDisplayedEvents(this.getCurrentFilteredEvents());
      });
    }
  }

  private getCurrentFilteredEvents(): IEvent[] {
    let filteredEvents = this.events;

    if (this.filters.title) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(this.filters.title.toLowerCase())
      );
    }
    if (this.filters.category) {
      filteredEvents = filteredEvents.filter((event) =>
        event.eventCategories.some(
          (category) =>
            category.name.toLowerCase() === this.filters.category.toLowerCase()
        )
      );
    }
    if (this.filters.district) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.location.district.name.toLowerCase() ===
          this.filters.district.toLowerCase()
      );
    }
    if (this.filters.beginDate) {
      const beginDateFilter = new Date(this.filters.beginDate);
      beginDateFilter.setHours(0, 0, 0, 0);
      filteredEvents = filteredEvents.filter((event) => {
        let eventDate = new Date(event.date.beginDate);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= beginDateFilter;
      });
    }
    if (this.filters.endDate) {
      const endDateFilter = new Date(this.filters.endDate);
      endDateFilter.setHours(23, 59, 59, 999);
      filteredEvents = filteredEvents.filter((event) => {
        let eventDate = new Date(event.date.endDate);
        eventDate.setHours(23, 59, 59, 999);
        return eventDate <= endDateFilter;
      });
    }
    if (this.filters.state) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.eventState.name.toLowerCase() ===
          this.filters.state.toLowerCase()
      );
    }

    return filteredEvents;
  }

  applyFilters() {
    const filteredEvents = this.getCurrentFilteredEvents();

    // Update the paginator length every time filters are applied
    if (this.paginatorInitialized) {
      this.paginator.length = filteredEvents.length;

      // Reset the paginator's page index to 0 only if any filter is actively applied
      if (this.areFiltersApplied()) {
        this.paginator.pageIndex = 0;
      }

      this.updateDisplayedEvents(filteredEvents);
    }
  }

  // Utility method to check if any filter is applied
  private areFiltersApplied(): boolean {
    if (
      this.filters.title ||
      this.filters.category ||
      this.filters.district ||
      this.filters.beginDate ||
      this.filters.endDate ||
      this.filters.state
    ) {
      return true;
    } else {
      return false;
    }
  }
}
