/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './app.component.css.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './page-nav/page-nav.component.ngfactory';
import * as import3 from '../../../src/app/page-nav/page-nav.component';
import * as import4 from '../../../src/app/services/wpApi.services';
import * as import5 from '@angular/router';
import * as import6 from './sidebar-nav/sidebar-nav.component.ngfactory';
import * as import7 from '../../../src/app/sidebar-nav/sidebar-nav.component';
import * as import8 from '../../../src/app/app.component';
import * as import9 from '../../../src/app/app.service';
const styles_AppComponent:any[] = [
  '\nbody{ background-color: #efefef; }\n.container{ }\n\n.navigation{ }\n.pageNav{\n  padding: 12px 0px;\n}\n.nav-page {\n  position: fixed;\n  width: 200px;\n  float: left\n}\n.sidebarWidget{\n  background-color: #fff;\n  padding: 8px 9px;\n  margin: 10px 0px;\n}\n.currentPgNav{}\n.currentPgNav ul {\n  list-style: none;\n  padding-left: 10px; margin: 0px;\n}\n\n.currentPgNav ul li{\n      line-height: 26px;\n}\n.sidebarCat{  }\n\n.menulabel{\n    font-weight: bold;\n    line-height: 27px;\n    font-size: 15px;\n    padding: 0px;\n    margin: 0px 0px 5px 0px;\n}\n\n.content{\n    float: left;\n    margin-left: 200px;\n    width: 75%;\n    padding: 16px 0px 0px 30px;\n}\n.content h1{ \n  font-weight: bold;\n  color: #2a2a2a; text-transform: uppercase;\n}\n.search-help{\n  width: 100%;\n  border-radius: 2%;\n  border: solid 1px;\n}\n.search-avatar{\n   width: 20%; display: inline-block;\n}\n.search-form{\n  width: 76%; display: inline-block; vertical-align: top;\n  margin-top: 20px;\n}\n.search-form input{\n  width: 100%; \n  line-height: 22px;\n}\n.menulist ul{padding: 0px;}\n.list-group-item{ border: 0px solid #ddd;}\n',
  import0.styles
]
;
export const RenderType_AppComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 2,
  styles: styles_AppComponent,
  data: {}
}
);
export function View_AppComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n\n\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),31,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),24,'div',[[
        'class',
        'col-lg-9'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),12,'div',[[
        'class',
        'nav-page'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n              '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[[
        8,
        'href',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[[
        'width',
        '100%'
      ]
      ],[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                  '])),
    (l()(),import1.ɵted((null as any),['\n              '])),
    (l()(),import1.ɵted((null as any),['\n              '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'pagenav',([] as any[]),(null as any),(null as any),(null as any),import2.View_pageNavComponent_0,import2.RenderType_pageNavComponent)),
    import1.ɵdid(57344,(null as any),0,import3.pageNavComponent,[
      import4.wpApiService,
      import5.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'content'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'main',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n          '])),
    (l()(),import1.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import5.RouterOutlet,[
      import5.RouterOutletMap,
      import1.ViewContainerRef,
      import1.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n '])),
    (l()(),import1.ɵted((null as any),['\n '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'navigation col-lg-3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'sidebar',([] as any[]),(null as any),(null as any),(null as any),import6.View_sidebarComponent_0,import6.RenderType_sidebarComponent)),
    import1.ɵdid(24576,(null as any),0,import7.sidebarComponent,[
      import4.wpApiService,
      import5.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n\n    \n\n  '])),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    ck(v,17,0);
  },(ck,v) => {
    var co:import8.AppComponent = v.component;
    const currVal_0:any = co.url;
    ck(v,10,0,currVal_0);
    const currVal_1:any = co.brandLogo;
    ck(v,12,0,currVal_1);
  });
}
function View_AppComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import1.ɵdid(57344,(null as any),0,import8.AppComponent,[import9.AppState],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AppComponentNgFactory:import1.ComponentFactory<import8.AppComponent> = import1.ɵccf('app',import8.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwL2FwcC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvY2hyaXN0YXJhc292cy9EZXNrdG9wL2dpdGh1Yi9Bbmd1bGFyLXRoZW1lL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMuQXBwQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9jaHJpc3RhcmFzb3ZzL0Rlc2t0b3AvZ2l0aHViL0FuZ3VsYXItdGhlbWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzLkFwcENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuPHN0eWxlPlxuYm9keXsgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjsgfVxuLmNvbnRhaW5lcnsgfVxuXG4ubmF2aWdhdGlvbnsgfVxuLnBhZ2VOYXZ7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xufVxuLm5hdi1wYWdlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0XG59XG4uc2lkZWJhcldpZGdldHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDlweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5jdXJyZW50UGdOYXZ7fVxuLmN1cnJlbnRQZ05hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgbWFyZ2luOiAwcHg7XG59XG5cbi5jdXJyZW50UGdOYXYgdWwgbGl7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5zaWRlYmFyQ2F0eyAgfVxuXG4ubWVudWxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG59XG5cbi5jb250ZW50e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDE2cHggMHB4IDBweCAzMHB4O1xufVxuLmNvbnRlbnQgaDF7IFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyYTJhMmE7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VhcmNoLWhlbHB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG59XG4uc2VhcmNoLWF2YXRhcntcbiAgIHdpZHRoOiAyMCU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZWFyY2gtZm9ybXtcbiAgd2lkdGg6IDc2JTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNlYXJjaC1mb3JtIGlucHV0e1xuICB3aWR0aDogMTAwJTsgXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1lbnVsaXN0IHVse3BhZGRpbmc6IDBweDt9XG4ubGlzdC1ncm91cC1pdGVteyBib3JkZXI6IDBweCBzb2xpZCAjZGRkO31cbjwvc3R5bGU+XG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuIDxkaXYgY2xhc3M9XCJjb2wtbGctOVwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXYtcGFnZVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwidXJsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJicmFuZExvZ29cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwYWdlbmF2PjwvcGFnZW5hdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiA8L2Rpdj5cbiA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiBjb2wtbGctM1wiPjxzaWRlYmFyPjwvc2lkZWJhcj48L2Rpdj5cbjwvZGl2PlxuXG4gICAgXG5cbiAgPCEtLVxuICAgIDxuYXY+XG4gICAgICA8YSBbcm91dGVyTGlua109XCIgWycuLyddIFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPSBcIntleGFjdDogdHJ1ZX1cIj5cbiAgICAgICAgSW5kZXhcbiAgICAgIDwvYT5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIiBbJy4vaG9tZSddIFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPSBcIntleGFjdDogdHJ1ZX1cIj5cbiAgICAgICAgSG9tZVxuICAgICAgPC9hPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiIFsnLi9kZXRhaWwnXSBcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT0gXCJ7ZXhhY3Q6IHRydWV9XCI+XG4gICAgICAgIERldGFpbFxuICAgICAgPC9hPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiIFsnLi9iYXJyZWwnXSBcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT0gXCJ7ZXhhY3Q6IHRydWV9XCI+XG4gICAgICAgIEJhcnJlbFxuICAgICAgPC9hPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiIFsnLi9hYm91dCddIFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPSBcIntleGFjdDogdHJ1ZX1cIj5cbiAgICAgICAgQWJvdXRcbiAgICAgIDwvYT5cbiAgICA8L25hdj5cblxuICAgIDxtYWluPlxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvbWFpbj5cblxuICAgIDxwcmUgY2xhc3M9XCJhcHAtc3RhdGVcIj50aGlzLmFwcFN0YXRlLnN0YXRlID0ge3sgYXBwU3RhdGUuc3RhdGUgfCBqc29uIH19PC9wcmU+XG5cblxuICAgIC0tPlxuICAiLCI8YXBwPjwvYXBwPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQWtFUTtNQUdSO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUI7TUFDdEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtNQUNuQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNCO0lBQ1o7SUFBSztNQUNEO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnQjtNQUNkO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9DO0lBQ2xDO0lBQ0Y7SUFDTjtnQkFBQTs7O0lBQUE7S0FBQTtJQUFtQjtJQUN2QjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUI7SUFDakI7SUFBTTtJQUNKO2dCQUFBOzs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUErQjtJQUMxQjtJQUNMO0lBQ0g7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlDO2dCQUFBOzs7SUFBQTtLQUFBO0lBQXlCO0lBQ3JEO0lBbUNDOzs7SUE1Q087OztJQUpPO0lBQUgsVUFBRyxTQUFIO0lBQ087SUFBTCxVQUFLLFNBQUw7Ozs7O0lDMUVwQjtnQkFBQTs7O0lBQUE7OzsifQ==
