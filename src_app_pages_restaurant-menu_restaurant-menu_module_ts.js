(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_restaurant-menu_restaurant-menu_module_ts"],{

/***/ 1486:
/*!**************************************!*\
  !*** ./src/app/models/order-line.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderLine": () => (/* binding */ OrderLine)
/* harmony export */ });
class OrderLine {
    constructor(_idOrder, _idLine, _idProduct, _codeExtrasAndAllergy, _nameProduct, _extras, _amount, _price) {
        this.idOrder = _idOrder;
        this.idLine = _idLine;
        this.idProduct = _idProduct;
        this.nameProduct = _nameProduct;
        this.codeExtrasAndAllergy = _codeExtrasAndAllergy;
        this.extras = _extras;
        this.amount = _amount;
        this.price = _price;
    }
}


/***/ }),

/***/ 4260:
/*!*************************************************************************!*\
  !*** ./src/app/pages/restaurant-menu/restaurant-menu-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantMenuPageRoutingModule": () => (/* binding */ RestaurantMenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-menu.page */ 3497);




const routes = [
    {
        path: '',
        component: _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantMenuPage
    }
];
let RestaurantMenuPageRoutingModule = class RestaurantMenuPageRoutingModule {
};
RestaurantMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantMenuPageRoutingModule);



/***/ }),

/***/ 4336:
/*!*****************************************************************!*\
  !*** ./src/app/pages/restaurant-menu/restaurant-menu.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantMenuPageModule": () => (/* binding */ RestaurantMenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _restaurant_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-menu-routing.module */ 4260);
/* harmony import */ var _restaurant_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-menu.page */ 3497);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 9258);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/pipes.module */ 1041);









let RestaurantMenuPageModule = class RestaurantMenuPageModule {
};
RestaurantMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _restaurant_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestaurantMenuPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule
        ],
        declarations: [_restaurant_menu_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantMenuPage]
    })
], RestaurantMenuPageModule);



/***/ }),

/***/ 3497:
/*!***************************************************************!*\
  !*** ./src/app/pages/restaurant-menu/restaurant-menu.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantMenuPage": () => (/* binding */ RestaurantMenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_restaurant_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./restaurant-menu.page.html */ 6167);
/* harmony import */ var _restaurant_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-menu.page.scss */ 6207);
/* harmony import */ var _restaurant_menu_modal_restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../restaurant-menu-modal/restaurant-menu-modal.page */ 4396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ 5897);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _models_order_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/order-line */ 1486);



/* eslint-disable @typescript-eslint/no-inferrable-types */







