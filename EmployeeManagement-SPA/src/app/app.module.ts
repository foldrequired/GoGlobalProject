import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EmployeesCreateComponent } from './employees/employees-create/employees-create.component';
import { EmployeesListComponent } from './employees/employees-create/employees-list/employees-list.component';
import { ManagersCreateComponent } from './managers/managers-create/managers-create.component';
import { ManagersListComponent } from './managers/managers-create/managers-list/managers-list.component';
import { EmployeeService } from './_services/employee.service';
import { ManagerService } from './_services/manager.service';
import { EmployeesEditComponent } from './employees/employees-create/employees-edit/employees-edit.component';
import { EmployeeEditResolver } from './_resolvers/employee-edit.resolver';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      EmployeesCreateComponent,
      EmployeesListComponent,
      EmployeesEditComponent,
      ManagersCreateComponent,
      ManagersListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
     EmployeeService,
     ManagerService,
     EmployeeEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
