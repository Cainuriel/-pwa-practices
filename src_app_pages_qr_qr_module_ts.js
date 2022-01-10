(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_qr_qr_module_ts"],{

/***/ 619:
/*!***********************************************!*\
  !*** ./src/app/pages/qr/qr-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPageRoutingModule": () => (/* binding */ QrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr.page */ 4698);




const routes = [
    {
        path: '',
        component: _qr_page__WEBPACK_IMPORTED_MODULE_0__.QrPage
    }
];
let QrPageRoutingModule = class QrPageRoutingModule {
};
QrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrPageRoutingModule);



/***/ }),

/***/ 1586:
/*!***************************************!*\
  !*** ./src/app/pages/qr/qr.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPageModule": () => (/* binding */ QrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-routing.module */ 619);
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr.page */ 4698);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let QrPageModule = class QrPageModule {
};
QrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_qr_page__WEBPACK_IMPORTED_MODULE_1__.QrPage]
    })
], QrPageModule);



/***/ }),

/***/ 4698:
/*!*************************************!*\
  !*** ./src/app/pages/qr/qr.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPage": () => (/* binding */ QrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_qr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr.page.html */ 3925);
/* harmony import */ var _qr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr.page.scss */ 3185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let QrPage = class QrPage {
    constructor() { }
    ngOnInit() {
    }
};
QrPage.ctorParameters = () => [];
QrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qr',
        template: _raw_loader_qr_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrPage);



/***/ }),

/***/ 3185:
/*!***************************************!*\
  !*** ./src/app/pages/qr/qr.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".text-center {\n  text-align: center;\n}\n\n.corners {\n  border-radius: 25px;\n  border: 2px solid var(--ion-color-tertiary);\n  margin-top: 20px;\n  width: 250px;\n  text-align: center;\n  --placeholder-font-weight: 12px !important;\n}\n\n.input-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJxci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIgeyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb3JuZXJzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 3925:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr/qr.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card mode=\"ios\">\r\n    <ion-card-header>\r\n      <ion-text color=\"primary\" class=\"text-center\">\r\n        <h1 >Scan your site</h1>\r\n      </ion-text>\r\n    </ion-card-header>\r\n    <ion-card-content routerLink=\"/select\">\r\n      <img src=\"../../../assets/img/scan-qr.png\" alt=\"mapa de google\">\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"input-content\">\r\n    <ion-text>Problems with the scan?</ion-text>\r\n    <ion-input class=\"corners\" type=\"text\" placeholder=\"Write table or place number\"></ion-input>\r\n  </div>\r\n  <ion-button routerLink=\"/select\" expand=\"block\" shape=\"round\" class=\"ion-padding\">\r\n    Send\r\n  </ion-button>\r\n\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_qr_qr_module_ts.js.map