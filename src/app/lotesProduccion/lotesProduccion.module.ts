import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { LotesProduccionComponent } from './lotesProduccion.component';
import { LpVerComponent } from './lp-ver/lp-ver.component';
import { LpNuevoComponent } from './lp-nuevo/lp-nuevo.component';
import { LoteProduccionRoutingModule } from './lotesProduccion-routing.module';


@NgModule({
  declarations: [
    LotesProduccionComponent,
    LpVerComponent,
    LpNuevoComponent
  ],
  imports: [
    CommonModule,
    LoteProduccionRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class LotesProduccionModule { }
