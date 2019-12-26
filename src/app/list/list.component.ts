import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
//import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = "List of Breweries";

  brews: Object;

  constructor( private _http: HttpService ) { }

  ngOnInit() {

    this._http.getBeer().subscribe( data => {

      this.brews = data;

      console.log(this.brews);

    } );

  }

}
