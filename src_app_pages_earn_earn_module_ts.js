(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_earn_earn_module_ts"],{

/***/ 7177:
/*!***************************************************!*\
  !*** ./src/app/pages/earn/earn-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EarnPageRoutingModule": () => (/* binding */ EarnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _earn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earn.page */ 578);




const routes = [
    {
        path: '',
        component: _earn_page__WEBPACK_IMPORTED_MODULE_0__.EarnPage
    }
];
let EarnPageRoutingModule = class EarnPageRoutingModule {
};
EarnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EarnPageRoutingModule);



/***/ }),

/***/ 7241:
/*!*******************************************!*\
  !*** ./src/app/pages/earn/earn.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EarnPageModule": () => (/* binding */ EarnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _earn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earn-routing.module */ 7177);
/* harmony import */ var _earn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./earn.page */ 578);







let EarnPageModule = class EarnPageModule {
};
EarnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _earn_routing_module__WEBPACK_IMPORTED_MODULE_0__.EarnPageRoutingModule
        ],
        declarations: [_earn_page__WEBPACK_IMPORTED_MODULE_1__.EarnPage]
    })
], EarnPageModule);



/***/ }),

/***/ 578:
/*!*****************************************!*\
  !*** ./src/app/pages/earn/earn.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EarnPage": () => (/* binding */ EarnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_earn_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./earn.page.html */ 5062);
/* harmony import */ var _earn_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./earn.page.scss */ 4277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let EarnPage = class EarnPage {
    constructor() { }
    ngOnInit() {
    }
};
EarnPage.ctorParameters = () => [];
EarnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-earn',
        template: _raw_loader_earn_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_earn_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EarnPage);



/***/ }),

/***/ 4277:
/*!*******************************************!*\
  !*** ./src/app/pages/earn/earn.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlYXJuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5062:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/earn/earn.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>earn</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_earn_earn_module_ts.js.map