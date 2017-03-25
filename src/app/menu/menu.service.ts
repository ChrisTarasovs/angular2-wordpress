import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Menu } from './menu';

@Injectable()
export class MenuService {

  private _wpMenuBase = "http://ecommerce-ux.london/wp-json/wp-api-menus/v2/";

  constructor(private http: Http) { }

  getPosts(): Observable<Menu[]> {

      return this.http
        .get(this._wpMenuBase + 'menus/2')
        .map((res: Response) => res.json());

  }
 


}
