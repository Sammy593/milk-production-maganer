import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Data_form } from '../models/productores/data_form.model';

const base_url = "http://localhost:3500";
@Injectable({
  providedIn: 'root',
})
export class ProductoresService {
  public data_form: Data_form[] = [];

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }

  productores(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  insert(data_form: any): Observable<any> {
    const url = `${base_url}/`;
    const headers = this.headers;
    if (headers) {
      return this.http.post(url, data_form, headers);
    } else {
      console.error('Headers indefinidos');
      return of(null);
    }
  }
}