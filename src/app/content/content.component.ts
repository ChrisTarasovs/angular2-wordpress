import { Component, OnInit } from '@angular/core';
import { Page } from '../content.module';
//import { PageService } from '../page.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { wpApiService } from '../services/wpApi.services';

import * as _ from "lodash";

@Component({
  selector: 'app-page-single',
  //templateUrl: './page-single.component.html',
  //styleUrls: ['./page-single.component.css'],
  //providers: [PageService]
  //<page [postdata]="postdata"></page>
  template: `


 <div *ngIf="(newContent | json) != '{}'" >
   <h1>{{pageTitle}} </h1>
    <div [innerHTML]="pageContent"></div>

     <div *ngIf="(pageSections | json) != '{}'" >
        <div *ngFor="let section of pageSections">
            <div id="{{section.anchor_link}} ">
                <div class="section-image" *ngIf="section.section_image"  >
                       <img src="{{section.section_image.sizes.large}} "  />
                 </div>
                  <h2>{{section.section_title}}</h2>
                  <div [innerHTML]="section.section_content"></div>
             </div>
        </div>
     </div>
     <div class="search-help">
       <div class="search-avatar">
            <img [src]="brandLogo" width="100%">
       </div>
       <div class="search-form">
             <label>You are welcome to use the search to find more interesting UX </label>
             <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
              </div>
       </div>
     </div>
</div>


  `
})
export class contentComponent implements OnInit {
    public brandLogo = 'assets/img/chris-tarasovs.jpg';

postdata :any;

page: any;
pageobj:any;
postsobj:any;
pageobjCheck:any
postsobjCheck:any
pageSlug:any;
content = Array<any>();
newContent:any;
pageTitle:any;
pageContent: any;
pageCat:any;
pageSections: any;
list:any;
  constructor( private _apiService: wpApiService, private route: ActivatedRoute ) { }



  getdata(slug){
      this._apiService.getPages().subscribe(data =>{

        this.pageobj = data
        let checkdata = _.filter(this.pageobj,{slug: slug})

        if(checkdata.length != 0  ){
       //    alert('asdasd')
                  // Get the previouse object  and remove it
                  this.content.splice( 0, 1);
                  // Add the new object in the list
                  this.content.splice( 0, 0, checkdata);
             

            


              // this.content.push(_.filter(this.pageobj,{slug: slug}))
              this.postdata = this.content[0][0];
            


              this.newContent =  this.content[0][0]
              this.pageTitle =  this.newContent.title.rendered
              this.pageContent =  this.newContent.content.rendered
              this.pageCat = this.newContent.categories
              this.pageSections =  this.newContent.acf.anchor
              
        }
      
        
      })

  
    this._apiService.getPosts().subscribe(data =>{
        this.postsobj = data;
        let checkdata = _.filter(this.postsobj,{slug: slug})

        if(checkdata.length != 0){
            //  this.content.push(_.filter(this.postsobj,{slug: slug}))

                  // Get the previouse object  and remove it
                  this.content.splice( 0, 1);
                  // Add the new object in the list
                  this.content.splice( 0, 0, checkdata);

                  this.newContent =  this.content[0][0]
                  this.postdata = this.content[0][0];
                  this.pageTitle =  this.newContent.title.rendered
                  this.pageContent =  this.newContent.content.rendered
                  this.pageCat = this.newContent.categories
                  this.pageSections =  this.newContent.acf.anchor
      
        }
         

    })
   }


  ngOnInit() {

        this.route.params.forEach((params: Params) => {
          // Get slug from the rout
           let slug = params['pageslug'];
           console.log('slug is catcheds', slug)
           this.pageSlug = params['pageslug'];
          this.getdata(slug)
         // alert(slug )

          // Run functions
      //     
        });

          
    }
 }