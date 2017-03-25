import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-single',
  templateUrl: './page-single.component.html',
  styleUrls: ['./page-single.component.css'],
  providers: [PageService]
})
export class PageSingleComponent implements OnInit {

  page: Page;

  constructor( private pageService: PageService, private route: ActivatedRoute ) { }

    


  getPost(slug){
  console.log('page slug is',slug);
    this.pageService
      .getPost('other-page')
      .subscribe(res => {
        this.page = res[0];
        //this.page = Object.keys(res)[0];
        
         console.log('posts inside', this.page, slug);
      });
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
       let pageSlug = params['pageSlug'];
       this.getPost(pageSlug)
    });

  }

}
