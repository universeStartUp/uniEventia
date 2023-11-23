import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IEvent } from '../interfaces/event';
import { IDateRequestDTO } from '../interfaces/dateRequestDTO';
import { IEventCategory } from '../interfaces/eventCategory';
import { EventStateEnum } from '../interfaces/eventState.enum';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private apiURL = '/api/v1/events';

  private headers = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get<IEvent[]>(this.apiUrl + this.apiURL + '/all', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }

  getEventById(id: number) {
    return this.http.get<IEvent>(this.apiUrl + this.apiURL + '/get/id/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }

  getEventByTitle(title: string) {
    return this.http.get<IEvent>(
      this.apiUrl + this.apiURL + '/get/title/' + title,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
      },
    );
  }

  getEventByDate(dateRequestDTO: IDateRequestDTO) {
    return this.http.post<IEvent[]>(
      this.apiUrl + this.apiURL + '/get/date',
      dateRequestDTO,
      { headers: this.headers },
    );
  }

  getEventByCategory(categories: IEventCategory[]) {
    return this.http.post<IEvent[]>(
      this.apiUrl + this.apiURL + '/get/category',
      categories,
      { headers: this.headers },
    );
  }
  getEventByState(state: string) {
    return this.http.get<IEvent[]>(
      this.apiUrl + this.apiURL + '/get/state/' + state,
      { headers: this.headers },
    );
  }
}
