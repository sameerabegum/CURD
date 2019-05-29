import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/https';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  constructor (private http: HttpClient) { }
  // employee = [];
  employee;
  ngOnInit() {
    // this.http.get('http://localhost:5555/employee').subscribe(
    //   data => {
    //     this.employee = data;	 // FILL THE ARRAY WITH DATA.
    //   }
    // );
  }



}
