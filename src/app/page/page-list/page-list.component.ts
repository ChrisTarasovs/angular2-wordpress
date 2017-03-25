import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
  providers: [PageService]
})
export class PageListComponent implements OnInit {

  pages: Page[];

  constructor( private pageService: PageService, private router: Router ) { }

  getPages(){
    this.pageService
      .getPages()
      .subscribe(res => {
        this.pages = res;
      });
  }

  ngOnInit() {
    this.getPages();
  }
 
  selectPage(pageSlug) {
  	this.router.navigate([pageSlug]);
  }

}
