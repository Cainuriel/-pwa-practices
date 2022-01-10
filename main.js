(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 1572)).then(m => m.HomePageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_welcome_welcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.module */ 1210)).then(m => m.WelcomePageModule)
    },
    {
        path: 'log-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_log-in_log-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/log-in/log-in.module */ 4051)).then(m => m.LogInPageModule)
    },
    {
        path: 'select',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_select_select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/select/select.module */ 8167)).then(m => m.SelectPageModule)
    },
    {
        path: 'restaurant-menu/:type',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_restaurant-menu_restaurant-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/restaurant-menu/restaurant-menu.module */ 4336)).then(m => m.RestaurantMenuPageModule)
    },
    {
        path: 'restaurant-menu-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_restaurant-menu-modal_restaurant-menu-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/restaurant-menu-modal/restaurant-menu-modal.module */ 4427)).then(m => m.RestaurantMenuModalPageModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map/map.module */ 722)).then(m => m.MapPageModule)
    },
    {
        path: 'qr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_qr_qr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/qr/qr.module */ 1586)).then(m => m.QrPageModule)
    },
    {
        path: 'pago',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pago_pago_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pago/pago.module */ 6746)).then(m => m.PagoPageModule)
    },
    {
        path: 'pedido',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pedido_pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedido/pedido.module */ 5488)).then(m => m.PedidoPageModule)
    },
    {
        path: 'personal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_personal_personal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/personal/personal.module */ 3385)).then(m => m.PersonalPageModule)
    },
    {
        path: 'favoritos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_favoritos_favoritos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favoritos/favoritos.module */ 7840)).then(m => m.FavoritosPageModule)
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/orders/orders.module */ 8879)).then(m => m.OrdersPageModule)
    },
    {
        path: 'comentarios',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comentarios_comentarios_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/comentarios/comentarios.module */ 9840)).then(m => m.ComentariosPageModule)
    },
    {
        path: 'share',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_share_share_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/share/share.module */ 9065)).then(m => m.SharePageModule)
    },
    {
        path: 'earn',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_earn_earn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/earn/earn.module */ 7241)).then(m => m.EarnPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 116)).then(m => m.SettingsPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 9961)).then(m => m.RegisterPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let AppComponent = class AppComponent {
    constructor() {
        this.dataUser = {
            name: `Sign in`,
            secondName: ``,
            email: `Need an Account?`,
            img: '../../../assets/img/userDefault.png',
            password: ``,
            phone: ``,
            birth: ``,
        };
    }
    ngOnInit() {
        // console.log('Data user: ', this.dataUser);
    }
};
AppComponent.ctorParameters = () => [];
AppComponent.propDecorators = {
    dataUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 2966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 5103);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 7699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 4766);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 2404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3524,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7021,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		8274,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		3221,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		3489,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		3705,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4223,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".center-element {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.alinear {\n  text-align: center;\n}\n\n.avatar {\n  width: 72%;\n  height: 72%;\n  margin-top: 10px;\n}\n\n.avatar-container {\n  z-index: 100;\n  margin-left: 124px !important;\n  margin-top: 50px !important;\n}\n\na {\n  text-decoration: none;\n}\n\n.img-otium {\n  height: 50px;\n  margin: 1rem auto;\n}\n\n.flex-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nion-list,\nion-menu-toggle {\n  height: 100%;\n}\n\n.custom-shape-divider-top-1640088494 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n.custom-shape-divider-top-1640088494 svg {\n  z-index: -100;\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 180px;\n}\n\n.custom-shape-divider-top-1640088494 .shape-fill {\n  fill: #9013fe;\n}\n\n/** For mobile devices **/\n\n@media (max-width: 767px) {\n  .custom-shape-divider-top-1640088494 svg {\n    width: calc(221% + 1.3px);\n    height: 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQSx5QkFBQTs7QUFDQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxhQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWVsZW1lbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFsaW5lYXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDcyJTtcclxuICBoZWlnaHQ6IDcyJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjRweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaW1nLW90aXVtIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmlvbi1saXN0LFxyXG5pb24tbWVudS10b2dnbGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLy8gV2F2ZXMgY3NzIGJ5IGh0dHBzOi8vd3d3LnNoYXBlZGl2aWRlci5hcHAvXHJcbi5jdXN0b20tc2hhcGUtZGl2aWRlci10b3AtMTY0MDA4ODQ5NCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jdXN0b20tc2hhcGUtZGl2aWRlci10b3AtMTY0MDA4ODQ5NCBzdmcge1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxLjNweCk7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmN1c3RvbS1zaGFwZS1kaXZpZGVyLXRvcC0xNjQwMDg4NDk0IC5zaGFwZS1maWxsIHtcclxuICBmaWxsOiAjOTAxM2ZlO1xyXG59XHJcblxyXG4vKiogRm9yIG1vYmlsZSBkZXZpY2VzICoqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY3VzdG9tLXNoYXBlLWRpdmlkZXItdG9wLTE2NDAwODg0OTQgc3ZnIHtcclxuICAgIHdpZHRoOiBjYWxjKDIyMSUgKyAxLjNweCk7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <!-- menu en header -->\r\n  <ion-menu side=\"end\" menuId=\"header\" contentId=\"main\" mode=\"md\">\r\n\r\n    <ion-header>\r\n      \r\n\r\n      <ion-toolbar>\r\n        <!-- adorno superior -->\r\n        <div class=\"custom-shape-divider-top-1640088494\">\r\n        <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 120\" preserveAspectRatio=\"none\">\r\n            <path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\" opacity=\".25\" class=\"shape-fill\"></path>\r\n            <path d=\"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\" opacity=\".5\" class=\"shape-fill\"></path>\r\n            <path d=\"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\" class=\"shape-fill\"></path>\r\n        </svg>\r\n        </div>\r\n          <div class=\"avatar-container\"> \r\n            <ion-avatar>\r\n              <!-- imagen de Otilia: \"https://faces-img.xcdn.link/image-lorem-face-3080.jpg\" -->\r\n              <img class=\"\" src={{dataUser.img}}>\r\n            </ion-avatar>       \r\n          </div>\r\n             <!-- ion-menu-toggle cierra el menu al tocar el enlace -->\r\n        <ion-menu-toggle class=\"flex-menu\">\r\n        <div class=\"ion-padding alinear\">  \r\n          <ion-title class=\"ion-padding\" routerLink=\"log-in\">{{dataUser.name}}</ion-title>\r\n          <ion-text color=\"primary\"routerLink=\"register\">Need an Account?\r\n          </ion-text>\r\n        </div>\r\n        </ion-menu-toggle>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n\r\n      <ion-list>\r\n\r\n          <ion-menu-toggle class=\"flex-menu\">            \r\n                <div>\r\n                  <ion-item lines=\"none\" routerLink=\"personal\">\r\n                    <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>Personal Data\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" routerLink=\"favoritos\">\r\n                    <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>My Favorites\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" routerLink=\"orders\">\r\n                    <ion-icon name=\"newspaper-outline\" slot=\"start\"></ion-icon>Orders\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" routerLink=\"comentarios\">\r\n                    <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>Leave a comment\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" routerLink=\"share\" >\r\n                    <ion-icon name=\"share-outline\" slot=\"start\"></ion-icon>Share your table\r\n                  </ion-item>\r\n                  <!-- <ion-item><ion-icon name=\"logo-bitcoin\" slot=\"start\"></ion-icon>Earn Otiums</ion-item> -->\r\n                  <ion-item lines=\"none\" routerLink=\"earn\" > \r\n                    <img src=\"../../../assets/icon/otium.png\" alt=\"logo otium\" style=\"padding-right: 9%;\">Earn Otiums</ion-item>\r\n                </div>\r\n                <div>\r\n                  <ion-item lines=\"full\" routerLink=\"settings\" >\r\n                    <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>Settings\r\n                  </ion-item>\r\n                  <ion-img class=\"img-otium\" src='../../../assets/logos/logo_XL.png'></ion-img>\r\n                </div>\r\n             \r\n\r\n            \r\n          </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n    </ion-content>\r\n\r\n  </ion-menu>\r\n  \r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map