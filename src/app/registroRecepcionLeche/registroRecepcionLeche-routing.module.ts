import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { RegistroRecepcionLecheComponent } from './registroRecepcionLeche.component';
import { RglVerComponent } from './rgl-ver/rgl-ver.component';
import { RglNuevoComponent } from './rgl-nuevo/rgl-nuevo.component';


const routes: Routes = [
  {
    path: '',
    component: RegistroRecepcionLecheComponent,
    children: [
      { path: 'ver', component: RglVerComponent },
      { path: 'nuevo', component: RglNuevoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRecepcionLecheRoutingModule { }
