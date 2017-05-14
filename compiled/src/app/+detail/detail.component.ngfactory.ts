/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/+detail/detail.component';
const styles_DetailComponent:any[] = ([] as any[]);
export const RenderType_DetailComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DetailComponent,
  data: {}
}
);
export function View_DetailComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Hello from Detail'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,7).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['\n        Child Detail\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,8,0,'./child-detail');
    ck(v,7,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,7).target;
    const currVal_1:any = import0.ɵnov(v,7).href;
    ck(v,6,0,currVal_0,currVal_1);
  });
}
function View_DetailComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'detail',([] as any[]),(null as any),(null as any),(null as any),View_DetailComponent_0,RenderType_DetailComponent)),
    import0.ɵdid(57344,(null as any),0,import3.DetailComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const DetailComponentNgFactory:import0.ComponentFactory<import3.DetailComponent> = import0.ɵccf('detail',import3.DetailComponent,View_DetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwLytkZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9jaHJpc3RhcmFzb3ZzL0Rlc2t0b3AvZ2l0aHViL0FuZ3VsYXItdGhlbWUvc3JjL2FwcC8rZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9jaHJpc3RhcmFzb3ZzL0Rlc2t0b3AvZ2l0aHViL0FuZ3VsYXItdGhlbWUvc3JjL2FwcC8rZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMuRGV0YWlsQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9jaHJpc3RhcmFzb3ZzL0Rlc2t0b3AvZ2l0aHViL0FuZ3VsYXItdGhlbWUvc3JjL2FwcC8rZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMuRGV0YWlsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGgxPkhlbGxvIGZyb20gRGV0YWlsPC9oMT5cbiAgICA8c3Bhbj5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIiBbJy4vY2hpbGQtZGV0YWlsJ10gXCI+XG4gICAgICAgIENoaWxkIERldGFpbFxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICIsIjxkZXRhaWw+PC9kZXRhaWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDSTtJQUFJO0lBQXNCO0lBQzFCO0lBQU07SUFDSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUFvQztJQUVuQztJQUNDO0lBQ1A7Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCOzs7SUFKMUI7SUFBSCxTQUFHLFNBQUg7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7Ozs7O0lDSE47Z0JBQUE7OztJQUFBOzs7In0=
