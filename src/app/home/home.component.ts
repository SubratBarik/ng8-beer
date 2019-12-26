import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
//import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = "Home";

  posts: Object;

  constructor( private _http: HttpService ) { }

  ngOnInit() {

    this._http.getPosts().subscribe( data => {

      this.posts = data;

      //console.log(this.posts);

    } );

  }

}
