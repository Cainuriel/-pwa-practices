(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_welcome_welcome_module_ts"],{

/***/ 7162:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 5034);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 1210:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 7162);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 5034);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 5034:
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 9816);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 9518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let WelcomePage = class WelcomePage {
    constructor() { }
    ngOnInit() {
    }
};
WelcomePage.ctorParameters = () => [];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



/***/ }),

/***/ 9518:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcome-cards {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 70vh;\n}\n\nion-text h1 {\n  font-size: 2rem;\n  margin: 1.5rem;\n}\n\nion-card {\n  border: 1px solid #3c0080;\n  box-shadow: 3px 3px 8px #3c0080;\n  border-radius: 2.5rem;\n  margin: 1rem 2.5rem;\n}\n\n.map {\n  background: url('map2.png') no-repeat top center #ffffff8a;\n  background-size: 180px;\n}\n\n.qr-scan {\n  background: url('scan-qr.png') no-repeat top center #ffffff8a;\n  background-size: 120px;\n}\n\n.textos {\n  padding: 9rem 1.5rem 1.5rem 2.5rem;\n}\n\nion-content {\n  --background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1)\n    ),\n    url('Otium_Transparet_No Shadow.png') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBEQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZEQUFBO0VBRUEsc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0FBQUY7O0FBR0E7RUFDRTs7Ozs7bURBQUE7QUFLRiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5pb24tdGV4dCBoMSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMS41cmVtO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjMDA4MDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjM2MwMDgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICBtYXJnaW46IDFyZW0gMi41cmVtO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hcDIucG5nXCIpIG5vLXJlcGVhdCB0b3AgY2VudGVyICNmZmZmZmY4YTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE4MHB4O1xyXG59XHJcblxyXG4ucXItc2NhbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9zY2FuLXFyLnBuZ1wiKSBuby1yZXBlYXQgdG9wIGNlbnRlclxyXG4gICAgI2ZmZmZmZjhhO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHg7XHJcbn1cclxuXHJcbi50ZXh0b3Mge1xyXG4gIHBhZGRpbmc6IDlyZW0gMS41cmVtIDEuNXJlbSAyLjVyZW07XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcclxuICAgICksXHJcbiAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9nb3MvT3RpdW1fVHJhbnNwYXJldF9Ob1xcIFNoYWRvdy5wbmdcIikgbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9816:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <app-header></app-header>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  <ion-text color=\"primary\" class=\"ion-text-center\">\r\n    <h1>Welcome Otilia</h1>\r\n  </ion-text>\r\n  <div class=\"welcome-cards\">\r\n    <ion-card class=\"map\" routerLink=\"/map\">\r\n      <ion-card-content class=\"textos ion-text-center\">\r\n        <ion-card-subtitle>Explore the map</ion-card-subtitle>\r\n        <ion-card-title color=\"primary\">Find your place</ion-card-title>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"qr-scan\" routerLink=\"/qr\">\r\n      <ion-card-content class=\"textos ion-text-center\">\r\n        <ion-card-subtitle>Scan QR to see the menu</ion-card-subtitle>\r\n        <ion-card-title color=\"primary\">Start your order</ion-card-title>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  \r\n\r\n  <!-- <div class=\"content\">\r\n        <ion-text class=\"text-center ion-padding\">\r\n          <h1 class=\"text-center\">Welcome</h1>\r\n        </ion-text>\r\n    \r\n        <div>\r\n          <h2 class=\"text-center\">Looking for the best offer?</h2>\r\n\r\n          <ion-button routerLink=\"/map\" class=\"btn\" expand=\"block\">\r\n            <ion-icon slot=\"start\" size=\"large\" name=\"location-outline\"></ion-icon>\r\n            Explore the Map\r\n          </ion-button>\r\n        </div>\r\n        <div>\r\n          <h2 class=\"text-center\">Already in?</h2>\r\n  \r\n          <ion-button routerLink=\"/qr\" class=\"btn\"  expand=\"block\">\r\n            <ion-icon slot=\"start\"  size=\"large\"  name=\"qr-code-outline\"></ion-icon>\r\n            Scan the QR\r\n          </ion-button>\r\n        </div>\r\n  </div> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_module_ts.js.map