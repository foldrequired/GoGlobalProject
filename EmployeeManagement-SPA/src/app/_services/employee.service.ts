import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getEmployees(employeeParams?): Observable<Employee[]> {
    let params = new HttpParams();

    if (employeeParams != null) {
        params = params.append('firstName', employeeParams.firstName);
        params = params.append('lastName', employeeParams.lastName);
        params = params.append('personalIdentity', employeeParams.personalIdentity);
    }

    return this.http.get<Employee[]>(this.baseUrl + 'employees', { params });
  }

  getSingleEmployee(employeeId): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'employees/' + employeeId);
  }

  updateEmployee(employeeId: number, employee: Employee) {
    return this.http.put(this.baseUrl + 'employees/' + employeeId, employee);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.baseUrl + 'employees', employee);
  }

  getEmployeesByManagerId(managerId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees/manager/' + managerId);
  }
}
