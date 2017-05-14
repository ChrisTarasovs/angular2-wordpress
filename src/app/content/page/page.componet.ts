import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../../content.module';
//import { PageService } from '../page.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { wpApiService } from '../../services/wpApi.services';

import * as _ from "lodash";

@Component({
  selector: 'page',
  //templateUrl: './page-single.component.html',
  //styleUrls: ['./page-single.component.css'],
  //providers: [PageService]
  template: `
  New data
  <pre>
{{postdata | json}}
</pre>

<!--
<pre>
{{postdata | json}}
</pre>
{{postdata.content.rendered}}

<div [innerHTML]="postdata.content.rendered"></div>
   <div *ngIf="(pageSections | json) != '{}'" >
      <div *ngFor="let section of pageSections">
          <div id="{{section.anchor_link}} ">
                <div class="section-image" *ngIf="section.section_image"  >
                   <img src="{{section.section_image.sizes.large}} "  />
                   {{section.section_image | json}}
                  </div>
                <div [innerHTML]="section.section_content"></div>
           </div>
      </div>
   </div>
-->



  `
})
export class contentPageComponent implements OnInit {
  @Input() postdata: any;


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
  constructor( private route: ActivatedRoute ) { }



  ngOnInit() {



    }
 }