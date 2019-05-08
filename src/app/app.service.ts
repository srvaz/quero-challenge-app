import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_PATH = 'https://testapi.io/api/redealumni/scholarships';

  constructor(private http: HttpClient) { }

  getScholarships() {
    return this.http.get(this.API_PATH);
  }
}
