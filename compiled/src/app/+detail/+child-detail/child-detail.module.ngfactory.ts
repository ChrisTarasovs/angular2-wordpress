/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../src/app/+detail/+child-detail/child-detail.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/router';
import * as import5 from './child-detail.component.ngfactory';
import * as import6 from '../../../../../src/app/+detail/+child-detail/child-detail.component';
class ChildDetailModuleInjector extends import0.ɵNgModuleInjector<import1.ChildDetailModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _RouterModule_3:import4.RouterModule;
  _ChildDetailModule_4:import1.ChildDetailModule;
  __NgLocalization_5:import2.NgLocaleLocalization;
  __ɵi_6:import3.ɵi;
  _ROUTES_7:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import5.ChildDetailComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_5():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == null)) { (this.__NgLocalization_5 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _ɵi_6():import3.ɵi {
    if ((this.__ɵi_6 == null)) { (this.__ɵi_6 = new import3.ɵi()); }
    return this.__ɵi_6;
  }
  createInternal():import1.ChildDetailModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ɵa,(null as any)),this.parent.get(import4.Router,(null as any)));
    this._ChildDetailModule_4 = new import1.ChildDetailModule();
        this._ROUTES_7 = [[{
          path: '',
          component: import6.ChildDetailComponent,
          pathMatch: 'full'
        }
    ]];
    return this._ChildDetailModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import4.RouterModule)) { return this._RouterModule_3; }
    if ((token === import1.ChildDetailModule)) { return this._ChildDetailModule_4; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import3.ɵi)) { return this._ɵi_6; }
    if ((token === import4.ROUTES)) { return this._ROUTES_7; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ChildDetailModuleNgFactory:import0.NgModuleFactory<import1.ChildDetailModule> = new import0.NgModuleFactory<any>(ChildDetailModuleInjector,import1.ChildDetailModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwLytkZXRhaWwvK2NoaWxkLWRldGFpbC9jaGlsZC1kZXRhaWwubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwLytkZXRhaWwvK2NoaWxkLWRldGFpbC9jaGlsZC1kZXRhaWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
