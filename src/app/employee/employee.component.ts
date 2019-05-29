import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: [ './employee.component.css' ]
})
export class EmployeeComponent implements OnInit {

  public emplyoeeSecond = [];
  titleForm: FormGroup;
  submitted = false;

  constructor (private employeeService: EmployeeServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeService.getEmployee()
      .subscribe(data => this.emplyoeeSecond = data);
    this.createForm();

  }


  createForm() {
    this.titleForm = this.formBuilder.group({
      title: [ '', Validators.required ]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.titleForm.invalid) {
      return;
    }
    console.log('Success');
    console.log(this.titleForm.value);
    // this.emplyoeeSecond.push(this.titleForm.value);
    this.employeeService.addEmployee(this.titleForm.value)
      .subscribe(
        data => {
          this.emplyoeeSecond.push(data)
          console.log(data);
        }
      );
    this.titleForm.reset();
  }


  onDelete(id) {
    // this.emplyoeeSecond.splice(id, 1)
    // this.emplyoeeSecond = this.emplyoeeSecond;
    console.log(id)
    for (let i = 0; i <= this.emplyoeeSecond.length; i++) {
      console.log(this.emplyoeeSecond[ i ])
      if (this.emplyoeeSecond[ i ].id == id) {
        console.log(id)
        this.emplyoeeSecond.splice(i, 1)
      }

    }

  }

}
