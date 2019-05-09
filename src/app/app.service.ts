import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scholarship } from './models/scholarship.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private API_PATH = 'https://testapi.io/api/redealumni/scholarships';

  constructor(private http: HttpClient) { }

  getScholarships(): Observable<Scholarship[]> {
    return this.http.get<Scholarship[]>(this.API_PATH);
  }
}
