/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { headerNavComponent } from './header/header-nav.component';
import { headerTitleComponent } from './header/header-title.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `


 <div id="wrapper">
        <sidebarNav></sidebarNav>
        <div id="page-wrapper" class="gray-bg">
                <header-nav></header-nav>
                <header-title></header-title>
                <div class="wrapper wrapper-content">
                    <main>
                      <router-outlet></router-outlet>
                    </main>
                </div>
        </div>
        </div>

<!--

<div class="container">
 <div class="col-lg-9">
    <div class="nav-page">
              <div>
                  <a [href]="url">
                    <img [src]="brandLogo" width="100%">
                  </a>
              </div>
              <pagenav></pagenav>
    </div>
    <div class="content">
      
    </div>
 </div>
 <div class="navigation col-lg-3"><sidebar></sidebar></div>
</div>
-->
    

  <!--
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Barrel
      </a>
      <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
    </nav>


    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>


    -->
  `
})
export class AppComponent implements OnInit {
  public brandLogo = 'assets/img/ecommerce-ux-logo.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
