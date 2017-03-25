import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';
import { Menu } from '../menu/menu';
import { Page } from '../page/page';



@Injectable()
export class PostsService {

  private _wpBase = "http://ecommerce-ux.london/wp-json/wp/v2/";
  private _wpMenuBase = "http://ecommerce-ux.london/wp-json/wp-api-menus/v2/";

 // constructor(private http: Http) { }

  constructor(private http: Http) {
    this.http = http
    this.getPosts().subscribe(
        (data) => {
          console.log('posts', data)
         
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
      );
    this.getPages().subscribe(
        (data) => {
          console.log('pages', data)

        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
    );
    this.getMenu().subscribe(
        (data) => {
          console.log('menu', data)

        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
    );
  }
  
  getMenu(): Observable<Menu[]> {
      return this.http
        .get(this._wpMenuBase + 'menus/2')
        .map((res: Response) => res.json());
  }


  getPosts(): Observable<Post[]> {
      return this.http
      .get(this._wpBase + 'posts')
      .map((res: Response) => res.json());
  }
  getPages(): Observable<Page[]> {

      return this.http
      .get(this._wpBase + 'pages')
 
        .map((res: Response) => res.json());

  }

  getPost(slug): Observable<Post> {

      return this.http
        .get(this._wpBase + `posts?slug=${slug}`)
        .map((res: Response) => res.json());

  }

}
