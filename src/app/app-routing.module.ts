import { PgErrorComponent } from './Paginas/pg-error/pg-error.component';
import { PgCatalogoComponent } from './Paginas/pg-catalogo/pg-catalogo.component';
import { PgLoginComponent } from './Paginas/pg-login/pg-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component:PgLoginComponent
  },
  {
    path:'pgLogin', component:PgLoginComponent
  },
  {
    path:'pgCat',component: PgCatalogoComponent
  },
  {
    path:'pgError',component: PgErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
