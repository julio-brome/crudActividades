import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../model/activity-model';
import { EmployeeModel } from '../model/employee-model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivitys(): Observable<ActivityModel[]>{
    return this.httpClient.get<ActivityModel[]>('http://localhost:9000/api/v1/actividades/list').pipe(map(res => res));
  }

  getEmpleados(): Observable<EmployeeModel[]>{
    return this.httpClient.get<any>('http://localhost:9000/api/v1/actividades/list.empleados').pipe(map(res => res));
  }

  saveActivity(request: any): Observable<ActivityModel[]>{
    return this.httpClient.post<any>('http://localhost:9000/api/v1/actividades',request).pipe(map(res => res));
  }

  updateActivity(request: any): Observable<ActivityModel[]>{
    return this.httpClient.put<any>('http://localhost:9000/api/v1/actividades',request).pipe(map(res => res));
  }

  deleteActivity(id: number): Observable<ActivityModel[]>{
    return this.httpClient.delete<any>('http://localhost:9000/api/v1/actividades/' + id).pipe(map(res => res));
  }
}
