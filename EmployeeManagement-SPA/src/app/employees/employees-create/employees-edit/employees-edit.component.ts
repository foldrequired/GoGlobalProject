import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from 'src/app/_services/manager.service';
import { Manager } from 'src/app/_models/manager';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  employee: Employee;
  managers: Manager[];
  editEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
              private formBuilder: FormBuilder, private router: Router,
              private managerService: ManagerService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.employee = data.employee;
    });
    this.editForm();
    this.getManagers();
  }

  updateEmployee() {
    if (this.editEmployeeForm.valid) {
      this.employee = Object.assign({}, this.editEmployeeForm.value);
    }
    console.log(this.employee);
    this.employeeService.updateEmployee(this.route.snapshot.params.employeeId, this.employee).subscribe(next => {
      console.log('Updated Employee successfully');
    }, err => {
      console.log(err);
    }, () => {
      this.router.navigate(['/']);
    });
  }

  editForm() {
    // Only Numbers Regex
    const numericRegex = /^-?(0|[1-9]\d*)?$/;
    // Only Alphabet Regex
    const alphabetRegex = /[a-zA-Z]+/;

    this.editEmployeeForm = this.formBuilder.group({
      firstName: [this.employee.firstName, [Validators.required, Validators.pattern(alphabetRegex)]],
      lastName: [this.employee.lastName, [Validators.required, Validators.pattern(alphabetRegex)]],
      personalIdentity: [this.employee.personalIdentity, [Validators.required, Validators.minLength(9), Validators.pattern(numericRegex)]],
      managerId: [this.employee.managerId, Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  getManagers() {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, err => {
      console.log(err);
    });
  }

  /*
  getSingleEmployee() {
    this.employeeService.getSingleEmployee(+this.route.snapshot.params.employeeId).subscribe((employee: Employee) => {
      this.employee = employee;
    }, err => {
      console.log(err);
    });
  }
  */
}
