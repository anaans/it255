import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

import { SobeComponent } from './sobe/sobe.component';
import {LoginComponent} from  './login/login.component'

import {RegistracijaComponent} from './registracija/registracija.component';

import { PretragaCenaComponent } from './sobe/pretragacena.component';
import { PretragaTipComponent } from './sobe/pretragatip.component';
import { DodajSobeComponent } from './dodajSobe/dodajSobe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    LoginComponent,
    RegistracijaComponent,
    SobeComponent,
    PretragaTipComponent,
    PretragaCenaComponent,
      DodajSobeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
