import { NgModule } from '@angular/core'


import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {HeaderComponent} from './header/header.component'
import {PocetnaComponent} from './pocetna/pocetna.component'
import {LoginComponent} from  './login/login.component'
import {AppRoutingModule} from './app-routing.module'
import {RegistracijaComponent} from './registracija/registracija.component'
import {SobeComponent} from './sobe/sobe.component'
import {PretragaTipComponent} from './sobe/pretragatip.component'
import {PretragaCenaComponent} from './sobe/pretragacena.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    LoginComponent,
    RegistracijaComponent,
    SobeComponent,
    PretragaTipComponent,
    PretragaCenaComponent


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
