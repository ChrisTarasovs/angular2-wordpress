import { Component, OnInit } from '@angular/core';
import { wpApiService } from '../services/wpApi.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'siderbar-nav',
  //templateUrl: './post-list.component.html',
template: `

<div class="sidebarWidget">
    <h2 class="menulabel">Menu list</h2>
    <div class="list-group menulist">
      <ul>
            <li  *ngFor="let item of menu"  class="list-group-item">
                       <span (click)="selectedPage(item.object_slug)"> {{item.title}} </span>
                       <ul>  
                              <li  *ngFor="let subeitem of item.children" class="list-group-item">
                                 <span (click)="selectedPage(subeitem.object_slug)" >  {{subeitem.title}} {{subeitem.object_slug}} </span>
                              </li>
                       </ul>

             </li>
        </ul>
    </div>
</div>

`
/*
categories <br />
<div class="list-group">
  <a  *ngFor="let cat of categories" (click)="selectedCat(cat.slug)" class="list-group-item"> {{cat.name}} <br />( {{cat.slug}} ) </a>
</div>
<div class="sidebarWidget">
    <h2 class="menulabel">Posts </h2>
    <div class="list-group">
      <div *ngFor="let post of posts" (click)="selectedPage(post.slug)" class="list-group-item">
            {{post.title.rendered}} <br />(  {{post.slug}} )
      </div>
    </div>
</div>

<div class="sidebarWidget">
    <h2 class="menulabel">Pages </h2>
    <div class="list-group">
      <div *ngFor="let page of pages" (click)="selectedPage(page.slug)" class="list-group-item">
            {{page.title.rendered}} <br /> (  {{page.slug}} )
      </div>
    </div>
</div>
*/

//,
  //styleUrls: ['./post-list.component.css']
  //providers: [PostsService]
})
export class sidebarComponent  {

 pages: any;
 posts: any;
 menu: any;
 categories: any;
 acf: any;

  constructor( private _apiService: wpApiService, private _router: Router  ) { 

  


             this._apiService.getPages().subscribe(data =>{
                this.pages = data
              })

            
              this._apiService.getPosts().subscribe(data =>{
                this.posts = data; 
              //  const categ: string[] = data.map(data => data.categories);
            
                //console.log('data cat', categ)
              })

                this._apiService.getMenu().subscribe(data =>{
                  this.menu = data.items
                  console.log('menu data',this.menu)
                })

              this._apiService.getCategories().subscribe(data =>{
                 this.categories = data
               })

                this._apiService.getWp(1).subscribe(data =>{
                  this.acf = data.acf.anchor
               })



  }
/*
selectedPost(postslug){
  console.log('page slg ', postslug);
    this._router.navigate([postslug]);
}
*/
    selectedPage(pageslug){
      console.log('page slg ', pageslug);
        this._router.navigate([pageslug]);
    }
    selectedCat(pageslug){
      console.log('page slg ', pageslug);
        this._router.navigate(pageslug);
    }

    selectedMenu(){

    }

}