let RestaurantMenuPage = class RestaurantMenuPage {
    constructor(menuController, modalCtrl, dataService, activatedRouted, router) {
        this.menuController = menuController;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.activatedRouted = activatedRouted;
        this.router = router;
        this.otiumOrder = 'otium-order';
        this.arrOrderLine = [];
        this.actualCart = new Array();
        this.idCategoryShow = null;
        this.categoryOnMenu = [];
        this.amountInput = 1;
        this.slideOptsCard = {
            slidesPerView: 1.1,
            spaceBetween: 10
        };
        this.slideOptsButton = {
            slidesPerView: 2.5,
            breakpoints: {
                // when window width is >= 375px
                375: {
                    slidesPerView: 3.5,
                    // spaceBetween: 10
                },
                // when window width is >= 410px
                410: {
                    slidesPerView: 3.7
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 6.5,
                }
            }
        };
    }
    ngOnInit() {
        this.restaurantMenuData = this.dataService.getRestaurantMenu();
        this.restaurantMenuCategory = this.dataService.getRestaurantMenuCategory();
        this.typeShow = this.activatedRouted.snapshot.paramMap.get('type');
        //Carga de observables anidada para que la carga espere la respuesta y no
        // intente cargar antes con el array vacío
        this.restaurantMenuData.subscribe((menuData) => {
            this.arrRestaurantMenuData = menuData;
            //Cargamos los datos recibidos en la respuesta del primer observable
            this.loadMenuData(this.typeShow);
            this.restaurantMenuCategory.subscribe((catagoryMenu) => {
                this.arrRestaurantMenuCategory = catagoryMenu;
                //Cargamos los datos recibidos en la respuesta del segundo observable
                this.loadCategoryOfMenu();
            });
        });
    }
    openMenu() {
        this.menuController.open('header');
    }
    mostrarModal(itemMenu) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const iRestaurantModalInfo = itemMenu;
            const modal = yield this.modalCtrl.create({
                component: _restaurant_menu_modal_restaurant_menu_modal_page__WEBPACK_IMPORTED_MODULE_2__.RestaurantMenuModalPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    modalInfo: iRestaurantModalInfo
                }
            });
            yield modal.present();
        });
    }
    btnFilterCategory(idCategory) {
        this.idCategoryShow = idCategory;
        console.log('CATEGORY:', idCategory);
        this.btnDeleteClassSelected();
        this.btnAddClassSelected(idCategory);
        this.loadMenuData(this.typeShow);
        this.loadMenuData(this.typeShow, idCategory);
    }
    btnDeleteClassSelected() {
        const btnCategory = document.querySelectorAll('.category-selected');
        btnCategory.forEach(element => {
            element.classList.remove('category-selected');
            element.setAttribute('fill', 'outline');
        });
    }
    btnAddClassSelected(idCategory) {
        if (idCategory === 0) {
            const btnCategory = document.querySelectorAll('.btnCategory0');
            btnCategory.forEach(element => {
                element.classList.add('category-selected');
                element.setAttribute('fill', 'solid');
            });
        }
        else {
            console.log('btnCategory' + idCategory);
            const element = document.getElementById('btnCategory' + idCategory);
            element.classList.add('category-selected');
            element.setAttribute('fill', 'solid');
        }
    }
    orderFood() {
        const type = 'food';
        this.routeAndLoad(type);
    }
    orderDrink() {
        const type = 'drink';
        this.routeAndLoad(type);
    }
    routeAndLoad(type) {
        this.router.navigate(['/restaurant-menu', type]);
        this.btnDeleteClassSelected();
        this.btnAddClassSelected(0);
        this.loadMenuData(this.typeShow);
    }
    //Crea el array de categorias a partir de los productos de la carta
    loadCategoryOfMenu() {
        console.log('ARRAY DATA: ->>>', this.arrRestaurantMenuData);
        console.log('ARRAY CATEGORY: ->>>', this.arrRestaurantMenuCategory);
        this.arrRestaurantMenuData.forEach(e => {
            this.categoryOnMenu.push(this.arrRestaurantMenuCategory.find((item) => item.idCategory === e.idCategory));
        });
        //Elimina duplicados del array
        this.categoryOnMenu = Array.from(new Set(this.categoryOnMenu));
        //Elimina los que no estamos viendo food o drink
        this.categoryOnMenu = this.categoryOnMenu.filter((e) => e.type === this.typeShow);
        console.log('CATEGORY ON MENU -> ', this.categoryOnMenu);
    }
    // loadMenuData(type: string, idCategory: number){
    loadMenuData(type, idCategory = 0) {
        return idCategory === 0
            ? this.arrRestaurantMenuDataShow = this.arrRestaurantMenuData.filter((e) => (e.type === type))
            : this.arrRestaurantMenuDataShow = this.arrRestaurantMenuData.filter((e) => (e.type === type) && (e.idCategory === idCategory));
    }
    addToCart(itemMenu) {
        this.getExtrasActive(itemMenu);
        //Borra datos del array actualCart para prepararlo para tomar los de localstorage
        this.arrOrderLine.length = 0;
        //TODO Añadir extras de la selección del toggle.
        const orderLine = new _models_order_line__WEBPACK_IMPORTED_MODULE_4__.OrderLine(1, this.arrOrderLine.length, itemMenu.idProduct, 'EXTRAS-AND-ALLERGY', itemMenu.name, null, this.amountInput, itemMenu.price);
        if (this.otiumOrderIsEmpty()) {
            //Añadimos el nuevo producto
            this.arrOrderLine.push(orderLine);
            //Guardamos el contenido del array en el localStorage
            localStorage.setItem(this.otiumOrder, JSON.stringify(this.arrOrderLine));
        }
        else {
            //Obtenemos el array desde el localStorage
            this.arrOrderLine = JSON.parse(localStorage.getItem(this.otiumOrder));
            //La línea de orden viene a 0 si hemos recargado el explorador. Actualizamos el número de línea en el producto
            orderLine.idLine = this.arrOrderLine.length;
            //Si el producto es igual aumentamos la cantidad y no añadimos una nueva línea
            //Si no es igual añadimos nueva línea para el nuevo producto
            if (!this.isSameProductJoinAmount(this.arrOrderLine, orderLine)) {
                this.arrOrderLine.push(orderLine);
            }
            //Borramos los datos de localStorage
            localStorage.removeItem(this.otiumOrder);
            //Salvamos los nuevos datos en localStorage
            localStorage.setItem(this.otiumOrder, JSON.stringify(this.arrOrderLine));
        }
        console.log('ARRAY ORDER LINE -> ', this.arrOrderLine);
    }
    getExtrasActive(itemMenu) {
        const extrasActive = [];
        const getAllExtras = document.querySelectorAll('.get-extra-' + itemMenu.idProduct);
        getAllExtras.forEach(element => {
            // if(element.ariaChecked){
            extrasActive.push(element.id);
            // }
        });
        console.log('ALL-EXTRAS-> ', getAllExtras);
        console.log('EXTRAS-ACTIVE->', extrasActive);
    }
    otiumOrderIsEmpty() {
        return localStorage.getItem(this.otiumOrder) === null;
    }
    isAlreadyInOrder(arrOrderLine, orderLine) {
        //Devuelve la posición del item añadido si está en la carta
        const numero = arrOrderLine.findIndex((element) => element.idProduct === orderLine.idProduct);
        return numero;
    }
    //TODO comparar tmb extras para verificar que sea el mismo producto
    isSameProductJoinAmount(arrOrderLine, orderLine) {
        const numberOrderLine = this.isAlreadyInOrder(arrOrderLine, orderLine);
        if (numberOrderLine !== -1) {
            arrOrderLine[numberOrderLine].amount += orderLine.amount;
            return true;
        }
        return false;
    }
};
RestaurantMenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
RestaurantMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-restaurant-menu',
        template: _raw_loader_restaurant_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_restaurant_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RestaurantMenuPage);



