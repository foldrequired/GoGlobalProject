import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ManagerService } from 'src/app/_services/manager.service';
import { Manager } from 'src/app/_models/manager';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  managers: Manager[];
  managerIdSelector: number;

  constructor(private employeeService: EmployeeService, private managerService: ManagerService) { }

  ngOnInit() {
    this.loadManagers();
  }

  loadEmployees() {
    this.employeeService.getEmployeesByManagerId(this.managerIdSelector).subscribe((employees: Employee[]) => {
      this.employees = employees;
    }, err => {
      console.log(err);
    });
  }

  loadManagers() {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, err => {
      console.log(err);
    });
  }

  searchEmp() {

  }

}
