"use strict";
(self["webpackChunkstrava"] = self["webpackChunkstrava"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user/user.component */ 6860);
/* harmony import */ var _utils_connexion_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/connexion.guard */ 3951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'home'
}, {
  path: 'home',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'user',
  component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent,
  canActivate: [_utils_connexion_guard__WEBPACK_IMPORTED_MODULE_2__.connexionGuard]
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc-jwks */ 9949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);





class AppComponent {
  constructor(oAuthService) {
    this.oAuthService = oAuthService;
    this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.env;
    this.authConfig = {
      issuer: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.issuer,
      redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirectUri,
      logoutUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logoutUrl,
      clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId,
      scope: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope,
      clearHashAfterLogin: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clearHashAfterLogin,
      strictDiscoveryDocumentValidation: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.strictDiscoveryDocumentValidation
    };
    this.configure();
  }
  configure() {
    this.oAuthService.configure(this.authConfig);
    this.oAuthService.tokenValidationHandler = new angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_1__.JwksValidationHandler();
    if (!this.oAuthService.getIdToken()) {
      this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(r => console.log(r));
    }
  }
  get isLoggedIn() {
    return !!this.oAuthService.getIdToken();
  }
  handleLoginClick() {
    if (!this.isLoggedIn) {
      this.oAuthService.initLoginFlow();
    } else {
      this.oAuthService.logOut();
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__.OAuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 7,
  vars: 2,
  consts: [[3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " MyStrava ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
        return ctx.handleLoginClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoggedIn ? "Logout" : "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.env, "\n");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user/user.component */ 6860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _utils_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/auth-interceptor.service */ 3559);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
    useClass: _utils_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptorService,
    multi: true
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__.OAuthModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__.OAuthModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 2,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6860:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user.service */ 2785);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




class UserComponent {
  constructor(userService, authService) {
    this.userService = userService;
    this.authService = authService;
  }
  ngOnInit() {
    console.log(this.authService.getIdentityClaims());
    console.log(this.authService.getIdToken());
    console.log(this.authService.getAccessToken());
  }
  getClaims() {
    return this.authService.getIdentityClaims();
  }
  getUser() {
    this.userService.getUser2().subscribe(user => {
      console.log(user);
    });
  }
}
UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__.OAuthService));
};
UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  decls: 7,
  vars: 3,
  consts: [[3, "click"]],
  template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "user works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_2_listener() {
        return ctx.getUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "GET USER");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx.getClaims()), "\n");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2785:
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.mainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseHref;
  }
  getUser2() {
    return this.httpClient.get(`${this.mainUrl}/api/user/me2`);
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3559:
/*!***************************************************!*\
  !*** ./src/app/utils/auth-interceptor.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);



class AuthInterceptorService {
  constructor(oauthService) {
    this.oauthService = oauthService;
  }
  intercept(req, next) {
    // Get the authorization token from your preferred source (e.g., local storage, session storage, etc.)
    const authToken = this.oauthService.getIdToken();
    // Si pas de token, on laisse passer la requête sans modification
    if (!authToken) {
      return next.handle(req);
    }
    // Clone the request and set the Authorization header
    const authReq = req.clone({
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
        'Access-Control-Allow-Origin': '*'
      })
    });
    // Pass the modified request to the next interceptor or the HttpHandler
    return next.handle(authReq);
  }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__.OAuthService));
};
AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac
});


/***/ }),

/***/ 3951:
/*!******************************************!*\
  !*** ./src/app/utils/connexion.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connexionGuard": () => (/* binding */ connexionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ 8807);


const connexionGuard = (route, state) => {
  const ouathService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__.OAuthService);
  if (!ouathService.hasValidAccessToken() || !ouathService.hasValidIdToken()) {
    ouathService.initLoginFlow();
  }
  return ouathService.hasValidAccessToken() && ouathService.hasValidIdToken();
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  env: 'dev',
  issuer: 'https://accounts.google.com',
  redirectUri: 'https://orangewall.web.app/',
  logoutUrl: 'https://orangewall.web.app/home',
  clientId: '620220236078-n3nnnfaoeop7221gh8e2cofte26578io.apps.googleusercontent.com',
  scope: 'openid profile email',
  clearHashAfterLogin: false,
  strictDiscoveryDocumentValidation: false,
  baseHref: 'https://orangewall.ey.r.appspot.com'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map