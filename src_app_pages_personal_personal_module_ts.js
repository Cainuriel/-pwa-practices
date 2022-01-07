(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_personal_personal_module_ts"],{

/***/ 400:
/*!***********************************************************!*\
  !*** ./src/app/pages/personal/personal-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalPageRoutingModule": () => (/* binding */ PersonalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _personal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.page */ 1297);




const routes = [
    {
        path: '',
        component: _personal_page__WEBPACK_IMPORTED_MODULE_0__.PersonalPage
    }
];
let PersonalPageRoutingModule = class PersonalPageRoutingModule {
};
PersonalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonalPageRoutingModule);



/***/ }),

/***/ 3385:
/*!***************************************************!*\
  !*** ./src/app/pages/personal/personal.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalPageModule": () => (/* binding */ PersonalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-routing.module */ 400);
/* harmony import */ var _personal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.page */ 1297);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);








let PersonalPageModule = class PersonalPageModule {
};
PersonalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_personal_page__WEBPACK_IMPORTED_MODULE_1__.PersonalPage]
    })
], PersonalPageModule);



/***/ }),

/***/ 1297:
/*!*************************************************!*\
  !*** ./src/app/pages/personal/personal.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalPage": () => (/* binding */ PersonalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_personal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./personal.page.html */ 5606);
/* harmony import */ var _personal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.page.scss */ 1992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 7611);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 6683);






let PersonalPage = class PersonalPage {
    constructor(userservice, camera) {
        this.userservice = userservice;
        this.camera = camera;
        this.tempImg = '../../../assets/img/userDefault.png';
    }
    get dataUser() {
        return this.userservice.getUser;
    }
    ngOnInit() {
        setTimeout(() => {
            this.user = this.dataUser;
            this.dateUser = new Date(this.user.birth);
        }, 500);
    }
    camara() {
        console.log('entro en funcion de camara');
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => {
            //  let base64Image = 'data:image/jpeg;base64,' + imageData;
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            console.log('imagen de la camara', img);
            this.tempImg = img;
        }, (err) => {
            // Handle error
        });
    }
};
PersonalPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera }
];
PersonalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-personal',
        template: _raw_loader_personal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_personal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PersonalPage);



/***/ }),

/***/ 1992:
/*!***************************************************!*\
  !*** ./src/app/pages/personal/personal.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-content {\n  --background: url('gradient-background.jpg') no-repeat top center/cover fixed, #fff;\n  height: 100vh !important;\n}\n.avatar {\n  width: 160px;\n  height: 160px;\n}\nimg {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n.btc-edit {\n  position: absolute;\n  top: 200px;\n  --background: rgb(207, 146, 13);\n}\n.card-body {\n  position: relative;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.name {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.data {\n  font-size: 90%;\n  color: var(--ion-color-secondary);\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxtRkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFQTtFQUNLLGtCQUFBO0VBQ0EsVUFBQTtFQUNELCtCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoicGVyc29uYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JhZGllbnQtYmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJ0Yy1lZGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDcsIDE0NiwgMTMpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgg4oCTICgyMDBweCArIDU2cHgpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5kYXRhIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ 5606:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personal/personal.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n     <app-header></app-header>\r\n\r\n\r\n<ion-content>\r\n<ion-grid class=\"ion-padding\">\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n   <div class=\"avatar\">\r\n      <img src={{tempImg}}>\r\n    </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n         <ion-button class=\"btc-edit\" expand=\"block\"  shape=\"round\" (click)=\"camara()\" >\r\n           Update Image <ion-icon slot=\"end\" name=\"camera\"></ion-icon>\r\n         </ion-button>\r\n       </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n  <ion-grid class=\"ion-padding ion-text-center\" style=\"margin-top: 50px;\" >\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n      <div>\r\n        <h3 style=\"margin: 20px;\" class=\"name\">{{ user.name }} {{ user.secondName }}</h3>\r\n        <h5 style=\"margin: 20px;\" class=\"data\">Tel: {{ user.phone }}</h5>\r\n        <h5 style=\"margin: 20px;\" class=\"data\">Birth: {{ dateUser | date: 'd-M-yyyy ' }}</h5>\r\n     </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n  <ion-button style=\"margin: 20px;\" expand=\"block\" shape=\"round\" color=\"tertiary\" >Credit Card Data</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <ion-button style=\"margin: 20px;\" expand=\"block\" shape=\"round\" color=\"secondary\">Metamask account</ion-button>  \r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n          <ion-button style=\"margin: 20px;\" expand=\"block\" shape=\"round\"color=\"primary\">Edit personal data</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_personal_personal_module_ts.js.map