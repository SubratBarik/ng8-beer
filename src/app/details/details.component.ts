import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  title = "Brewerage Details";

  id: Object;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {

    this.loadDetails();

  }

  loadDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    //console.log(typeof(id));
  }

}