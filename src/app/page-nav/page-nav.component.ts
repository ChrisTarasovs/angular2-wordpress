import { Component, OnInit } from '@angular/core';
import { wpApiService } from '../services/wpApi.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'pagenav',
  //templateUrl: './post-list.component.html',
template: `


<div class="pageNav">

<div class="currentPgNav sidebarWidget">
    <h2 class="menulabel">Currently Opened</h2>
    <ul class="list-group ">
      <li  *ngFor="let item of acf" (click)="selectedMenu(item.anchor_link)" > 
             <i class="fa fa-angle-right" aria-hidden="true"></i>{{item.anchor_name}} 
      </li>
    </ul>
</div>

<div class="sidebarCat sidebarWidget">
      <h2 class="menulabel">Categories </h2>
      <ul class="list-group">
          <li *ngFor="let cat of categories" (click)="selectedCat(cat.slug)" class="list-group-item"> 
                 <i class="fa fa-angle-right" aria-hidden="true"></i> {{cat.name}} <br />   <!-- ( {{cat.slug}} )  -->
          </li>
      </ul>
</div>

</div>

`//,
  //styleUrls: ['./post-list.component.css']
  //providers: [PostsService]
})
export class pageNavComponent  implements OnInit{

 pages: any;
 posts: any;
 menu: any;
 categories: any;
 acf: any;
 pageSlug:any;

  constructor( private _apiService: wpApiService, private _router: Router  ) { 
               this._apiService.getPages().subscribe(data =>{
                  this.pages = data
                  console.log('pg data', data);
                })

              
                this._apiService.getPosts().subscribe(data =>{
                  this.posts = data; 
                //  const categ: string[] = data.map(data => data.categories);
              
                  //console.log('data cat', categ)
                })

                  this._apiService.getMenu().subscribe(data =>{
                    this.menu = data.items

                  })

                this._apiService.getCategories().subscribe(data =>{
                   this.categories = data
                 })
                this.currentMenu();

/*
                  this._apiService.getWp(1).subscribe(data =>{
                    this.acf = data.acf.anchor
                    console.log('acf is ', this.acf)
                   // console.log( 'acf',  this.acf)
                 })
               */
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

        currentMenu(){
                 this._apiService.getWp(100).subscribe(data =>{
                    this.acf = data.acf.anchor
                    console.log('acf is ', this.acf)
                   // console.log( 'acf',  this.acf)
                 })
        }


ngOnInit() {


}


}
