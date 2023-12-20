import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rgl-ver',
  templateUrl: './rgl-ver.component.html',
  styleUrls: ['./rgl-ver.component.scss']
})
export class RglVerComponent {

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
