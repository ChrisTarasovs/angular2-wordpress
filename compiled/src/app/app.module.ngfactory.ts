/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/forms';
import * as import6 from '@angular/http';
import * as import7 from '../../../src/app/app.service';
import * as import8 from '../../../src/app/app.resolver';
import * as import9 from '../../../src/app/services/wpApi.services';
import * as import10 from './home/home.component.ngfactory';
import * as import11 from './about/about.component.ngfactory';
import * as import12 from './content/content.component.ngfactory';
import * as import13 from './app.component.ngfactory';
import * as import14 from '../../../src/app/home/home.component';
import * as import15 from '../../../src/app/about/about.component';
import * as import16 from '../../../src/app/content/content.component';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _NgProbeToken_2:any[];
  _ɵg_3:import3.ɵg;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import4.BrowserModule;
  _ɵba_10:import5.ɵba;
  _FormsModule_11:import5.FormsModule;
  _HttpModule_12:import6.HttpModule;
  _JsonpModule_13:import6.JsonpModule;
  _ɵa_14:any;
  _UrlSerializer_15:import3.DefaultUrlSerializer;
  _RouterOutletMap_16:import3.RouterOutletMap;
  _ROUTER_CONFIGURATION_17:any;
  _LocationStrategy_18:any;
  _Location_19:import2.Location;
  _Compiler_20:import0.Compiler;
  _NgModuleFactoryLoader_21:import0.SystemJsNgModuleLoader;
  _ROUTES_22:any[];
  _Router_23:any;
  _RouterModule_24:import3.RouterModule;
  _AppState_25:import7.AppState;
  _AppModule_26:import1.AppModule;
  __LOCALE_ID_27:any;
  __NgLocalization_28:import2.NgLocaleLocalization;
  __APP_ID_29:any;
  __IterableDiffers_30:any;
  __KeyValueDiffers_31:any;
  __DomSanitizer_32:import4.ɵe;
  __Sanitizer_33:any;
  __HAMMER_GESTURE_CONFIG_34:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_35:any[];
  __EventManager_36:import4.EventManager;
  __ɵDomSharedStylesHost_37:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_38:import4.ɵDomRendererFactory2;
  __RendererFactory2_39:any;
  __ɵSharedStylesHost_40:any;
  __Testability_41:import0.Testability;
  __Meta_42:import4.Meta;
  __Title_43:import4.Title;
  __ɵi_44:import5.ɵi;
  __BrowserXhr_45:import6.BrowserXhr;
  __ResponseOptions_46:import6.BaseResponseOptions;
  __XSRFStrategy_47:any;
  __XHRBackend_48:import6.XHRBackend;
  __RequestOptions_49:import6.BaseRequestOptions;
  __Http_50:any;
  __ɵg_51:import6.ɵg;
  __JSONPBackend_52:import6.ɵa;
  __Jsonp_53:any;
  __ActivatedRoute_54:any;
  __PreloadAllModules_55:import3.PreloadAllModules;
  __PreloadingStrategy_56:any;
  __RouterPreloader_57:import3.RouterPreloader;
  __NoPreloading_58:import3.NoPreloading;
  __ROUTER_INITIALIZER_59:any;
  __APP_BOOTSTRAP_LISTENER_60:any[];
  __DataResolver_61:import8.DataResolver;
  __wpApiService_62:import9.wpApiService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import10.HomeComponentNgFactory,
      import11.AboutComponentNgFactory,
      import12.contentComponentNgFactory,
      import13.AppComponentNgFactory
    ]
    ,[import13.AppComponentNgFactory]);
  }
  get _LOCALE_ID_27():any {
    if ((this.__LOCALE_ID_27 == null)) { (this.__LOCALE_ID_27 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_27;
  }
  get _NgLocalization_28():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_28 == null)) { (this.__NgLocalization_28 = new import2.NgLocaleLocalization(this._LOCALE_ID_27)); }
    return this.__NgLocalization_28;
  }
  get _APP_ID_29():any {
    if ((this.__APP_ID_29 == null)) { (this.__APP_ID_29 = import0.ɵg()); }
    return this.__APP_ID_29;
  }
  get _IterableDiffers_30():any {
    if ((this.__IterableDiffers_30 == null)) { (this.__IterableDiffers_30 = import0.ɵl()); }
    return this.__IterableDiffers_30;
  }
  get _KeyValueDiffers_31():any {
    if ((this.__KeyValueDiffers_31 == null)) { (this.__KeyValueDiffers_31 = import0.ɵm()); }
    return this.__KeyValueDiffers_31;
  }
  get _DomSanitizer_32():import4.ɵe {
    if ((this.__DomSanitizer_32 == null)) { (this.__DomSanitizer_32 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_32;
  }
  get _Sanitizer_33():any {
    if ((this.__Sanitizer_33 == null)) { (this.__Sanitizer_33 = this._DomSanitizer_32); }
    return this.__Sanitizer_33;
  }
  get _HAMMER_GESTURE_CONFIG_34():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_34 == null)) { (this.__HAMMER_GESTURE_CONFIG_34 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_34;
  }
  get _EVENT_MANAGER_PLUGINS_35():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_35 == null)) { (this.__EVENT_MANAGER_PLUGINS_35 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_34)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_35;
  }
  get _EventManager_36():import4.EventManager {
    if ((this.__EventManager_36 == null)) { (this.__EventManager_36 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_35,this.parent.get(import0.NgZone))); }
    return this.__EventManager_36;
  }
  get _ɵDomSharedStylesHost_37():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_37 == null)) { (this.__ɵDomSharedStylesHost_37 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_37;
  }
  get _ɵDomRendererFactory2_38():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_38 == null)) { (this.__ɵDomRendererFactory2_38 = new import4.ɵDomRendererFactory2(this._EventManager_36,this._ɵDomSharedStylesHost_37)); }
    return this.__ɵDomRendererFactory2_38;
  }
  get _RendererFactory2_39():any {
    if ((this.__RendererFactory2_39 == null)) { (this.__RendererFactory2_39 = this._ɵDomRendererFactory2_38); }
    return this.__RendererFactory2_39;
  }
  get _ɵSharedStylesHost_40():any {
    if ((this.__ɵSharedStylesHost_40 == null)) { (this.__ɵSharedStylesHost_40 = this._ɵDomSharedStylesHost_37); }
    return this.__ɵSharedStylesHost_40;
  }
  get _Testability_41():import0.Testability {
    if ((this.__Testability_41 == null)) { (this.__Testability_41 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_41;
  }
  get _Meta_42():import4.Meta {
    if ((this.__Meta_42 == null)) { (this.__Meta_42 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_42;
  }
  get _Title_43():import4.Title {
    if ((this.__Title_43 == null)) { (this.__Title_43 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_43;
  }
  get _ɵi_44():import5.ɵi {
    if ((this.__ɵi_44 == null)) { (this.__ɵi_44 = new import5.ɵi()); }
    return this.__ɵi_44;
  }
  get _BrowserXhr_45():import6.BrowserXhr {
    if ((this.__BrowserXhr_45 == null)) { (this.__BrowserXhr_45 = new import6.BrowserXhr()); }
    return this.__BrowserXhr_45;
  }
  get _ResponseOptions_46():import6.BaseResponseOptions {
    if ((this.__ResponseOptions_46 == null)) { (this.__ResponseOptions_46 = new import6.BaseResponseOptions()); }
    return this.__ResponseOptions_46;
  }
  get _XSRFStrategy_47():any {
    if ((this.__XSRFStrategy_47 == null)) { (this.__XSRFStrategy_47 = import6.ɵb()); }
    return this.__XSRFStrategy_47;
  }
  get _XHRBackend_48():import6.XHRBackend {
    if ((this.__XHRBackend_48 == null)) { (this.__XHRBackend_48 = new import6.XHRBackend(this._BrowserXhr_45,this._ResponseOptions_46,this._XSRFStrategy_47)); }
    return this.__XHRBackend_48;
  }
  get _RequestOptions_49():import6.BaseRequestOptions {
    if ((this.__RequestOptions_49 == null)) { (this.__RequestOptions_49 = new import6.BaseRequestOptions()); }
    return this.__RequestOptions_49;
  }
  get _Http_50():any {
    if ((this.__Http_50 == null)) { (this.__Http_50 = import6.ɵc(this._XHRBackend_48,this._RequestOptions_49)); }
    return this.__Http_50;
  }
  get _ɵg_51():import6.ɵg {
    if ((this.__ɵg_51 == null)) { (this.__ɵg_51 = new import6.ɵg()); }
    return this.__ɵg_51;
  }
  get _JSONPBackend_52():import6.ɵa {
    if ((this.__JSONPBackend_52 == null)) { (this.__JSONPBackend_52 = new import6.ɵa(this._ɵg_51,this._ResponseOptions_46)); }
    return this.__JSONPBackend_52;
  }
  get _Jsonp_53():any {
    if ((this.__Jsonp_53 == null)) { (this.__Jsonp_53 = import6.ɵd(this._JSONPBackend_52,this._RequestOptions_49)); }
    return this.__Jsonp_53;
  }
  get _ActivatedRoute_54():any {
    if ((this.__ActivatedRoute_54 == null)) { (this.__ActivatedRoute_54 = import3.ɵf(this._Router_23)); }
    return this.__ActivatedRoute_54;
  }
  get _PreloadAllModules_55():import3.PreloadAllModules {
    if ((this.__PreloadAllModules_55 == null)) { (this.__PreloadAllModules_55 = new import3.PreloadAllModules()); }
    return this.__PreloadAllModules_55;
  }
  get _PreloadingStrategy_56():any {
    if ((this.__PreloadingStrategy_56 == null)) { (this.__PreloadingStrategy_56 = this._PreloadAllModules_55); }
    return this.__PreloadingStrategy_56;
  }
  get _RouterPreloader_57():import3.RouterPreloader {
    if ((this.__RouterPreloader_57 == null)) { (this.__RouterPreloader_57 = new import3.RouterPreloader(this._Router_23,this._NgModuleFactoryLoader_21,this._Compiler_20,this,this._PreloadingStrategy_56)); }
    return this.__RouterPreloader_57;
  }
  get _NoPreloading_58():import3.NoPreloading {
    if ((this.__NoPreloading_58 == null)) { (this.__NoPreloading_58 = new import3.NoPreloading()); }
    return this.__NoPreloading_58;
  }
  get _ROUTER_INITIALIZER_59():any {
    if ((this.__ROUTER_INITIALIZER_59 == null)) { (this.__ROUTER_INITIALIZER_59 = import3.ɵi(this._ɵg_3)); }
    return this.__ROUTER_INITIALIZER_59;
  }
  get _APP_BOOTSTRAP_LISTENER_60():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_60 == null)) { (this.__APP_BOOTSTRAP_LISTENER_60 = [this._ROUTER_INITIALIZER_59]); }
    return this.__APP_BOOTSTRAP_LISTENER_60;
  }
  get _DataResolver_61():import8.DataResolver {
    if ((this.__DataResolver_61 == null)) { (this.__DataResolver_61 = new import8.DataResolver()); }
    return this.__DataResolver_61;
  }
  get _wpApiService_62():import9.wpApiService {
    if ((this.__wpApiService_62 == null)) { (this.__wpApiService_62 = new import9.wpApiService(this._Jsonp_53,this._Http_50)); }
    return this.__wpApiService_62;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import4.ɵa();
    this._NgProbeToken_2 = [import3.ɵb()];
    this._ɵg_3 = new import3.ɵg(this);
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this._NgProbeToken_2),
      import3.ɵh(this._ɵg_3)
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ɵba_10 = new import5.ɵba();
    this._FormsModule_11 = new import5.FormsModule();
    this._HttpModule_12 = new import6.HttpModule();
    this._JsonpModule_13 = new import6.JsonpModule();
    this._ɵa_14 = import3.ɵd(this.parent.get(import3.Router,(null as any)));
    this._UrlSerializer_15 = new import3.DefaultUrlSerializer();
    this._RouterOutletMap_16 = new import3.RouterOutletMap();
    this._ROUTER_CONFIGURATION_17 = {
      useHash: false,
      preloadingStrategy: import3.PreloadAllModules
    }
    ;
    this._LocationStrategy_18 = import3.ɵc(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_17);
    this._Location_19 = new import2.Location(this._LocationStrategy_18);
    this._Compiler_20 = new import0.Compiler();
    this._NgModuleFactoryLoader_21 = new import0.SystemJsNgModuleLoader(this._Compiler_20,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_22 = [[
        {
          path: 'home',
          component: import14.HomeComponent
        }
        ,
        {
          path: 'about',
          component: import15.AboutComponent
        }
        ,
        {
          path: 'detail',
          loadChildren: './+detail#DetailModule'
        }
        ,
        {
          path: 'barrel',
          loadChildren: './+barrel#BarrelModule'
        }
        ,
        {
          path: ':pageslug',
          component: import16.contentComponent
        }

      ]
    ];
    this._Router_23 = import3.ɵe(this._ApplicationRef_7,this._UrlSerializer_15,this._RouterOutletMap_16,this._Location_19,this,this._NgModuleFactoryLoader_21,this._Compiler_20,this._ROUTES_22,this._ROUTER_CONFIGURATION_17,this.parent.get(import3.UrlHandlingStrategy,(null as any)),this.parent.get(import3.RouteReuseStrategy,(null as any)));
    this._RouterModule_24 = new import3.RouterModule(this._ɵa_14,this._Router_23);
    this._AppState_25 = new import7.AppState();
    this._AppModule_26 = new import1.AppModule(this._ApplicationRef_7,this._AppState_25);
    return this._AppModule_26;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_2; }
    if ((token === import3.ɵg)) { return this._ɵg_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import5.ɵba)) { return this._ɵba_10; }
    if ((token === import5.FormsModule)) { return this._FormsModule_11; }
    if ((token === import6.HttpModule)) { return this._HttpModule_12; }
    if ((token === import6.JsonpModule)) { return this._JsonpModule_13; }
    if ((token === import3.ɵa)) { return this._ɵa_14; }
    if ((token === import3.UrlSerializer)) { return this._UrlSerializer_15; }
    if ((token === import3.RouterOutletMap)) { return this._RouterOutletMap_16; }
    if ((token === import3.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_17; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_18; }
    if ((token === import2.Location)) { return this._Location_19; }
    if ((token === import0.Compiler)) { return this._Compiler_20; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_21; }
    if ((token === import3.ROUTES)) { return this._ROUTES_22; }
    if ((token === import3.Router)) { return this._Router_23; }
    if ((token === import3.RouterModule)) { return this._RouterModule_24; }
    if ((token === import7.AppState)) { return this._AppState_25; }
    if ((token === import1.AppModule)) { return this._AppModule_26; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_27; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_28; }
    if ((token === import0.APP_ID)) { return this._APP_ID_29; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_30; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_31; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_32; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_33; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_34; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_35; }
    if ((token === import4.EventManager)) { return this._EventManager_36; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_37; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_38; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_39; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_40; }
    if ((token === import0.Testability)) { return this._Testability_41; }
    if ((token === import4.Meta)) { return this._Meta_42; }
    if ((token === import4.Title)) { return this._Title_43; }
    if ((token === import5.ɵi)) { return this._ɵi_44; }
    if ((token === import6.BrowserXhr)) { return this._BrowserXhr_45; }
    if ((token === import6.ResponseOptions)) { return this._ResponseOptions_46; }
    if ((token === import6.XSRFStrategy)) { return this._XSRFStrategy_47; }
    if ((token === import6.XHRBackend)) { return this._XHRBackend_48; }
    if ((token === import6.RequestOptions)) { return this._RequestOptions_49; }
    if ((token === import6.Http)) { return this._Http_50; }
    if ((token === import6.ɵg)) { return this._ɵg_51; }
    if ((token === import6.JSONPBackend)) { return this._JSONPBackend_52; }
    if ((token === import6.Jsonp)) { return this._Jsonp_53; }
    if ((token === import3.ActivatedRoute)) { return this._ActivatedRoute_54; }
    if ((token === import3.PreloadAllModules)) { return this._PreloadAllModules_55; }
    if ((token === import3.PreloadingStrategy)) { return this._PreloadingStrategy_56; }
    if ((token === import3.RouterPreloader)) { return this._RouterPreloader_57; }
    if ((token === import3.NoPreloading)) { return this._NoPreloading_58; }
    if ((token === import3.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_59; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_60; }
    if ((token === import8.DataResolver)) { return this._DataResolver_61; }
    if ((token === import9.wpApiService)) { return this._wpApiService_62; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_37 && this._ɵDomSharedStylesHost_37.ngOnDestroy());
    (this.__RouterPreloader_57 && this._RouterPreloader_57.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NocmlzdGFyYXNvdnMvRGVza3RvcC9naXRodWIvQW5ndWxhci10aGVtZS9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvY2hyaXN0YXJhc292cy9EZXNrdG9wL2dpdGh1Yi9Bbmd1bGFyLXRoZW1lL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
