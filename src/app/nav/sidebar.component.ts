import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { wpApiService } from '../services/wpApi.services';

@Component({
  selector: 'sidebarNav',
  //templateUrl: './post-list.component.html',
template: `



<nav class="navbar-default navbar-static-side" role="navigation">
        
        <div class="sidebar-collapse">

            <ul class="nav metismenu" id="side-menu">
 
                <li class="nav-header">
                    <div class="dropdown profile-element"> 
                            <span>
                                <img alt="image" class="img-circle" src="assets/img/ecommerce-ux-logo-ChrisTarasovs.png" />
                             </span>
                             <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                               <span class="clear"> <span class="block m-t-xs"> 
                                 <strong class="font-bold">
                                     ECOMMERCE <br />  
                                     <span class="user">USER</span> <BR /> 
                                     EXPERIENCE
                                 </strong>
                               </span> <span class="text-muted text-xs block">Based in London </span> </span> 
                             </a>
                       
                    </div>
                    <div class="logo-element">
                        IN+
                    </div>
                </li>
             </ul>
             <ul class="nav metismenu" id="side-menu">
                  <li class="active">
                       <a href="#">
                         <i class="fa fa-angle-right" aria-hidden="true"></i>
                             <span class="nav-label">
                               Currently Opened
                             </span>
                      </a>
                      <ul class="nav nav-second-level ">
                              <li  *ngFor="let item of acf" (click)="selectedMenu(item.anchor_link)" > 
                                     <a href="#">
                                           <i class="fa fa-angle-right" aria-hidden="true"></i>
                                           <span class="nav-label">
                                               {{item.anchor_name}} 
                                           </span>
                                    </a>
                              </li>
                      </ul>
                  </li>
             </ul>
             <ul class="nav metismenu" id="side-menu">
                  <li class="active">
                       <a href="#">
                         <i class="fa fa-angle-right" aria-hidden="true"></i>
                             <span class="nav-label">
                               Categories
                             </span>
                      </a>
                      <ul class="nav nav-second-level ">
                              <li *ngFor="let cat of categories" (click)="selectedCat(cat.slug)" > 
                                     <a href="#">
                                           <i class="fa fa-angle-right" aria-hidden="true"></i>
                                           <span class="nav-label">
                                              {{cat.name}} <br />   <!-- ( {{cat.slug}} )  -->
                                           </span>
                                    </a>
                              </li>
                      </ul>
                  </li>
             </ul>

             <ul class="nav metismenu" id="side-menu">

          
                <li>
                    <a href="#">
                    <i class="fa fa-desktop"></i> 
                    <span class="nav-label">App Views</span>  
                    <span class="pull-right label label-primary">SPECIAL</span></a>

                </li>
                <li class="active">
                    <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="search_results.html">Search results</a></li>
                    
                        <li class="active"><a href="empty_page.html">Empty page</a></li>
                    </ul>
                </li>
             
                <li>
                    <a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label">Menu Levels </span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li>
                            <a href="#">Third Level <span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>

                            </ul>
                        </li>
                        <li><a href="#">Second Level Item</a></li>
                       
                    </ul>
                </li>
          
            </ul>

        </div>
    </nav>

`
})
export class sideNavComponent  implements OnInit{
  public brandLogo = 'assets/img/ecommerce-ux-logo.png';

  public  pages: any;
  public posts: any;
  public menu: any;
  public categories: any;
  public acf: any;
  public pageSlug:any;

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

  }

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
