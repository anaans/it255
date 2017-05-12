import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';

@Component({
selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
{path:'/', name: 'Login', component: LoginComponent, useAsDefault: true},
{path:'/signup', name:'Signup', component: SignupComponent}
])
export class AppComponent {

}