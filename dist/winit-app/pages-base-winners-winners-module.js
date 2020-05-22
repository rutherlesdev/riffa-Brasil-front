(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-base-winners-winners-module"],{

/***/ "./src/pages/base/winners/components/winners/winners.component.html":
/*!**************************************************************************!*\
  !*** ./src/pages/base/winners/components/winners/winners.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <app-spinner [isLoading]=\"loading\">\r\n    <ng-container *ngIf=\"raffleEntries && raffleEntries.length > 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-8\">\r\n          <app-search placeholder=\"Search Winners\" (event)=\"doSearch($event)\" angulartics2On=\"click\" angularticsAction=\"WinnersSearch\" angularticsLabel=\"WinnersSearchBox\" [angularticsCategory]=\"'WinnersPage'\"></app-search>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4\">\r\n          <!-- <app-filter [property]=\"raffleEntries[0]\" (event)=\"sort($event)\"></app-filter> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-12 col-md-4 col-lg-3\" *ngFor=\"let item of raffleEntries\">\r\n          <app-winner-card [winner]=\"item\"></app-winner-card>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"raffleEntries && raffleEntries.length < 1\">\r\n      <div class=\"jumbotron text-center\">\r\n        <h1 class=\"display-4\">Ainda não há vencedores</h1>\r\n        <p class=\"lead\">Verifique novamente em breve e você poderá ver seu rosto - você venceu</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/base/winners/components/winners/winners.component.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/base/winners/components/winners/winners.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS93aW5uZXJzL2NvbXBvbmVudHMvd2lubmVycy93aW5uZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/base/winners/components/winners/winners.component.ts":
/*!************************************************************************!*\
  !*** ./src/pages/base/winners/components/winners/winners.component.ts ***!
  \************************************************************************/
/*! exports provided: WinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersComponent", function() { return WinnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _common_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/services/common/common.service */ "./src/common/services/common/common.service.ts");






var WinnersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WinnersComponent, _super);
    function WinnersComponent(injector, _rt, commonService, orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this.commonService = commonService;
        _this.orderBy = orderBy;
        _this.raffleEntries = [];
        _this.raffleEntriesBackup = [];
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    WinnersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raffleEntryRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_4__["RaffleEntry"]);
        this.raffleEntryRef
            .on('change', {
            where: { isWinningEntry: true, isDeleted: false },
            include: [{ account: 'contact' }, { raffleDraw: 'product' }]
        })
            .subscribe(function (data) {
            return (_this.raffleEntriesBackup = _this.raffleEntries = data);
        });
        this.commonService.useWinnersDummyData.subscribe(function (res) {
            if (res) {
                _this.commonService.getWinners().subscribe(function (items) {
                    _this.raffleEntriesBackup = _this.raffleEntries = items;
                });
            }
        });
    };
    WinnersComponent.prototype.doSearch = function (val) {
        if (val && val.trim() !== '') {
            this.raffleEntries = this.raffleEntriesBackup.filter(function (raffle) { return raffle.name.toLowerCase().indexOf(val.toLowerCase()) !== -1; });
        }
        else {
            this.raffleEntries = this.raffleEntriesBackup.slice();
        }
    };
    WinnersComponent.prototype.sort = function (prop, by) {
        // sort by asc and desc and by property
        this.raffleEntries = this.orderBy.transform(this.raffleEntries, by + prop);
    };
    WinnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-winners',
            template: __webpack_require__(/*! ./winners.component.html */ "./src/pages/base/winners/components/winners/winners.component.html"),
            styles: [__webpack_require__(/*! ./winners.component.scss */ "./src/pages/base/winners/components/winners/winners.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_4__["RealTime"],
            _common_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], WinnersComponent);
    return WinnersComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/winners/winners.module.ts":
/*!**************************************************!*\
  !*** ./src/pages/base/winners/winners.module.ts ***!
  \**************************************************/
/*! exports provided: WinnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersModule", function() { return WinnersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-moment */ "./node_modules/angular2-moment/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _components_winners_winners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/winners/winners.component */ "./src/pages/base/winners/components/winners/winners.component.ts");











var WinnersModule = /** @class */ (function () {
    function WinnersModule() {
    }
    WinnersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_winners_winners_component__WEBPACK_IMPORTED_MODULE_10__["WinnersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_6__["WinitCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldModule"],
                angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_winners_winners_component__WEBPACK_IMPORTED_MODULE_10__["WinnersComponent"]
                    }
                ])
            ]
        })
    ], WinnersModule);
    return WinnersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-base-winners-winners-module.js.map