import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component: AuthComponent },
  { path:'dashboard', component: PagesComponent,
    children: [
      { path: 'productores',
        loadChildren: () => import('./productores/productores.module').then(m => m.ProductoresModule)
      },
      { path: 'registroRecepcionLeche',
      loadChildren: () => import('./registroRecepcionLeche/registroRecepcionLeche.module').then(m => m.RegistroRecepcionLecheModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
