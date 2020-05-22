(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-base-upcoming-upcoming-module"],{

/***/ "./src/pages/base/upcoming/components/upcoming/upcoming.component.html":
/*!*****************************************************************************!*\
  !*** ./src/pages/base/upcoming/components/upcoming/upcoming.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <app-spinner [isLoading]=\"loading\">\r\n    <ng-container *ngIf=\"raffles && raffles.length > 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-8\">\r\n          <app-search placeholder=\"Search Upcoming Competitions\" (event)=\"doSearch($event)\" angulartics2On=\"click\" angularticsAction=\"RaffleSearch\" angularticsLabel=\"UpcomingSearchBox\" [angularticsCategory]=\"'UpcomingPage'\"></app-search>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4\">\r\n          <!-- <app-filter [property]=\"raffles[0]\" (event)=\"sort($event)\"></app-filter> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-12 col-md-4 col-lg-3\" *ngFor=\"let item of raffles\">\r\n          <app-product-card [raffle]=\"item\"></app-product-card>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"raffles && raffles.length < 1\">\r\n      <div class=\"jumbotron text-center\">\r\n        <h1 class=\"display-4\">Não há sorteios futuros</h1>\r\n        <p class=\"lead\">Ainda não há sorteios - verifique novamente em breve se há novas competições</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/base/upcoming/components/upcoming/upcoming.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/base/upcoming/components/upcoming/upcoming.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS91cGNvbWluZy9jb21wb25lbnRzL3VwY29taW5nL3VwY29taW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/base/upcoming/components/upcoming/upcoming.component.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/base/upcoming/components/upcoming/upcoming.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingComponent", function() { return UpcomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");





var UpcomingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpcomingComponent, _super);
    function UpcomingComponent(injector, _rt, orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this.orderBy = orderBy;
        _this.raffles = [];
        _this.rafflesBackup = [];
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    UpcomingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raffleRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_2__["RaffleDraw"]);
        this.raffleRef.on('change', {
            where: { isDeleted: false, startDate: { gt: new Date() } }, include: 'product'
        }).subscribe(function (data) {
            return _this.rafflesBackup = _this.raffles = data;
        });
    };
    UpcomingComponent.prototype.doSearch = function (val) {
        if (val && val.trim() !== '') {
            this.raffles = this.rafflesBackup.filter(function (raffle) { return raffle.name.toLowerCase().indexOf(val.toLowerCase()) !== -1; });
        }
        else {
            this.raffles = this.rafflesBackup.slice();
        }
    };
    UpcomingComponent.prototype.sort = function (prop, by) {
        // sort by asc and desc and by property
        this.raffles = this.orderBy.transform(this.raffles, by + prop);
    };
    UpcomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-upcoming',
            template: __webpack_require__(/*! ./upcoming.component.html */ "./src/pages/base/upcoming/components/upcoming/upcoming.component.html"),
            styles: [__webpack_require__(/*! ./upcoming.component.scss */ "./src/pages/base/upcoming/components/upcoming/upcoming.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_2__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], UpcomingComponent);
    return UpcomingComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/base/upcoming/upcoming.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/base/upcoming/upcoming.module.ts ***!
  \****************************************************/
/*! exports provided: UpcomingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingModule", function() { return UpcomingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/upcoming/upcoming.component */ "./src/pages/base/upcoming/components/upcoming/upcoming.component.ts");






var UpcomingModule = /** @class */ (function () {
    function UpcomingModule() {
    }
    UpcomingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_5__["UpcomingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["WinitCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_5__["UpcomingComponent"]
                    }
                ])
            ]
        })
    ], UpcomingModule);
    return UpcomingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-base-upcoming-upcoming-module.js.map