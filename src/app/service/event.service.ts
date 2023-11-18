import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Event } from '../interfaces/event';
import { DateRequestDTO } from '../interfaces/dateRequestDTO';
import { EventCategory } from '../interfaces/eventCategory';
import { EventStateEnum } from '../interfaces/eventState.enum';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private apiURL = '/api/v1/events';

  private headers = new HttpHeaders({
    Authorization: 'Bearer ' + this.apiKey,
  });

  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<Event[]>(this.apiUrl + this.apiUrl + '/all', {
      headers: this.headers,
    });
  }

  getEventById(id: number) {
    return this.http.get<Event>(this.apiUrl + this.apiURL + '/get/id/' + id, {
      headers: this.headers,
    });
  }

  getEventByTitle(title: string) {
    return this.http.get<Event>(
      this.apiUrl + this.apiURL + '/get/title/' + title,
      { headers: this.headers },
    );
  }

  getEventByDate(dateRequestDTO: DateRequestDTO) {
    return this.http.post<Event[]>(
      this.apiUrl + this.apiURL + '/get/date',
      dateRequestDTO,
      { headers: this.headers },
    );
  }

  getEventByCategory(categories: EventCategory[]) {
    return this.http.post<Event[]>(
      this.apiUrl + this.apiURL + '/get/category',
      categories,
      { headers: this.headers },
    );
  }
  getEventByState(state: string) {
    return this.http.get<Event[]>(
      this.apiUrl + this.apiURL + '/get/state/' + state,
      { headers: this.headers },
    );
  }
}
