import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LISTA_PLANES } from '../shared/constants/url';
import { Plan } from '../shared/models/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Plan[]> {
    return this.http.get<Plan[]>(LISTA_PLANES);
  }
}
