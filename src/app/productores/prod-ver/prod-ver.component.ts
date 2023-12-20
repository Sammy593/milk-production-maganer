import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ProductoresService} from '../../services/productores.service';

@Component({
  selector: 'app-prod-ver',
  templateUrl: './prod-ver.component.html',
  styleUrls: ['./prod-ver.component.scss']
})
export class ProdVerComponent {

  data: any;
  constructor(private formDataService: ProductoresService) {
    //get request from web api
    this.formDataService.productores().subscribe(data => {
      console.log(data);
      this.data = data;
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }


  eliminar(cedula:string){
    console.log(cedula);
  }
}
