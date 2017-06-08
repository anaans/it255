import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']

})
export class RegistracijaComponent {
  http: Http;
  router: Router;
  data: string;

  registerForma = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl(),
    email: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;

    if (localStorage.getItem('token') != null) {
      this.router.navigate(['']);
    }

  }
  registracija(): void {
    this.data = 'username=' + this.registerForma.value.username + '&password=' + this.registerForma.value.password + '&ime=' +
        this.registerForma.value.ime + '&prezime=' + this.registerForma.value.prezime + '&email=' + this.registerForma.value.email;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255-dz11/src/php/registracija.php', this.data, {headers: headers})
        .map(res => res)
        .subscribe(data => {
              console.log(data);
              let obj = JSON.parse(data['_body']);
              localStorage.setItem('token', obj.token);
              alert('Uspesna registracija!');
              this.router.navigate(['']);
            },
            err => {
              alert('Greska');
              let obj = JSON.parse(err._body);
              let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
              element.style.display = 'block';
              element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
            }
        );
  }
}
