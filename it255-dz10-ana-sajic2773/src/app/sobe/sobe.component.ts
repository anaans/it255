import {Component} from '@angular/core';
import  {Http} from '@angular/http';

@Component({
  selector: 'sobe',
  templateUrl: './sobe.component.html',

})

export class SobeComponent {
  private sobe: string;

  constructor(private http: Http ) {
  }

  ngOnInit () {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost/php/sobe.php')
      .subscribe(res => this.sobe = res.json());
  }
}
