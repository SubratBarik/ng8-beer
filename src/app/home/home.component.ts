import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Home";

  clickCounter: number = 0;

  name: string = '';

  countClick(){
    this.clickCounter++;
    //this.clickCounter += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
