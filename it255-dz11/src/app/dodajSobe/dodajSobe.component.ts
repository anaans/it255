import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'dodajSobe',
    templateUrl: `./dodajSobe.component.html`,
    styleUrls: ['./dodajSobe.component.css']
})

export class DodajSobeComponent  {

    http: Http;
    router: Router;
    data: string;
    headers: Headers;

    dodajSobuForm = new FormGroup({
        tip: new FormControl(),
        sprat: new FormControl(),
        cena: new FormControl(),

    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    dodaj(): void {
        this.data = 'tip=' + this.dodajSobuForm.value.tip + '&sprat=' + this.dodajSobuForm.value.sprat
            + '&cena=' + this.dodajSobuForm.value.cena;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/dodajSobu.php', this.data, { headers: this.headers })
            .subscribe(
                data => {
                    if (data['_body'] === 'ok') {
                        this.router.navigate(['']);
                    }
                }
            );
        alert('Uspesno ste uneli sobu!');
    }

}