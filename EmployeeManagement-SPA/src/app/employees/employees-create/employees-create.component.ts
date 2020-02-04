import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Employee } from 'src/app/_models/employee';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Manager } from 'src/app/_models/manager';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  employee: Employee;
  managers: Manager[];
  createEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router,
              private formBuilder: FormBuilder, private managerService: ManagerService) { }

  ngOnInit() {
    this.createForm();
    this.getManagers();
  }

  getManagers() {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, err => {
      console.log(err);
    });
  }

  createEmployee() {
    if (this.createEmployeeForm.valid) {
      this.employee = Object.assign({}, this.createEmployeeForm.value);
    }
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      console.log('Employee has been created');
    }, err => {
      console.log('Employee creation failed');
    }, () => {
      this.router.navigate(['/']);
    });
  }

  createForm() {
    // Only Numbers Regex
    const numericRegex = /^-?(0|[1-9]\d*)?$/;
    // Only Alphabet Regex
    const alphabetRegex = /[a-zA-Z]+/;

    this.createEmployeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(alphabetRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(alphabetRegex)]],
      personalIdentity: ['', [Validators.required, Validators.minLength(9), Validators.pattern(numericRegex)]],
      managerId: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
