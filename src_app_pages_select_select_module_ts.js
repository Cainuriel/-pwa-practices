(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_select_select_module_ts"],{

/***/ 86:
/*!*******************************************************!*\
  !*** ./src/app/pages/select/select-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPageRoutingModule": () => (/* binding */ SelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.page */ 5602);




const routes = [
    {
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_0__.SelectPage
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectPageRoutingModule);



/***/ }),

/***/ 8167:
/*!***********************************************!*\
  !*** ./src/app/pages/select/select.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPageModule": () => (/* binding */ SelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-routing.module */ 86);
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.page */ 5602);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let SelectPageModule = class SelectPageModule {
};
SelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _select_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_1__.SelectPage]
    })
], SelectPageModule);



/***/ }),

/***/ 5602:
/*!*********************************************!*\
  !*** ./src/app/pages/select/select.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPage": () => (/* binding */ SelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_select_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select.page.html */ 1687);
/* harmony import */ var _select_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.page.scss */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let SelectPage = class SelectPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    orderFood() {
        const type = 'food';
        this.router.navigate(['/restaurant-menu', type]);
    }
    orderDrink() {
        const type = 'drink';
        this.router.navigate(['/restaurant-menu', type]);
    }
    viewTable() {
        console.log('View my table');
    }
};
SelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-select',
        template: _raw_loader_select_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectPage);



/***/ }),

/***/ 1891:
/*!***********************************************!*\
  !*** ./src/app/pages/select/select.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".button-requisition {\n  background-color: var(--ion-color-select-background-button-requisition);\n  border-radius: 15px;\n  height: 85px;\n  width: 250px;\n  margin: 30px auto 0px auto;\n}\n\n.font-white {\n  color: var(--ion-color-select-font);\n}\n\n.button-table {\n  background-color: var(--ion-color-select-background-button-table);\n  height: 40px;\n  width: 175px;\n  margin: 30px auto 0 auto;\n  border-radius: 35px;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.sub-content {\n  max-width: 500px;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.restaurant {\n  height: 300px;\n  width: 250px;\n  border-radius: 15px;\n  border: 2px solid var(--ion-color-select-background-button-requisition);\n  padding: 10px 0px;\n  margin: 0px 0px 10px 0px;\n}\n\n.img-restaurant {\n  max-width: 175px;\n  max-height: 200px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1RUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGlFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVFQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1yZXF1aXNpdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VsZWN0LWJhY2tncm91bmQtYnV0dG9uLXJlcXVpc2l0aW9uKTsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMHB4IGF1dG87XHJcbn1cclxuXHJcbi5mb250LXdoaXRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VsZWN0LWZvbnQpO1xyXG59XHJcblxyXG4uYnV0dG9uLXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWxlY3QtYmFja2dyb3VuZC1idXR0b24tdGFibGUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5yZXN0YXVyYW50e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2VsZWN0LWJhY2tncm91bmQtYnV0dG9uLXJlcXVpc2l0aW9uKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uaW1nLXJlc3RhdXJhbnQge1xyXG4gICAgbWF4LXdpZHRoOjE3NXB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ 1687:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select/select.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <!-- Content -->\r\n  <div class=\"content\">\r\n    <!-- sub-content -->\r\n    <div class=\"sub-content\">\r\n      <!-- Restaurant -->\r\n      <div class=\"restaurant\">\r\n        <ion-img class=\"img-restaurant\" src=\"assets/logos-empresas/starbucks-coffee.png\"></ion-img>\r\n        <ion-button class=\"button-table font-white\" (click)=\"viewTable()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          Table 7\r\n        </ion-button>\r\n      </div>\r\n      <!-- END Restaurant -->\r\n      <!-- Buttons -->\r\n      <div>\r\n        <ion-button class=\"button-requisition font-white\" (click)=\"orderFood()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          HUNGRY\r\n        </ion-button>\r\n      \r\n        <ion-button class=\"button-requisition font-white\" (click)=\"orderDrink()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          THIRSTY\r\n        </ion-button>\r\n      </div>\r\n      <!-- END Buttons -->\r\n    </div>\r\n    <!-- END sub-content -->\r\n  </div>\r\n  <!-- END Content -->\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_select_select_module_ts.js.map