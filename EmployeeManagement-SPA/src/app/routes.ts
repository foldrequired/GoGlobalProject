import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees/employees-create/employees-edit/employees-edit.component';
import { EmployeeEditResolver } from './_resolvers/employee-edit.resolver';

export const appRoutes: Routes = [
  // Home Page Router
  { path: '', component: HomeComponent },
  // Employees Router
  { path: 'employees/create', component: EmployeesCreateComponent },
  { path: 'employees/:employeeId', component: EmployeesEditComponent, resolve: {employee: EmployeeEditResolver} },
  // Managers Router
  // Redirect to home page if href is incorrect
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
