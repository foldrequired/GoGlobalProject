import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../_models/manager';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl + 'managers');
  }
}
