import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
// import { HttpClient}

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor (private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }

  addEmployee(employeeObject): Observable<IEmployee[]> {
    return this.http.post<IEmployee[]>(this.url, employeeObject);
  }

  // deleteEmployee(): Observable<IEmployee[]> {
  //   return this.http.delete<IEmployee[]>(this.url)
  // }
}
