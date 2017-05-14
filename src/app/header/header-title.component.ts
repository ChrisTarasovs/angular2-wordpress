import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'header-title',
  //templateUrl: './post-list.component.html',
template: `
             <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-sm-4">
                    <h2>This is main title</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html">This is</a>
                        </li>
                        <li class="active">
                            <strong>Breadcrumb</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-sm-8">
                    <div class="title-action">
                        <a href="" class="btn btn-primary">This is action area</a>
                    </div>
                </div>
            </div>
`
})
export class headerTitleComponent  implements OnInit{

  
  constructor(  private _router: Router  ) {  }




  ngOnInit() {}


}
