import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class wpApiService {
  private _uxDomain = 'http://ecommerce-ux.london/';
  private _content = "wp-json/wp/v2/";
  private _MainMenu = "wp-json/wp-api-menus/v2/menus/";
  private _categories  = "categories";
  private _customfield = 'wp-json/acf/v2/'

constructor(private _jsonp: Jsonp, private http: Http) {}
 // constructor(private http: Http) { }

//      .get(this._wpBase + `posts?slug=${slug}`)

    getPages(){
      return this.http.get(this._uxDomain +  this._content + 'pages').map(response => response.json())
    }
    getPage(slug){
      return this.http.get(this._uxDomain +  this._content + 'pages' + '?slug=' + slug ).map(response => response.json())
    }
    getPosts(){
      return this.http.get(this._uxDomain  +  this._content + 'posts' ).map(response => response.json())
    }
    getPost(slug){
      return this.http.get(this._uxDomain  +  this._content + 'posts' + '?slug=' + slug ).map(response => response.json())
    }
    getMenu(){
      return this.http.get(this._uxDomain  +  this._MainMenu + '2').map(response => response.json())
    }
    getCategories(){
      return this.http.get(this._uxDomain   +  this._content +  this._categories ).map(response => response.json())
    }


    getWp(pageID){
      console.log(this._uxDomain   +  this._customfield  +  'post/' + pageID)
        // return this.http.get('http://ecommerce-ux.london/wp-json/wp/v2').map(response => response.json())
        return this.http.get(this._uxDomain   +  this._customfield +  'post/' + pageID).map(response => response.json())
    }


/*
    getWp(){
         return this._jsonp.get('http://ecommerce-ux.london/wp-json/wp/v2/posts/1?callback=JSONP_CALLBACK').map(response => response.json(

   ))
   */

    getACF(){
     

      //console.log(this._uxDomain   +  this._customfield  )
      return this.http.get(this._uxDomain   +  this._customfield ).map(response => response.json())

    }



    /*
    this.http = http
    this.getPost().subscribe(
        (data) => {
          console.log('posts', data)
         
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The posts Data")  }
      );

  
  
  
  }

  getPages(): Observable<Page[]> {

      return this.http
        .get(this._wpBase + 'pages')
        .map((res: Response) => res.json());
  }

  getPost(pageSlug): Observable<Page> {

      return this.http
       .get(this._wpBase + `pages?slug=${pageSlug}`)
        .map((res: Response) => res.json());
    
  }
    */

}
