


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