import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor(private http: HttpClient) { }

  productores(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}




