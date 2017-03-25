import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [MenuService]
})
export class MainMenuComponent implements OnInit {

  menus: Menu[];

  constructor( private menuService: MenuService, private router: Router ) { }

  getPosts(){

  this.menuService 
   	 .getPosts()
      .subscribe(res => {
        this.menus = res;
      });
  }

  ngOnInit() {
   	this.getPosts();
   
  }
  selectPage(pageSlug) {
    alert(pageSlug);
  	this.router.navigate([pageSlug]);
  }


}
