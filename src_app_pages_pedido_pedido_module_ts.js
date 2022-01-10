(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_pedido_pedido_module_ts"],{

/***/ 8498:
/*!*******************************************************!*\
  !*** ./src/app/pages/pedido/pedido-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPageRoutingModule": () => (/* binding */ PedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.page */ 2871);




const routes = [
    {
        path: '',
        component: _pedido_page__WEBPACK_IMPORTED_MODULE_0__.PedidoPage
    }
];
let PedidoPageRoutingModule = class PedidoPageRoutingModule {
};
PedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PedidoPageRoutingModule);



/***/ }),

/***/ 5488:
/*!***********************************************!*\
  !*** ./src/app/pages/pedido/pedido.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPageModule": () => (/* binding */ PedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido-routing.module */ 8498);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page */ 2871);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let PedidoPageModule = class PedidoPageModule {
};
PedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidoPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_1__.PedidoPage]
    })
], PedidoPageModule);



/***/ }),

/***/ 2871:
/*!*********************************************!*\
  !*** ./src/app/pages/pedido/pedido.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPage": () => (/* binding */ PedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pedido.page.html */ 8292);
/* harmony import */ var _pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page.scss */ 3854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let PedidoPage = class PedidoPage {
    constructor() { }
    ngOnInit() {
    }
};
PedidoPage.ctorParameters = () => [];
PedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pedido',
        template: _raw_loader_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PedidoPage);



/***/ }),

/***/ 3854:
/*!***********************************************!*\
  !*** ./src/app/pages/pedido/pedido.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 3px solid #ccc;\n  transition: 0.5s;\n  outline: none;\n}\n\n.center-text {\n  text-align: center;\n}\n\n.center-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-button {\n  display: flex;\n  justify-content: space-around;\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBQ3hDOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNKIiwiZmlsZSI6InBlZGlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 8292:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido/pedido.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content mode=\"md\" class=\"flex-container\">\r\n<ion-card class=\"ion-padding\" mode=\"md\">\r\n  <ion-card-header>\r\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\">Table 41</ion-button>\r\n      <div style=\"text-align: center; padding-top: 1.25rem;\">\r\n      <ion-title>Order</ion-title>\r\n      </div>\r\n  </ion-card-header>\r\n  <ion-card-content scroll-x=\"true\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <ion-text color=\"primary\" >\r\n            <h5>Hamburger special</h5>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">12 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <ion-text color=\"primary\" >\r\n            <h5>Extra Bacon</h5>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">1 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <div>\r\n          <ion-row> \r\n            <ion-text color=\"primary\" >\r\n            <h5>Classic daiquiri</h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row> \r\n          <small>*Not to heavy please</small>\r\n      </ion-row>\r\n        </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">12 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <div>\r\n          <ion-row> \r\n            <ion-text color=\"primary\" >\r\n            <h5>Classic daiquiri</h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row> \r\n          <small>*Not to heavy please</small>\r\n      </ion-row>\r\n        </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">12 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <div>\r\n          <ion-row> \r\n            <ion-text color=\"primary\" >\r\n            <h5>Classic daiquiri</h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row> \r\n          <small>*Not to heavy please</small>\r\n      </ion-row>\r\n        </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">12 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-input type=\"number\" placeholder=\"1\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"center-content\">\r\n          <div>\r\n          <ion-row> \r\n            <ion-text color=\"primary\" >\r\n            <h5>Classic daiquiri</h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row> \r\n          <small>*Not to heavy please</small>\r\n      </ion-row>\r\n        </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">\r\n          <ion-text color=\"primary\">\r\n            <h3 style=\"font-size: 16px;\">12 €</h3>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"center-content\">       \r\n            <div>\r\n            <ion-icon style=\"height: 1.875rem; width: 1.875rem;\" slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-card mode=\"md\">\r\n\r\n        <ion-text color=\"primary\" class=\"ion-text-center\">\r\n          <h2>TOTAL 25 €</h2>\r\n        </ion-text>\r\n\r\n      <ion-card-content class=\"flex-button\">\r\n        <div routerLink=\"/pago\">\r\n          <ion-button expand=\"block\" shape=\"round\" color=\"primary\" size=\"large\">\r\n            CONFIRM ORDER\r\n          </ion-button>\r\n        </div>\r\n    \r\n      </ion-card-content>  \r\n      <ion-card-subtitle class=\"ion-text-center ion-padding\">After confirmming there is no posibility to cancel or change the order</ion-card-subtitle>\r\n    </ion-card>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pedido_pedido_module_ts.js.map