(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 6324:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 109);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 9961:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 6324);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 109);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 9258);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 109:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4315);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 3436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 7611);






let RegisterPage = class RegisterPage {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.usuario = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            img: '../../../assets/img/userDefault.png',
        }); // todo no funciona la validacion del movil: Validators.pattern('[6789][0-9]{9}')
        // flags 
        this.hiddenPassword = true;
        this.passwordNotMatch = true;
    }
    ngOnInit() {
    }
    seePassword() {
        this.hiddenPassword = !this.hiddenPassword;
    }
    guardarDatos() {
        console.log(this.usuario.value);
        this.userService.saveUser(this.usuario.value);
    }
    passwordMatch() {
        let password = this.usuario.controls.password.value;
        let confirmPassword = this.usuario.controls.confirmPassword.value;
        console.log('el password ', password);
        console.log('confirm password ', confirmPassword);
        if (password === confirmPassword) {
            this.passwordNotMatch = true;
        }
        else {
            this.passwordNotMatch = false;
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 3436:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".center-class {\n  margin: 26px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jbGFzcyB7XHJcbiAgICBtYXJnaW46IDI2cHggYXV0bztcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 4315:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <h1 class=\"ion-text-center\">Register</h1>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form\r\n        [formGroup]=\"usuario\"\r\n        (ngSubmit)=\"guardarDatos()\"\r\n        class=\"ion-padding\"\r\n      >\r\n        <ion-item>\r\n          <ion-label>Name:</ion-label>\r\n          <ion-input formControlName=\"name\"></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.nombre.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n\r\n        <ion-item>\r\n          <ion-label>Second Name:</ion-label>\r\n          <ion-input formControlName=\"secondName\"></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.apellido.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n\r\n        <ion-item>\r\n          <ion-label>Email:</ion-label>\r\n          <ion-input formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.email.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n        <ion-label\r\n          color=\"danger\"\r\n          *ngIf=\"usuario.controls.email.errors?.email && (usuario.touched || usuario.dirty)\"\r\n          >* No valid email</ion-label\r\n        >\r\n\r\n        <ion-item>\r\n          <ion-label>Password:</ion-label>\r\n          <ion-input\r\n            (change)=\"passwordMatch()\"\r\n            formControlName=\"password\"\r\n            [type]=\"hiddenPassword ? 'password' : 'text'\"\r\n          ></ion-input>\r\n          <ion-icon\r\n            (click)=\"seePassword()\"\r\n            slot=\"end\"\r\n            [name]=\"hiddenPassword ? 'eye-off' : 'eye'\"\r\n          ></ion-icon>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.password.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n        <ion-label\r\n          color=\"danger\"\r\n          *ngIf=\"usuario.controls.password.errors?.pattern && (usuario.touched || usuario.dirty)\"\r\n          >* numbers and capital letters</ion-label\r\n        >\r\n\r\n        <ion-item>\r\n          <label>Confirm Password: </label>\r\n          <ion-input\r\n            (change)=\"passwordMatch()\"\r\n            formControlName=\"confirmPassword\"\r\n            [type]=\"hiddenPassword ? 'password' : 'text'\"\r\n          >\r\n          </ion-input>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.confirmPassword.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n        <ion-label\r\n          color=\"danger\"\r\n          *ngIf=\"!passwordNotMatch && (usuario.dirty || usuario.touched)\"\r\n          >* Password and Confirm Password fields should match</ion-label\r\n        >\r\n\r\n        <ion-item>\r\n          <label>Phone: </label>\r\n          <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-label color=\"danger\" *ngIf=\"usuario.controls.phone.errors?.required && (usuario.touched || usuario.dirty)\">* Required </ion-label> -->\r\n        <ion-label\r\n          color=\"danger\"\r\n          *ngIf=\"usuario.controls.phone.errors?.pattern && (usuario.touched || usuario.dirty)\"\r\n          >* correct number phone</ion-label\r\n        >\r\n\r\n        <ion-item>\r\n          <ion-label>Birth: </ion-label>\r\n          <ion-datetime display-format=\"DD.MM.YYYY\" formControlName=\"birth\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <div class=\"center-class\">\r\n\r\n            <ion-button  \r\n                        type=\"submit\" \r\n                        [disabled]=\"!usuario.valid\"\r\n                        expand=\"block\"\r\n                        shape=\"round\"\r\n                        size=\"large\"\r\n                        routerLink=\"/log-in\"\r\n              >Create Account</ion-button>\r\n        </div>\r\n      </form>\r\n      <ion-card-subtitle class=\"ion-text-center\"\r\n        >All fields Required</ion-card-subtitle\r\n      >\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map