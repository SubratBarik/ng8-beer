import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  title = "Brewerage Details";

  beer: Object;

  constructor( private route: ActivatedRoute, private data:HttpService ) { 
    this.route.params.subscribe( params => this.beer = params.id );
   }

  ngOnInit() {

    this.loadDetails();

    this.data.getBeerDetails(this.beer).subscribe(
      data => this.beer = data 
    );

  }

  loadDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    //console.log(typeof(id));
  }

}
