import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  blog: Object;

  constructor( private route: ActivatedRoute, private data:HttpService ) { 

    this.route.params.subscribe( params => this.blog = params.id );

  }

  ngOnInit() {

    this.loadPosts();

    this.data.getPostDetails(this.blog).subscribe(
      data => this.blog = data 
    );

  }

  loadPosts(){

    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    //console.log(typeof(id));

  }

}