/***/ }),

/***/ 3630:
/*!**************************************!*\
  !*** ./src/app/pipes/filtro.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPipe": () => (/* binding */ FiltroPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


let FiltroPipe = class FiltroPipe {
    transform(arreglo, typeShow = '', columna = 'type') {
        //El arreglo se consulta 2 veces, la primera vacío y la segunda con datos
        // por eso contemplamos la opción de que nos venga vacío y no de fallo
        if (!arreglo) {
            return arreglo;
        }
        return arreglo.filter(item => item[columna].toLocaleLowerCase().includes(typeShow));
    }
};
FiltroPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtro'
    })
], FiltroPipe);



/***/ }),

/***/ 1041:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro.pipe */ 3630);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 5897:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1887);



let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getRestaurantMenu() {
        return this.http.get('/assets/data/restaurant-menu.json');
    }
    getRestaurantMenuCategory() {
        return this.http.get('/assets/data/restaurant-menu-categories.json');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 6207:
/*!*****************************************************************!*\
  !*** ./src/app/pages/restaurant-menu/restaurant-menu.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  padding: 1% 2.5% 2%;\n  height: 100%;\n}\n\n.button-slides {\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n.item-slides {\n  height: 77% !important;\n  margin: 0% 0% 4% 4%;\n}\n\n.slide-content {\n  height: 100%;\n  border: 2px solid red;\n  border-radius: 25px 0px 0px 0px !important;\n}\n\n.img-logo-restaurant {\n  height: 50px;\n  margin: 5px 0px;\n}\n\n.ion-button {\n  width: 100px !important;\n  height: 60px !important;\n}\n\n.ion-button-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ion-button-content img {\n  height: 40px;\n}\n\n.item-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8% 8%;\n}\n\n.item-card__top-up {\n  position: relative;\n}\n\n.icon-favourite {\n  width: 1.25rem;\n  position: absolute;\n  top: 1%;\n  right: 1%;\n}\n\n.icon-zoom {\n  position: absolute;\n  bottom: 0.3125rem;\n  left: 0.3125rem;\n  background-color: white;\n  border-radius: 0.9375rem;\n}\n\n.text-product {\n  text-align: left;\n}\n\n.text-description {\n  margin-top: 2%;\n  margin-left: 4%;\n}\n\n.img-card {\n  display: flex;\n  justify-content: flex-start;\n  max-height: 126px;\n  max-width: 80%;\n  border-radius: 25px 0px 25px 0px;\n}\n\n.center-extras {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\np {\n  margin: 0px 0px;\n}\n\nh6 {\n  margin: 5px 0px 0px;\n}\n\nh3 {\n  margin: 0px 0px;\n}\n\n.ion-input {\n  padding-left: 20px;\n  border-radius: 15px;\n  border: 2px solid var(--ion-color-login-input-border);\n  margin-top: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.amount-and-add {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.input-amount {\n  --padding-start: 5px;\n  border: 2px solid var(--ion-color-login-input-border);\n  width: 35px;\n  height: 27.3px;\n}\n\n.ion-toggle {\n  height: 25px;\n  padding: 1% 0%;\n}\n\n.small-font {\n  font-size: small;\n}\n\n.smaller-font {\n  font-size: smaller;\n}\n\n.icon-size {\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.item-button-add {\n  width: 130px;\n}\n\n.content-down {\n  position: absolute;\n  top: 92%;\n  left: 1.25rem;\n  width: 18.75rem;\n}\n\n.content-down-flex {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.cart {\n  position: relative;\n  height: 3.125rem;\n  background-color: red;\n}\n\n.cart__text {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 30px;\n  position: absolute;\n  top: -0.625rem;\n  left: 1.875rem;\n  text-align: right !important;\n  color: white;\n  background-color: rebeccapurple;\n  border-radius: 15px;\n  padding: 10px;\n}\n\n.cart__cart {\n  position: absolute;\n  top: 4px;\n  left: 1%;\n}\n\n.display-none {\n  display: none;\n}\n\n.icon-cart {\n  width: 40px !important;\n  height: 40px !important;\n}\n\n.ion-fab__button {\n  width: 12.5rem;\n  height: 3.125rem;\n  --border-radius: 2.1875rem;\n}\n\n.ion-fab__col-ion-img {\n  padding: 0rem;\n}\n\n.ion-fab__col-label {\n  margin: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQURKOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0FBRkoiLCJmaWxlIjoicmVzdGF1cmFudC1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMSUgMi41JSAyJTtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbn1cclxuXHJcbi5idXR0b24tc2xpZGVzIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5pdGVtLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDc3JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwJSAwJSA0JSA0JTtcclxufVxyXG5cclxuLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWxvZ28tcmVzdGF1cmFudCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuXHJcbi8vQW5jaG8gZmlqbyBwYXJhIHF1ZSBlbCBzbGlkZSByZXBhcnRhIHNlcGFyYWNpw7NuIGEgcGFydGVzIGlndWFsZXNcclxuLmlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1idXR0b24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uLWNvbnRlbnQgaW1nIHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLml0ZW0tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDglIDglO1xyXG59XHJcblxyXG4uaXRlbS1jYXJkX190b3AtdXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uLWZhdm91cml0ZSB7XHJcbiAgICB3aWR0aDogMS4yNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMSU7XHJcbiAgICByaWdodDogMSU7XHJcbn1cclxuXHJcbi5pY29uLXpvb20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAuMzEyNXJlbTtcclxuICAgIGxlZnQ6IC4zMTI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOTM3NXJlbTtcclxufVxyXG5cclxuLnRleHQtcHJvZHVjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGV4dC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG5cclxuXHJcbi5pbWctY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWF4LWhlaWdodDogMTI2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMHB4IDI1cHggMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWV4dHJhcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDVweCAwcHggMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbn1cclxuXHJcbi5pb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sb2dpbi1pbnB1dC1ib3JkZXIpO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYW1vdW50LWFuZC1hZGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtYW1vdW50e1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbG9naW4taW5wdXQtYm9yZGVyKTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAyNy4zcHg7XHJcbn1cclxuXHJcbi5pb24tdG9nZ2xlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmc6IDElIDAlO1xyXG59XHJcblxyXG4uc21hbGwtZm9udCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uc21hbGxlci1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmljb24tc2l6ZSB7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWJ1dHRvbi1hZGQge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1kb3duIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTIlO1xyXG4gICAgbGVmdDogMS4yNXJlbTtcclxuICAgIHdpZHRoOiAxOC43NXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtZG93bi1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xyXG59XHJcblxyXG4uY2FydCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY2FydF9fdGV4dCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0wLjYyNXJlbTtcclxuICAgIGxlZnQ6IDEuODc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcnRfX2NhcnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAxJTtcclxufVxyXG5cclxuLy9TZSBhw7FhZGUgYWwgdGV4dC1jYXJ0LWFtb3VudCBzaSBubyBoYXkgcHJvZHVjdG9zXHJcbi5kaXNwbGF5LW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmljb24tY2FydCB7XHJcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tZmFiX19idXR0b257XHJcbiAgICB3aWR0aDogMTIuNXJlbTsgXHJcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyLjE4NzVyZW07XHJcbn1cclxuXHJcbi5pb24tZmFiX19jb2wtaW9uLWltZyB7XHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG59XHJcblxyXG4uaW9uLWZhYl9fY29sLWxhYmVsIHtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 6167:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restaurant-menu/restaurant-menu.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header imgHeader=\"assets/logos-empresas/starbucks-coffee.png\"></app-header>\r\n\r\n<ion-content>\r\n  <!-- items-view -->\r\n  <div class=\"container\">\r\n\r\n    <ion-slides [options]=\"slideOptsButton\" class=\"button-slides\">\r\n      <ion-slide> <ion-button class=\"btnCategory0 ion-button category-selected\" color=\"primary\"  expand=\"block\" fill=\"solid\" (click)=\"btnFilterCategory( 0 )\">All</ion-button> </ion-slide>\r\n      <ion-slide *ngFor=\"let item of categoryOnMenu\"> \r\n        <ion-button id=\"btnCategory{{ item.idCategory }}\" class=\"ion-button\" color=\"primary\"  expand=\"block\" fill=\"outline\" (click)=\"btnFilterCategory( item.idCategory)\">\r\n          \r\n          <div class=\"ion-button-content\">\r\n            <img  *ngIf=\"item.icon\" src=\"{{ item.icon }} \" alt=\"{{ item.btnName }} \">\r\n            {{ item.btnName }}\r\n          </div>\r\n\r\n        </ion-button> \r\n      </ion-slide>\r\n    </ion-slides>\r\n    \r\n    <ion-slides class=\"item-slides\" [options]=\"slideOptsCard\">\r\n      <ion-slide *ngFor=\"let itemMenu of  arrRestaurantMenuDataShow\">\r\n        <!-- slide-content -->\r\n        <div class=\"slide-content\">\r\n          <!-- card -->\r\n          <div class=\"item-card\">\r\n            <!-- top -->\r\n            <div>\r\n              <!-- top-up -->\r\n              <div class=\"item-card__top-up\">\r\n                  <img  class=\"img-card\"  (click)=\"mostrarModal( itemMenu )\" src=\"{{ itemMenu.img }}\" alt=\"{{ itemMenu.name }}\">\r\n                  <ion-icon class=\"icon-zoom\" name=\"search-circle-outline\" (click)=\"mostrarModal( itemMenu )\"></ion-icon>\r\n                  <ion-img class=\"icon-favourite\" src=\"/assets/icon/heart-pink.png\"></ion-img>\r\n              </div>\r\n              <!-- END top-up -->\r\n\r\n              <!-- top-down -->\r\n              <div class=\"text-product\">\r\n                <h6><strong>{{ itemMenu.name }}</strong></h6>\r\n                <div class=\"text-description\">\r\n                  <p *ngFor=\"let item of itemMenu.description\">{{ item.line }}</p>\r\n                </div>\r\n              </div>\r\n              <!-- END top-down -->\r\n            </div>\r\n            <!-- END top -->\r\n\r\n            <!-- extras -->\r\n            <div>\r\n              <div class=\"center-extras\" *ngFor=\"let item of itemMenu.extras\">\r\n                <ion-label> {{ item.name }} + {{ item.price }}€ </ion-label>\r\n                <ion-toggle class=\"ion-toggle get-extra-{{ itemMenu.idProduct }}\" data-id='{{ item.idExtra }}'></ion-toggle>\r\n              </div>\r\n            </div>\r\n            <!-- END extras -->\r\n\r\n            <!-- center allergy 1 -->\r\n            <div>\r\n              <ion-label class=\"smaller-font\">\r\n                Let us know any allergy or preference\r\n              </ion-label>\r\n              <input class=\"ion-input\" type=\"text\" placeholder=\"Input field\">\r\n            </div>\r\n            <!-- END center allergy 1 -->\r\n\r\n            <!-- bottom -->\r\n            <div class=\"amount-and-add\">\r\n              <h3>{{ itemMenu.price }}€</h3>\r\n              <input [(ngModel)]='amountInput' id=\"input-amount\" class=\"input-amount\" type=\"number\">\r\n              <ion-button id=\"{{itemMenu.name}}\" expand=\"block\" shape=\"round\" class=\"item-button-add medium-letter\" (click)=\"addToCart(itemMenu)\">ADD TO CART</ion-button>\r\n            </div>\r\n            <!-- END bottom -->\r\n          </div>\r\n          <!-- END card -->\r\n        </div>\r\n        <!-- END slide-content -->\r\n      </ion-slide>\r\n    </ion-slides>\r\n    \r\n    <!-- content-down -->\r\n    <div class=\"content-down\">\r\n      <div class=\"content-down-flex\">\r\n        <div class=\"cart\">\r\n          <p class=\"cart__text small-font\"><strong>1</strong></p>\r\n          <ion-icon class=\"cart__cart icon-cart\" name=\"cart-outline\">\r\n          </ion-icon>\r\n        </div>\r\n        <h3>27€</h3>\r\n      </div>\r\n    </div>\r\n    <!-- END content-down -->\r\n    \r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    \r\n      <ion-fab-list side=\"start\">\r\n\r\n        <ion-button class=\"ion-fab__button\" routerLink=\"/pedido\">\r\n          <ion-grid fixed>\r\n            <ion-row>\r\n              <ion-col size=\"3\" class=\"ion-fab__col-ion-img\">\r\n                <ion-img src=\"/assets/icon/pay-eurocoin.png\"></ion-img>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-fab__col-label\">\r\n                <ion-label>PAGAR</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"3\"></ion-col>\r\n            </ion-row>\r\n          </ion-grid>  \r\n        </ion-button>\r\n\r\n      </ion-fab-list>\r\n    \r\n      <ion-fab-list side=\"top\">        \r\n          <ion-fab-button *ngIf=\"typeShow === 'drink'\" color=\"medium\" (click)=\"orderFood()\"><ion-img class =\"icon-size\" src=\"/assets/icon/food/forkandknife.png\"></ion-img></ion-fab-button>\r\n          <ion-fab-button *ngIf=\"typeShow === 'food'\"color=\"warning\" (click)=\"orderDrink()\"><ion-img class =\"icon-size\" src=\"/assets/icon/drink/bottle-water.png\"></ion-img></ion-fab-button>\r\n      </ion-fab-list>\r\n    </ion-fab>\r\n  </div>\r\n  <!-- END content -->\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_restaurant-menu_restaurant-menu_module_ts.js.map