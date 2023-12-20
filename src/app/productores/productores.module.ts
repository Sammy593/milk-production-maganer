import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


import { ProdVerComponent } from './prod-ver/prod-ver.component';
import { ProductoresRoutingModule } from './productores-routing.module';
import { MainComponent } from './main.component';
import { ProdNuevoComponent } from './prod-nuevo/prod-nuevo.component';

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent,
    ProdVerComponent,
    ProdNuevoComponent
  ],
  imports: [
    CommonModule,
    ProductoresRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class ProductoresModule { }
