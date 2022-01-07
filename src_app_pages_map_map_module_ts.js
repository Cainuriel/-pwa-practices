(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_map_map_module_ts"],{

/***/ 3463:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 8016);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 722:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 3463);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 8016);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 8016:
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.page.html */ 3892);
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss */ 4669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let MapPage = class MapPage {
    constructor() { }
    ngOnInit() {
    }
};
MapPage.ctorParameters = () => [];
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPage);



/***/ }),

/***/ 4669:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxxQkFBQTtBQUZKIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 3892:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n\r\n<ion-card mode=\"ios\">\r\n  <ion-card-header>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"What are you looking for?\"></ion-input>\r\n    </ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content routerLink=\"/select\">\r\n    <img src=\"../../../assets/img/map.png\" alt=\"mapa de google\">\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border footer_block\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <ion-item>\r\n          <ion-button color=\"primary\">\r\n            <ion-icon slot=\"icon-only\" name=\"restaurant-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n        <small  style=\"margin-left: 12px;\">Restaurants</small>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-item>\r\n          <ion-button color=\"danger\">\r\n            <ion-icon slot=\"icon-only\" name=\"cafe-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n        <small style=\"margin-left: 17px;\">Cooffes</small>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-item>\r\n          <ion-button color=\"warning\">\r\n            <ion-icon slot=\"icon-only\" name=\"bed-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n        <small  style=\"margin-left: 20px;\">Hotels</small>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-item>\r\n          <ion-button color=\"success\">\r\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n        <small  style=\"margin-left: 22px;\">More</small>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_map_map_module_ts.js.map