import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { Error404Component } from './componentes/error404/error404.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AccederComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    /*provideClientHydration(),*/
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
