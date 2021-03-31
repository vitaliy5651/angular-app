import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getMenSlides(): Observable<any> {
    return this.http.get('assets/mocks/menSlides.json');
  }
  getWomenSlides(): Observable<any> {
    return this.http.get('assets/mocks/womenSlides.json');
  }
  searchById(): Observable<any>{
    return forkJoin(['assets/mocks/menSlides.json','assets/mocks/womenSlides.json'])
  }

}