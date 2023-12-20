import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { RegistroRecepcionLecheComponent } from './registroRecepcionLeche.component';
import { RglVerComponent } from './rgl-ver/rgl-ver.component';
import { RglNuevoComponent } from './rgl-nuevo/rgl-nuevo.component';
import { RegistroRecepcionLecheRoutingModule } from './registroRecepcionLeche-routing.module';


@NgModule({
  declarations: [
    RegistroRecepcionLecheComponent,
    RglVerComponent,
    RglNuevoComponent
  ],
  imports: [
    CommonModule,
    RegistroRecepcionLecheRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class RegistroRecepcionLecheModule { }
