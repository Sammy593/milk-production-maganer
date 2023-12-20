import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdVerComponent } from './prod-ver/prod-ver.component';
import { ProdNuevoComponent } from './prod-nuevo/prod-nuevo.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '',
  component: MainComponent,
  children: [
    {
      path: 'ver',
      component: ProdVerComponent,
    },
    {
      path: 'nuevo',
      component: ProdNuevoComponent,
    }
  ], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoresRoutingModule { }
