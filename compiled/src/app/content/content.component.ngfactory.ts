/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../src/app/content/content.component';
import * as import3 from '../../../../src/app/services/wpApi.services';
import * as import4 from '@angular/router';
const styles_contentComponent:any[] = ([] as any[]);
export const RenderType_contentComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_contentComponent,
  data: {}
}
);
function View_contentComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'section-image'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                       '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                 ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.section_image.sizes.large,' ');
    ck(v,2,0,currVal_0);
  });
}
function View_contentComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),12,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'div',([] as any[]),[[
        8,
        'id',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_contentComponent_4)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                  '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'div',([] as any[]),[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n             '])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    const currVal_1:any = v.context.$implicit.section_image;
    ck(v,5,0,currVal_1);
  },(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit.anchor_link,' ');
    ck(v,2,0,currVal_0);
    const currVal_2:any = v.context.$implicit.section_title;
    ck(v,8,0,currVal_2);
    const currVal_3:any = v.context.$implicit.section_content;
    ck(v,10,0,currVal_3);
  });
}
function View_contentComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_contentComponent_3)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n     ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.pageSections;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_contentComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),35,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n   '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ' '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'div',([] as any[]),[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n     '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_contentComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵpid(0,import1.JsonPipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n     '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),23,'div',[[
        'class',
        'search-help'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n       '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'search-avatar'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',[[
        'width',
        '100%'
      ]
      ],[[
        8,
        'src',
        4
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n       '])),
    (l()(),import0.ɵted((null as any),['\n       '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),15,'div',[[
        'class',
        'search-form'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n             '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['You are welcome to use the search to find more interesting UX '])),
    (l()(),import0.ɵted((null as any),['\n             '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'input-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'placeholder',
        'Search for...'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'span',[[
        'class',
        'input-group-btn'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Go!'])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵted((null as any),['\n       '])),
    (l()(),import0.ɵted((null as any),['\n     '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_2:any = (import0.ɵunv(v,8,0,import0.ɵnov(v,9).transform(co.pageSections)) != '{}');
    ck(v,8,0,currVal_2);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.pageTitle;
    ck(v,3,0,currVal_0);
    const currVal_1:any = co.pageContent;
    ck(v,5,0,currVal_1);
    const currVal_3:any = co.brandLogo;
    ck(v,15,0,currVal_3);
  });
}
export function View_contentComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n\n\n '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_contentComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵpid(0,import1.JsonPipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n\n\n  ']))
  ]
  ,(ck,v) => {
    var co:import2.contentComponent = v.component;
    const currVal_0:any = (import0.ɵunv(v,2,0,import0.ɵnov(v,3).transform(co.newContent)) != '{}');
    ck(v,2,0,currVal_0);
  },(null as any));
}
function View_contentComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-page-single',([] as any[]),(null as any),(null as any),(null as any),View_contentComponent_0,RenderType_contentComponent)),
    import0.ɵdid(57344,(null as any),0,import2.contentComponent,[
      import3.wpApiService,
      import4.ActivatedRoute
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const contentComponentNgFactory:import0.ComponentFactory<import2.contentComponent> = import0.ɵccf('app-page-single',import2.contentComponent,View_contentComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvY2hyaXN0YXJhc292cy9EZXNrdG9wL2dpdGh1Yi9Bbmd1bGFyLXRoZW1lL3NyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMuY29udGVudENvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvY2hyaXN0YXJhc292cy9EZXNrdG9wL2dpdGh1Yi9Bbmd1bGFyLXRoZW1lL3NyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC50cy5jb250ZW50Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG5cblxuIDxkaXYgKm5nSWY9XCIobmV3Q29udGVudCB8IGpzb24pICE9ICd7fSdcIiA+XG4gICA8aDE+e3twYWdlVGl0bGV9fSA8L2gxPlxuICAgIDxkaXYgW2lubmVySFRNTF09XCJwYWdlQ29udGVudFwiPjwvZGl2PlxuXG4gICAgIDxkaXYgKm5nSWY9XCIocGFnZVNlY3Rpb25zIHwganNvbikgIT0gJ3t9J1wiID5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBwYWdlU2VjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ7e3NlY3Rpb24uYW5jaG9yX2xpbmt9fSBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1pbWFnZVwiICpuZ0lmPVwic2VjdGlvbi5zZWN0aW9uX2ltYWdlXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3NlY3Rpb24uc2VjdGlvbl9pbWFnZS5zaXplcy5sYXJnZX19IFwiICAvPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMj57e3NlY3Rpb24uc2VjdGlvbl90aXRsZX19PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJzZWN0aW9uLnNlY3Rpb25fY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaGVscFwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiYnJhbmRMb2dvXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgICAgICAgPGxhYmVsPllvdSBhcmUgd2VsY29tZSB0byB1c2UgdGhlIHNlYXJjaCB0byBmaW5kIG1vcmUgaW50ZXJlc3RpbmcgVVggPC9sYWJlbD5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IuLi5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkdvITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbjwvZGl2PlxuXG5cbiAgIiwiPGFwcC1wYWdlLXNpbmdsZT48L2FwcC1wYWdlLXNpbmdsZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DVWdCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkQ7TUFDcEQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFEOzs7SUFBaEQ7SUFBTCxTQUFLLFNBQUw7Ozs7O0lBSGY7SUFBMEM7TUFDdEM7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1DO0lBQy9CO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFTztJQUNMO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUE4QjtNQUNsQztRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUQ7SUFDaEQ7OztJQUx3QjtJQUEzQixTQUEyQixTQUEzQjs7SUFEQztJQUFMLFNBQUssU0FBTDtJQUlVO0lBQUE7SUFDQztJQUFMLFVBQUssU0FBTDs7Ozs7SUFQYjtJQUE0QztJQUN6QztnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQVFNOzs7O0lBUkQ7SUFBTCxTQUFLLFNBQUw7Ozs7O0lBTFA7SUFBMEM7SUFDeEM7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQW1CO01BQ3RCO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxQztJQUVwQztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFLO0lBVUM7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO01BQ3ZCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7TUFDdEI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBb0M7SUFDbkM7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO0lBQ25CO0lBQU87SUFBc0U7TUFDN0U7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtJQUNsQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBb0U7TUFDcEU7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtJQUM1QjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBOEM7SUFBWTtJQUNyRDtJQUNQO0lBQ1A7SUFDRjs7OztJQXhCRDtJQUFMLFNBQUssU0FBTDs7O0lBSEU7SUFBQTtJQUNFO0lBQUwsU0FBSyxTQUFMO0lBZWE7SUFBTCxVQUFLLFNBQUw7Ozs7O0lBcEJaO0lBR0M7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBSztJQTZCQTs7OztJQTdCQTtJQUFMLFNBQUssU0FBTDs7Ozs7SUNIRDtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
