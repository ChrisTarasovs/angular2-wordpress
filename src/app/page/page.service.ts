import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Page } from './page';

@Injectable()
export class PageService {

  private _wpBase = "http://ecommerce-ux.london/wp-json/wp/v2/";

  constructor(private http: Http) { 
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

}
