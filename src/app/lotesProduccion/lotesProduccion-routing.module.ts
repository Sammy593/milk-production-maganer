import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LotesProduccionComponent } from './lotesProduccion.component';
import { LpVerComponent } from './lp-ver/lp-ver.component';
import { LpNuevoComponent } from './lp-nuevo/lp-nuevo.component';


const routes: Routes = [
  {
    path: '',
    component: LotesProduccionComponent,
    children: [
      { path: 'ver', component: LpVerComponent },
      { path: 'nuevo', component: LpNuevoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteProduccionRoutingModule { }
