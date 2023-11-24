import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { StudentUpdate } from '../interfaces/student-update';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  static studentUrl = environment.apiUrl + '/student/update';
  constructor(
    private http:HttpClient
  ) { }

  getStudent(): Observable<Student> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.get<Student>(
      StudentService.studentUrl, 
      { headers }
    );
  }

  updateStudent(updatedStudent: StudentUpdate): Observable<Student> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`
    });
    return this.http.put<Student>(
      StudentService.studentUrl, 
      updatedStudent,
      { headers }
    );
  }
}
