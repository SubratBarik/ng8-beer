import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // for HTTP API call
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor( private http: HttpClient ) { }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries'); //free api of brewarages
  }

  getBeerDetails(beerID) {
    return this.http.get('https://api.openbrewerydb.org/breweries/'+beerID);
  }

  getPosts(){
    return this.http.get('https://www.bitrump.com/news/wp-json/wp/v2/posts'); //Bitrump Rest API
  }

  getPostDetails(postID){
    return this.http.get('https://www.bitrump.com/news/wp-json/wp/v2/posts/'+postID);
  }
  

}
