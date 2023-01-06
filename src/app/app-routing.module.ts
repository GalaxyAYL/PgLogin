import { FacturaComponent } from './direcciones/factura/factura.component';
import { ErrorComponent } from './direcciones/error/error.component';
import { MainComponent } from './direcciones/main/main.component';
import { LoginComponent } from './direcciones/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component:LoginComponent
  },
  {
    path:'pgLogin', component:LoginComponent
  },
  {
    path:'pgMain',component: MainComponent
  },
  {
    path:'pgError',component: ErrorComponent
  },
  {
    path:'Factura',component: FacturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
