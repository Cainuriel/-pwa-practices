(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_restaurant-menu-modal_restaurant-menu-modal_module_ts"],{

/***/ 1628:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/restaurant-menu-modal/restaurant-menu-modal-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantMenuModalPageRoutingModule": () => (/* binding */ RestaurantMenuModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-menu-modal.page */ 4396);




const routes = [
    {
        path: '',
        component: _restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantMenuModalPage
    }
];
let RestaurantMenuModalPageRoutingModule = class RestaurantMenuModalPageRoutingModule {
};
RestaurantMenuModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantMenuModalPageRoutingModule);



/***/ }),

/***/ 4427:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/restaurant-menu-modal/restaurant-menu-modal.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantMenuModalPageModule": () => (/* binding */ RestaurantMenuModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _restaurant_menu_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-menu-modal-routing.module */ 1628);
/* harmony import */ var _restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-menu-modal.page */ 4396);







let RestaurantMenuModalPageModule = class RestaurantMenuModalPageModule {
};
RestaurantMenuModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restaurant_menu_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestaurantMenuModalPageRoutingModule
        ],
        declarations: [_restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantMenuModalPage]
    })
], RestaurantMenuModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_restaurant-menu-modal_restaurant-menu-modal_module_ts.js.map