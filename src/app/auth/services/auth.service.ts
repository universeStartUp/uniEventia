import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogInCredentials, IRegisterPayload } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = environment.apiUrl  + '/auth/signin'; // URL to web api for login
  private registerUrl = environment.apiUrl  + '/auth/signup'; // URL to web api for registration

  constructor(private http: HttpClient) { }

  // Login method
  login(credentials: ILogInCredentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  // Registration method
  register(details: IRegisterPayload): Observable<any> {
    return this.http.post(this.registerUrl, details);
  }
}