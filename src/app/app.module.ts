import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgLoginComponent } from './Paginas/pg-login/pg-login.component';
import { PgCatalogoComponent } from './Paginas/pg-catalogo/pg-catalogo.component';
import { PgErrorComponent } from './Paginas/pg-error/pg-error.component';

@NgModule({
  declarations: [
    AppComponent,
    PgLoginComponent,
    PgCatalogoComponent,
    PgErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
