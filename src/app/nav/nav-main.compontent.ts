/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  HostListener, Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {wpApiService} from '../services/wpApi.services'
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'main-nav',

  //<pre>
// {{topLevelMenu | json}}
// </pre>
  template: `


<div class="menu">
  <div class="_container">
    <div class="_first-level">
      <span (click)="startMenu()"> UX Menu </span>
      <ul>
            <li *ngFor="let item of breadcrumbs">
              <span (click)="breadcrumbLoad(item)"> {{ item.title}} </span>
            </li>
       </ul>
    </div>
    <div class="_options">
        <ul (scroll)="onScroll($event)">
            <li *ngFor="let item of topLevelMenu">
              <span (click)="loadMenu(item)">{{item.title}}</span>
            </li>
        </ul>
    </div>
  </div>
</div>

   `
})
export class MainNavComponent implements OnInit {
  public brandLogo = 'assets/img/ecommerce-ux-logo.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  public  currentIndex;

  public wpMenu: any;
  public topLevelMenu: any;
  public listItemH: any = 0;
  public breadcrumbs : any = [];
  constructor(
    @Inject(DOCUMENT) private _document: Document, private _wpApiService : wpApiService) {
     
      // this._wpApiService.getPages().subscribe(
      //           data =>{
      //             console.log('data', data)
      //                         this.wpMenu = data
      //                         this.startMenu();
                         
                             
      //           }
      //  )
        this._wpApiService.getMenu(6).subscribe(
                data =>{
                  console.log('data', data)
                              this.wpMenu = data.items
                              this.startMenu();
                         
                             
                }
       )



  }


  // Sort and Fitler
  startMenu(){
         this.breadcrumbs = [];
         this.topLevelMenu  =  this.wpMenu.sort(function(a, b) { 
            return b.id - a.id  ||  a.name.localeCompare(b.name);
          }).filter(function(item) {
                if(item.parent == 0)   return item;
           }); 
  }

breadcrumbLoad(item){


console.log('item', item)
  const elIndex =  this.breadcrumbs.indexOf(item);
  this.breadcrumbs = this.breadcrumbs.filter(
        function(currentValue, index, arr){
         return  elIndex >= index;
        }
    ); 
   this.topLevelMenu   = item.children
   // this.topLevelMenu  = this.wpMenu.filter(function(filteritem) {
   //                      if(filteritem.parent == item.id)   return filteritem;
   // }); 

    
}	
loadMenu(menuItem){
      this.breadcrumbs.push(menuItem)
      console.log('menuItem', menuItem)
      console.log('this.wpMenu', this.wpMenu)
       // this.topLevelMenu  = this.wpMenu.filter(function(item) {
       //   console.log(item.parent == menuItem.id, item.parent , menuItem.id)
       //                  if(item.parent == menuItem.id)   return item;
       //  }); 
    this.topLevelMenu = menuItem.children



      
}	

onScroll(event) {
	const elHeight = event.target.scrollHeight / event.target.children.length
	const elPosition =  [];
	for (var val = 0; val < event.target.children.length; val++) {
	 		elPosition.push(elHeight * val)
	 }

	function closest (num, arr) {
                var curr = arr[0];
            
                var diff = Math.abs (num - curr);
             
                for (var val = 0; val < arr.length; val++) {
                    var newdiff = Math.abs (num - arr[val]);
                    if (newdiff < diff) {
                   
                        diff = newdiff;
                        curr = arr[val];
                    }
               
                }
                return curr;
       }
            
      // console.log('closet', closest ( event.target.scrollTop + this.listItemH , elPosition));

 console.log('elPosition', elPosition)
      const middleEl =  (this.listItemH ) + event.target.scrollTop;
      const elIndex =   elPosition.findIndex(function(val){
            console.log('middleEl', middleEl)
            console.log( 'closet' , closest ( middleEl, elPosition))
             return val == closest ( middleEl, elPosition);
      });
      



      if(this.currentIndex){
          if( this.currentIndex != elIndex){
            event.srcElement.children[this.currentIndex].classList.remove("democlass");
             this.currentIndex = elIndex;
           }

      }

      this.currentIndex = elIndex;

      event.srcElement.children[elIndex].setAttribute("class", "democlass");

}
calcMenuHeight(){
     const menuH = document.getElementsByClassName('_container')[0].offsetHeight;
     const menu = document.getElementsByClassName('_options')[0].getElementsByTagName("ul");
     const menuCount = menu[0].children;

     this.listItemH = menuH / 3;
  console.log('listItemH',  this.listItemH )
}

  public ngOnInit() {
            this.calcMenuHeight();
		// console.log('yes', menuH, menuCount)
  }

}
