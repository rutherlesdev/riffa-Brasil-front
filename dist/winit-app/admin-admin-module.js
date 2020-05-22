(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/admin/components/admin/admin.component.ts");




var children = [
    {
        data: { title: 'Home' },
        path: '',
        loadChildren: './../../pages/admin/admin-home/admin-home.module#AdminHomeModule'
    },
    {
        data: { title: 'Products', nav: true },
        path: 'products',
        loadChildren: './../../pages/admin/products/products.module#ProductsModule'
    },
    {
        data: { title: 'Winners', nav: true },
        path: 'raffles',
        loadChildren: './../../pages/admin/raffles/raffles.module#RafflesModule'
    },
    {
        data: { title: 'Content', nav: true },
        path: 'content',
        loadChildren: './../../pages/admin/content/content.module#ContentModule'
    }
    // {
    //   data: { title: 'Profile' },
    //   path: 'profile',
    //   loadChildren: './../../pages/profile/profile.module#ProfileModule'
    // }
];
var routes = [
    {
        children: children,
        path: '',
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _components_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-navbar/admin-navbar.component */ "./src/app/admin/components/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/admin/components/admin/admin.component.ts");









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _components_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_7__["AdminNavbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_3__["WinitCommonModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"].forRoot(),
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-navbar/admin-navbar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-navbar/admin-navbar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"routes.admin\">\r\n    <img src=\"/assets/images/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top mr-2\" alt=\"logo\">\r\n    Admin\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav ml-auto mr-5\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"routes.home\">\r\n          <i class=\"fa fa-home\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n        *ngFor=\"let nav of navItems\">\r\n        <a class=\"nav-link\" [routerLink]=\"nav.url\">{{nav.data.title}}</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"loggedIn && currentUser.contact\" class=\"form-inline\" ngbDropdown>\r\n      <div class=\"profile\" [imageLoader]=\"currentUser.contact.picture\" ngbDropdownToggle></div>\r\n      <div ngbDropdownMenu>\r\n        <button ngbDropdownItem (click)=\"openProfile()\">Profile</button>\r\n        <button ngbDropdownItem (click)=\"logout()\">Logout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/admin/components/admin-navbar/admin-navbar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-navbar/admin-navbar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar-nav {\n  align-items: center; }\n  :host .navbar-nav .nav-link {\n    font-size: 20px;\n    font-weight: 200; }\n  :host .profile {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n  :host .profile.dropdown-toggle::after {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1uYXZiYXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxyaWZmYS1CcmFzaWwtZnJvbnQvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxhZG1pbi1uYXZiYXJcXGFkbWluLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQixFQUFBO0VBRnZCO0lBS00sZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBTnRCO0VBV0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQWJ0QjtJQWdCTSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2FkbWluLW5hdmJhci9hZG1pbi1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAmLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/admin-navbar/admin-navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-navbar/admin-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/sdk */ "./src/common/sdk/index.ts");




var AdminNavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdminNavbarComponent, _super);
    function AdminNavbarComponent(injector, _accountApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._accountApi = _accountApi;
        _this.navItems = [];
        return _this;
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
        this._getNavItems();
    };
    AdminNavbarComponent.prototype.openProfile = function () {
        this.gotoPage(this.routes.profile);
    };
    AdminNavbarComponent.prototype.logout = function () {
        var _this = this;
        this._accountApi.logout()
            .subscribe(function () {
            _this.loopbackAuth.clear();
            _this.gotoPage(_this.routes.home);
        });
    };
    AdminNavbarComponent.prototype._getNavItems = function () {
        this.navItems = [
            {
                url: this.routes.admin,
                data: { title: 'Home' }
            },
            {
                url: this.routes.adminProducts,
                data: { title: 'Products' }
            },
            {
                url: this.routes.adminRaffles,
                data: { title: 'Raffles' }
            },
            {
                url: this.routes.adminContent,
                data: { title: 'Content' }
            }
        ];
    };
    AdminNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/admin/components/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.scss */ "./src/app/admin/components/admin-navbar/admin-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["AccountApi"]])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/app/admin/components/admin/admin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/admin/admin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-navbar></app-admin-navbar>\r\n<main role=\"main\" #adminMain>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/admin/components/admin/admin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/admin/admin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  :host .footer {\n    display: flex; }\n  :host main {\n    overflow: auto;\n    overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHJpZmZhLUJyYXNpbC1mcm9udC9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQTtFQUpkO0lBT0ksYUFBYSxFQUFBO0VBUGpCO0lBV0ksY0FBYztJQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBtYWluIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");





var AdminComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdminComponent, _super);
    function AdminComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.main.nativeElement.scrollTop = 0;
        });
        return _this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('adminMain'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminComponent.prototype, "main", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/components/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AdminComponent);
    return AdminComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map