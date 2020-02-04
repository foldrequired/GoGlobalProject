import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_models/employee';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];
  employeeParams: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

  }

  searchEmployees() {
    this.employeeService.getEmployees(this.employeeParams).subscribe((employees: Employee[]) => {
      this.employees = employees;
    }, err => {
      console.log(err);
    });
  }

}
