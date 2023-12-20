import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prod-ver',
  templateUrl: './prod-ver.component.html',
  styleUrls: ['./prod-ver.component.scss']
})
export class ProdVerComponent {
  data:any;
  constructor(private http: HttpClient){
  //get request from web api
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    this.data = data;
  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25]
  } );
  }, 1);
        }, error => console.error(error));
}
}
