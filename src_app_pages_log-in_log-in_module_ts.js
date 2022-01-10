(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_log-in_log-in_module_ts"],{

/***/ 525:
/*!*******************************************************!*\
  !*** ./src/app/pages/log-in/log-in-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInPageRoutingModule": () => (/* binding */ LogInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-in.page */ 7313);




const routes = [
    {
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_0__.LogInPage
    }
];
let LogInPageRoutingModule = class LogInPageRoutingModule {
};
LogInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogInPageRoutingModule);



/***/ }),

/***/ 4051:
/*!***********************************************!*\
  !*** ./src/app/pages/log-in/log-in.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInPageModule": () => (/* binding */ LogInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _log_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-in-routing.module */ 525);
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-in.page */ 7313);







let LogInPageModule = class LogInPageModule {
};
LogInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _log_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogInPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_1__.LogInPage]
    })
], LogInPageModule);



/***/ }),

/***/ 7313:
/*!*********************************************!*\
  !*** ./src/app/pages/log-in/log-in.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInPage": () => (/* binding */ LogInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./log-in.page.html */ 5342);
/* harmony import */ var _log_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-in.page.scss */ 6528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);



/* eslint-disable @typescript-eslint/no-inferrable-types */




let LogInPage = class LogInPage {
    constructor(router, toastCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.selectedLanguage = 'en';
        this.languages = [
            { name: 'English', abbreviation: 'en', imagesrc: '/assets/icon/languages/en.png' },
            { name: 'Español', abbreviation: 'es', imagesrc: '/assets/icon/languages/es.png' },
            { name: 'Deutsche', abbreviation: 'de', imagesrc: '/assets/icon/languages/de.png' },
            { name: 'Française', abbreviation: 'fr', imagesrc: '/assets/icon/languages/fr.png' },
            { name: 'Italian', abbreviation: 'it', imagesrc: '/assets/icon/languages/it.png' },
            { name: 'Português', abbreviation: 'pt', imagesrc: '/assets/icon/languages/pt.png' }
        ];
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl()
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formulario.valid) {
                this.router.navigate(['/welcome']);
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'Please fill in email and password',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    loadLanguages() {
        setTimeout(() => {
            const radios = document.getElementsByClassName('alert-radio-label');
            for (let index = 0; index < radios.length; index++) {
                const element = radios[index];
                element.innerHTML = element.innerHTML.concat('<img src=' + this.languages[index].imagesrc + ' style="width:30px; position:absolute; right:30px;"/>');
                element.style.fontSize = '22px';
            }
        }, 200);
    }
};
LogInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
LogInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-log-in',
        template: _raw_loader_log_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_log_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LogInPage);



/***/ }),

/***/ 6528:
/*!***********************************************!*\
  !*** ./src/app/pages/log-in/log-in.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-select {\n  width: 150px;\n  padding-right: 10px;\n  border-radius: 15px;\n  border: 2px solid var(--ion-color-login-font);\n  margin-left: 0px;\n  margin-bottom: 0px !important;\n  background-repeat: no-repeat;\n  background-position: 5% 50%;\n  background-size: 32px;\n  margin: 0px;\n  text-align: end;\n}\n\n.ion-item-none-underline {\n  --border-width: 0px 0px !important;\n  --border-color: transparent;\n}\n\nion-toolbar {\n  padding-bottom: 0px;\n}\n\n.form {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.password {\n  margin-top: 15px;\n}\n\n.ion-input {\n  --padding-start: 20px;\n  border-radius: 25px;\n  border: 2px solid var(--ion-color-login-input-border);\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.ion-label, .a {\n  color: var(--ion-color-login-font);\n}\n\n.a {\n  text-decoration: none;\n  display: block;\n}\n\n.ion-button {\n  --border-radius: 15px;\n  --background: var(--ion-color-login-background-button);\n  height: 60px;\n  width: 200px;\n  margin: 30px auto 0 auto;\n}\n\n.account_block {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  max-width: 240px;\n  margin: 8px auto 0 auto;\n}\n\n.footer_block {\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 10px auto 10px auto;\n}\n\n.content {\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0 auto;\n  justify-content: space-around;\n}\n\n.img-otium {\n  width: 250px;\n  margin: 10px auto;\n}\n\n.img-fingerprint {\n  width: 70px;\n  margin: 10px auto;\n}\n\n.center {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJsb2ctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9naW4tZm9udCk7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUlIDUwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLmlvbi1pdGVtLW5vbmUtdW5kZXJsaW5lIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucGFzc3dvcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW9uLWlucHV0IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9naW4taW5wdXQtYm9yZGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLWxhYmVsLCAuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxvZ2luLWZvbnQpO1xyXG59XHJcblxyXG4uYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1sb2dpbi1iYWNrZ3JvdW5kLWJ1dHRvbik7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XHJcbn1cclxuXHJcbi5hY2NvdW50X2Jsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHggYXV0byAwIGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXJfYmxvY2t7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmltZy1vdGl1bSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLmltZy1maW5nZXJwcmludCB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 5342:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/log-in/log-in.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-padding\">\r\n    <ion-item class=\"ion-item-none-underline\">\r\n      <ion-label style=\"display: none;\">Select language</ion-label>\r\n      <ion-select [ngStyle]=\"{'background-image': 'url(assets/icon/languages/' +selectedLanguage+ '.png)'}\"  class=\"ion-select\" slot=\"end\" (click)=\"loadLanguages()\"  [(ngModel)]=\"selectedLanguage\"> \r\n        <ion-select-option *ngFor=\"let language of languages\" value=\"{{language.abbreviation}}\">{{language.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"content\">\r\n    \r\n\r\n    <ion-img class=\"img-otium\" src=\"/assets/logos/logo_XL.png\"></ion-img>\r\n    \r\n    <form class=\"form\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"email\">\r\n        <ion-label class=\"ion-label\"><strong>E - mail:</strong></ion-label>\r\n        <ion-input class=\"ion-input\" type=\"email\"\r\n                  placeholder=\"Email\"\r\n                  required formControlName=\"email\">\r\n        </ion-input>\r\n      </div>\r\n      <div class=\"password\">\r\n        <ion-label class=\"ion-label\"><strong>Password:</strong></ion-label>\r\n        <ion-input class=\"ion-input\" type=\"password\" \r\n                  placeholder=\"Password\"\r\n                  required formControlName=\"password\">\r\n        </ion-input>\r\n      </div>\r\n      <a class=\"a\" href=\"\"><i>Forgot password?</i></a>\r\n      \r\n      <ion-button class=\"ion-button\" type=\"submit\" expand=\"block\">\r\n        Log in\r\n      </ion-button>\r\n\r\n      <div class=\"account_block\">\r\n        <a class=\"a\" href=\"\">Need an account?</a>\r\n        <a class=\"a\" href=\"\">Sign in</a>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <a routerLink=\"/welcome\">\r\n      <ion-img class=\"img-fingerprint\" src=\"assets/img/fingerprint.png\"></ion-img>\r\n    </a>\r\n    <a class=\"a center\" routerLink=\"/welcome\">Continue without account</a>\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border footer_block\">\r\n    <a class=\"a\" href=\"\">Terms of use</a>\r\n    <a class=\"a\" href=\"\">Privacy policy</a>\r\n    <a class=\"a\" href=\"\">Contact us</a>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_log-in_log-in_module_ts.js.map