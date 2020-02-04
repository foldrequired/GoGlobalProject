import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_models/employee';

@Injectable()
export class EmployeeEditResolver implements Resolve<Employee> {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Employee> {
    return this.employeeService.getSingleEmployee(route.params.employeeId).pipe(
      catchError(err => {
        console.log(err);
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
