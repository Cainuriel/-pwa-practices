(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_pago_pago_module_ts"],{

/***/ 9583:
/*!***************************************************!*\
  !*** ./src/app/pages/pago/pago-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPageRoutingModule": () => (/* binding */ PagoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _pago_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago.page */ 3346);




const routes = [
    {
        path: '',
        component: _pago_page__WEBPACK_IMPORTED_MODULE_0__.PagoPage
    }
];
let PagoPageRoutingModule = class PagoPageRoutingModule {
};
PagoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagoPageRoutingModule);



/***/ }),

/***/ 6746:
/*!*******************************************!*\
  !*** ./src/app/pages/pago/pago.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPageModule": () => (/* binding */ PagoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _pago_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-routing.module */ 9583);
/* harmony import */ var _pago_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago.page */ 3346);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let PagoPageModule = class PagoPageModule {
};
PagoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pago_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagoPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_pago_page__WEBPACK_IMPORTED_MODULE_1__.PagoPage]
    })
], PagoPageModule);



/***/ }),

/***/ 3346:
/*!*****************************************!*\
  !*** ./src/app/pages/pago/pago.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPage": () => (/* binding */ PagoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_pago_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pago.page.html */ 2731);
/* harmony import */ var _pago_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago.page.scss */ 8158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let PagoPage = class PagoPage {
    constructor() {
        this.initialbalance = 20.5;
        this.finalbalance = this.initialbalance;
        this.percentToGet = 10;
    }
    ngOnInit() {
    }
    sumTip() {
        console.log('inputTip ', this.inputTip);
        this.finalbalance = this.initialbalance + this.inputTip;
    }
    percentage() {
        this.finalbalance += Number(((this.percentToGet / 100) * this.initialbalance).toFixed(2));
        // console.log('percentage ', ((this.percentToGet / 100) * this.balance).toFixed(2));
    }
};
PagoPage.ctorParameters = () => [];
PagoPage.propDecorators = {
    initialbalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    finalbalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PagoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-pago',
        template: _raw_loader_pago_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pago_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagoPage);



/***/ }),

/***/ 8158:
/*!*******************************************!*\
  !*** ./src/app/pages/pago/pago.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".text-center {\n  margin: 1em;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.info-Otium {\n  margin-right: 60px;\n}\n\n.visa {\n  height: 48px;\n}\n\n.mastercard {\n  margin-top: 15px;\n  height: 48px;\n}\n\n.creditcardText {\n  margin-top: 35px;\n}\n\nion-input {\n  border: 3px solid var(--ion-color-medium);\n  width: 150px !important;\n  color: var(--ion-color-primary);\n  --placeholder-color: var(--ion-color-tertiary);\n}\n\n.payButton, .tip {\n  margin: 60px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.tip {\n  margin: 30px;\n}\n\n.cartbutton {\n  height: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBQ0UsdUJBQUE7QUFBSiIsImZpbGUiOiJwYWdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7IFxyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXHJcbiAgfVxyXG5cclxuICAuaW5mby1PdGl1bSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAudmlzYSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAubWFzdGVyY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgLmNyZWRpdGNhcmRUZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBpb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIH1cclxuXHJcbiAgLnBheUJ1dHRvbiwgLnRpcCB7XHJcbiAgICBtYXJnaW46IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC50aXAge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FydGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDZyZW0gIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ 2731:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago/pago.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content fullscreen class=\"ion-padding\">\r\n  <ion-button color=\"success\" expand=\"block\" fill=\"solid\" size=\"large\" shape=\"round\" class=\"cartbutton ion-padding\">\r\n    <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> {{initialbalance}} €\r\n   </ion-button>\r\n\r\n<ion-card >\r\n  <ion-card-header>\r\n    <ion-card-title color=\"primary\"><h1  class=\"ion-text-center\">PAYMENT METHODS</h1></ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n      <ion-list mode=\"md\">\r\n      <ion-radio-group value=\"visa\">    \r\n        <ion-item>\r\n          <img class=\"visa\" src=\"../../../assets/icon/visa.png\"><img class=\"mastercard\"  src=\"../../../assets/icon/mastercard.png\">\r\n          <ion-label color=\"primary\" class=\"creditcardText\"> CREDIT CARDS</ion-label>\r\n          <ion-radio slot=\"start\" value=\"visa\"></ion-radio>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label color=\"primary\">PAYPAL</ion-label>\r\n          <ion-radio slot=\"start\" value=\"paypal\"></ion-radio>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label color=\"primary\">BITCOIN</ion-label>\r\n          <ion-radio slot=\"start\" value=\"crypto\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label color=\"primary\">OTIUM</ion-label>\r\n          <ion-radio slot=\"start\" value=\"otiums\"></ion-radio>\r\n          <ion-text color=\"warning\">\r\n            <h5 class=\"info-Otium\">GET 3% BACK</h5>\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n    <ion-item class=\"text-center\">\r\n      <ion-title color=\"primary\">TIP</ion-title>\r\n    </ion-item>\r\n\r\n    <div class=\"tip\">\r\n      <ion-button shape=\"round\" (click)=\"percentage()\">\r\n        10%\r\n      </ion-button>\r\n      <ion-input class=\"ion-text-center\" placeholder=\"Give a tip?\" type=\"number\" value=\"333\" name=\"inputTip\" [(ngModel)]=\"inputTip\"></ion-input>\r\n      <ion-button shape=\"round\" type=\"submit\" (click)=\"sumTip()\">\r\n        Add\r\n      </ion-button>\r\n    </div>\r\n\r\n<ion-button class=\"payButton\" color=\"primary\" shape=\"round\" expand=\"block\" fill=\"solid\" size=\"large\">\r\n  PAY  {{finalbalance}} €\r\n</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pago_pago_module_ts.js.map