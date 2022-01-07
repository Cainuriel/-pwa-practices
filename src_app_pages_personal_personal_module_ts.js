(self["webpackChunkFB_App"] = self["webpackChunkFB_App"] || []).push([["src_app_pages_personal_personal_module_ts"],{

/***/ 9237:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 6856:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8107);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 9237);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9716)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8107:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

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
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 6856);





//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

//declare var window: any;
let PersonalPage = class PersonalPage {
    constructor(userservice) {
        this.userservice = userservice;
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
    // camara() {
    //   console.log('entro en funcion de camara');
    //   const options: CameraOptions = {
    //     quality: 50,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     correctOrientation: true,
    //     sourceType: this.camera.PictureSourceType.CAMERA
    //   };
    //   this.camera.getPicture(options).then( ( imageData ) => {
    //   //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    //   const img = window.Ionic.WebView.convertFileSrc(imageData);
    //     console.log('imagen de la camara',img);
    //    this.tempImg = img;
    //    }, (err) => {
    //     // Handle error
    //    });
    // }
    camara() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
                saveToGallery: true
                // source: CameraSource.Photos
            });
            if (image) {
                this.saveImage(image);
            }
        });
    }
    saveImage(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('foto ', photo);
            this.tempImg = photo.webPath;
        });
    }
};
PersonalPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
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