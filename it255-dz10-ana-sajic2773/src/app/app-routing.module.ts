import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PocetnaComponent} from "./pocetna/pocetna.component";
import {LoginComponent} from "./login/login.component";
import {RegistracijaComponent} from "./registracija/registracija.component";
import {SobeComponent} from "./sobe/sobe.component";
const routes: Routes = [
  {path : '', redirectTo: '/pocetna', pathMatch: 'full'},
  {path : 'pocetna', component : PocetnaComponent},
  {path : 'login', component : LoginComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'sobe', component: SobeComponent}
]
@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
