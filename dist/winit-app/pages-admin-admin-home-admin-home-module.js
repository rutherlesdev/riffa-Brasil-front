(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-home-admin-home-module"],{

/***/ "./src/pages/admin/admin-home/admin-home.module.ts":
/*!*********************************************************!*\
  !*** ./src/pages/admin/admin-home/admin-home.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeModule", function() { return AdminHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _modules_table_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/table/table.module */ "./src/modules/table/table.module.ts");
/* harmony import */ var _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-home/admin-home.component */ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.ts");
/* harmony import */ var _components_completed_raffles_completed_raffles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/completed-raffles/completed-raffles.component */ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.ts");
/* harmony import */ var _components_incomplete_raffles_incomplete_raffles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/incomplete-raffles/incomplete-raffles.component */ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.ts");
/* harmony import */ var _components_manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manage-raffle/manage-raffle.component */ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.ts");














var AdminHomeModule = /** @class */ (function () {
    function AdminHomeModule() {
    }
    AdminHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__["AdminHomeComponent"], _components_completed_raffles_completed_raffles_component__WEBPACK_IMPORTED_MODULE_11__["CompletedRafflesComponent"], _components_incomplete_raffles_incomplete_raffles_component__WEBPACK_IMPORTED_MODULE_12__["IncompleteRafflesComponent"], _components_manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_13__["ManageRaffleComponent"]],
            entryComponents: [_components_manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_13__["ManageRaffleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_6__["WinitCommonModule"],
                _modules_table_table_module__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_8__["FormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_7__["DialogModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__["AdminHomeComponent"]
                    }
                ])
            ]
        })
    ], AdminHomeModule);
    return AdminHomeModule;
}());



/***/ }),

/***/ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.html":
/*!************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/admin-home/admin-home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-white my-3\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"In complete Raffles\">\r\n      <ng-template ngbTabContent>\r\n        <app-incomplete-raffles></app-incomplete-raffles>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Completed Raffles\">\r\n      <ng-template ngbTabContent>\r\n        <app-completed-raffles></app-completed-raffles>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/admin-home/admin-home.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vYWRtaW4taG9tZS9jb21wb25lbnRzL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/admin-home/admin-home.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.scss */ "./src/pages/admin/admin-home/components/admin-home/admin-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n  <ng-container *ngIf=\"raffles && raffles.length > 0\">\r\n    <app-table [config]=\"{showSelect: false}\" [data]=\"raffles\" [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n    </app-table>\r\n    <ngb-pagination maxSize=\"5\" [collectionSize]=\"rafflesBK.length\" (pageChange)=\"onPageChange($event)\"\r\n      aria-label=\"Default pagination\">\r\n    </ngb-pagination>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"raffles && raffles.length === 0\">\r\n    <div class=\"jumbotron\">\r\n      <h4>Empty</h4>\r\n      <p class=\"lead text-dark\">No raffles to display</p>\r\n    </div>\r\n  </ng-container>\r\n\r\n</app-spinner>\r\n"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vYWRtaW4taG9tZS9jb21wb25lbnRzL2NvbXBsZXRlZC1yYWZmbGVzL2NvbXBsZXRlZC1yYWZmbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CompletedRafflesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedRafflesComponent", function() { return CompletedRafflesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manage-raffle/manage-raffle.component */ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");






var CompletedRafflesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompletedRafflesComponent, _super);
    function CompletedRafflesComponent(injector, _rt, _orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._orderBy = _orderBy;
        _this.raffles = [];
        _this.rafflesBK = [];
        _this.tableActions = [
            {
                color: 'text-info',
                icon: 'pencil-square-o',
                text: 'Edit',
                event: function (data) { _this.dialog.open(_manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_4__["ManageRaffleComponent"], { data: data }); }
            }
        ];
        _this.tableHeaders = [
            {
                text: 'product.images[0]',
                formatted_text: 'Image',
                type: 'image',
            },
            {
                text: 'name',
                formatted_text: 'Name',
                type: 'text',
            },
            {
                text: 'price',
                formatted_text: 'Price',
                type: 'currency',
            },
            {
                text: 'startDate',
                formatted_text: 'Start Date',
                type: 'date',
            },
            {
                text: 'endDate',
                formatted_text: 'End Date',
                type: 'date',
            },
        ];
        _this.pageSize = 10;
        _this.currentPage = 1;
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    CompletedRafflesComponent.prototype.ngOnInit = function () {
        this.raffleRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleDraw"]);
        this._getraffles();
    };
    CompletedRafflesComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageSize;
        this.raffles = this.rafflesBK.slice(start, start + this.pageSize);
    };
    CompletedRafflesComponent.prototype._getraffles = function () {
        var _this = this;
        this.loading = true;
        this.raffleRef.on('change', {
            where: { isDeleted: false, isCompleted: true },
            include: [
                {
                    relation: 'product', scope: { where: { isDeleted: false } }
                },
                {
                    relation: 'raffleEntries', scope: { where: { isDeleted: false }, include: 'account' }
                },
                {
                    relation: 'raffleWinners', scope: { where: { isDeleted: false } }
                }
            ]
        }).subscribe(function (data) {
            _this.raffles = _this.rafflesBK = _this._orderBy.transform(data, '-updatedAt');
            _this.onPageChange(_this.currentPage);
            _this.loading = false;
        });
    };
    CompletedRafflesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByPipe"]],
            selector: 'app-completed-raffles',
            template: __webpack_require__(/*! ./completed-raffles.component.html */ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.html"),
            styles: [__webpack_require__(/*! ./completed-raffles.component.scss */ "./src/pages/admin/admin-home/components/completed-raffles/completed-raffles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByPipe"]])
    ], CompletedRafflesComponent);
    return CompletedRafflesComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n  <ng-container *ngIf=\"raffles && raffles.length > 0\">\r\n    <app-table [config]=\"{showSelect: false}\" [data]=\"raffles\" [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n    </app-table>\r\n    <ngb-pagination maxSize=\"5\" [collectionSize]=\"rafflesBK.length\" (pageChange)=\"onPageChange($event)\"\r\n      aria-label=\"Default pagination\">\r\n    </ngb-pagination>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"raffles && raffles.length === 0\">\r\n    <div class=\"jumbotron\">\r\n      <h4>Empty</h4>\r\n      <p class=\"lead text-dark\">No raffles to display</p>\r\n    </div>\r\n  </ng-container>\r\n\r\n</app-spinner>\r\n"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vYWRtaW4taG9tZS9jb21wb25lbnRzL2luY29tcGxldGUtcmFmZmxlcy9pbmNvbXBsZXRlLXJhZmZsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncompleteRafflesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleteRafflesComponent", function() { return IncompleteRafflesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-raffle/manage-raffle.component */ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.ts");






var IncompleteRafflesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IncompleteRafflesComponent, _super);
    function IncompleteRafflesComponent(injector, _rt, _orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._orderBy = _orderBy;
        _this.raffles = [];
        _this.rafflesBK = [];
        _this.tableActions = [
            {
                color: 'text-info',
                icon: 'pencil-square-o',
                text: 'Edit',
                event: function (data) { _this.dialog.open(_manage_raffle_manage_raffle_component__WEBPACK_IMPORTED_MODULE_5__["ManageRaffleComponent"], { data: data }); }
            }
        ];
        _this.tableHeaders = [
            {
                text: 'product.images[0]',
                formatted_text: 'Image',
                type: 'image',
            },
            {
                text: 'name',
                formatted_text: 'Name',
                type: 'text',
            },
            {
                text: 'price',
                formatted_text: 'Price',
                type: 'currency',
            },
            {
                text: 'startDate',
                formatted_text: 'Start Date',
                type: 'date',
            },
            {
                text: 'endDate',
                formatted_text: 'End Date',
                type: 'date',
            },
        ];
        _this.pageSize = 10;
        _this.currentPage = 1;
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    IncompleteRafflesComponent.prototype.ngOnInit = function () {
        this.raffleRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_4__["RaffleDraw"]);
        this._getraffles();
    };
    IncompleteRafflesComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageSize;
        this.raffles = this.rafflesBK.slice(start, start + this.pageSize);
    };
    IncompleteRafflesComponent.prototype._getraffles = function () {
        var _this = this;
        this.loading = true;
        this.raffleRef.on('change', {
            where: { isDeleted: false, isCompleted: false, endDate: { lt: new Date() } },
            include: {
                relation: 'product', scope: { where: { isDeleted: false } }
            }
        }).subscribe(function (data) {
            _this.raffles = _this.rafflesBK = _this._orderBy.transform(data, '-updatedAt');
            _this.onPageChange(_this.currentPage);
            _this.loading = false;
        });
    };
    IncompleteRafflesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-incomplete-raffles',
            template: __webpack_require__(/*! ./incomplete-raffles.component.html */ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.html"),
            styles: [__webpack_require__(/*! ./incomplete-raffles.component.scss */ "./src/pages/admin/admin-home/components/incomplete-raffles/incomplete-raffles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_4__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], IncompleteRafflesComponent);
    return IncompleteRafflesComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.html":
/*!******************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper m-3 p-2\">\r\n  <h3 class=\"mb-3\">Manage Raffle\r\n    <div class=\"close pointer\" (click)=\"closeModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </div>\r\n  </h3>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"raffle-wrapper\">\r\n      <div class=\"image\" [imageLoader]=\"raffle?.product?.images[0]\"></div>\r\n      <div class=\"detail\">\r\n        <h4>{{raffle.name}}</h4>\r\n        <p>This raffle has a maximum of {{raffle.maxWinners}} winning number {{raffle.maxWinners > 1 ? 's' :''}}.</p>\r\n      </div>\r\n    </div>\r\n    <hr class=\"mb-4\">\r\n    <button class=\"btn btn-primary btn-lg\" *ngIf=\"!raffle.isCompleted\" (click)=\"getWinningNumbers()\"\r\n      [btnStatus]=\"loading\">\r\n      Complete Raffle Draw\r\n    </button>\r\n\r\n    <h3 *ngIf=\"raffleWinners.length > 0\">\r\n      <small>Winning raffle numbers are</small>\r\n      <span class=\"badge badge-primary mx-1\" *ngFor=\"let item of raffleWinners\"> {{item.winningNumber}}</span>\r\n    </h3>\r\n\r\n  </div>\r\n\r\n  <div class=\"winners\" *ngIf=\"raffle.isCompleted && winners && winners.length > 0\">\r\n    <h5 class=\"mb-2\">There are {{winners.length}} winner{{winners.length > 1 ? 's': ''}} for this raffle</h5>\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-sm-6 col-md-3 my-1\" *ngFor=\"let item of winners\">\r\n        <div class=\"winning-contact\">\r\n          <div class=\"image\" [imageLoader]=\"item?.account?.contact?.picture\"></div>\r\n          <small\r\n            class=\"name\">{{item?.account?.contact ? (item?.account?.contact?.firstName + ' ' + item?.account?.contact?.lastName) : 'Unknown User'}}</small>\r\n          <span class=\"badge badge-primary my-1\"> Winning No: {{item.entryNumber  < 10\r\n            ? '00'+item.entryNumber\r\n            : ((item.entryNumber > 9 && item.entryNumber < 100)\r\n            ? '0'+item.entryNumber\r\n            : item.entryNumber)\r\n            \r\n          \r\n          }}</span>\r\n          <button class=\"btn btn-sm btn-secondary btn-outline\" (click)=\"send([item])\"><i\r\n              class=\"fa fa-envelope\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"send(winners)\"><i class=\"fa fa-envelope\"></i> Email all\r\n      Winners</button>\r\n  </div>\r\n\r\n  <div class=\"winners\" *ngIf=\"raffle.isCompleted && winners && winners.length === 0\">\r\n    <h4>There are no Winners!</h4>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .jumbotron .raffle-wrapper {\n  display: flex; }\n  :host .jumbotron .raffle-wrapper .image {\n    width: 100px;\n    height: 120px;\n    margin-right: 15px;\n    background-size: contain !important; }\n  :host .jumbotron .raffle-wrapper .detail {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  :host .winners .winning-contact {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 150px;\n  height: 100%;\n  text-align: center;\n  border: 1px solid #d3d3d3;\n  border-radius: 4px;\n  padding: 10px;\n  margin: auto; }\n  :host .winners .winning-contact .image {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%; }\n  :host .winners .winning-contact .name {\n    margin: 5px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hZG1pbi9hZG1pbi1ob21lL2NvbXBvbmVudHMvbWFuYWdlLXJhZmZsZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHJpZmZhLUJyYXNpbC1mcm9udC9zcmNcXHBhZ2VzXFxhZG1pblxcYWRtaW4taG9tZVxcY29tcG9uZW50c1xcbWFuYWdlLXJhZmZsZVxcbWFuYWdlLXJhZmZsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLGFBQWEsRUFBQTtFQUhuQjtJQU9RLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQyxFQUFBO0VBVjNDO0lBY1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQTtFQWhCL0I7RUF1Qk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFsQ2xCO0lBcUNRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUF2QzFCO0lBMkNRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vYWRtaW4taG9tZS9jb21wb25lbnRzL21hbmFnZS1yYWZmbGUvbWFuYWdlLXJhZmZsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuanVtYm90cm9uIHtcclxuICAgIC5yYWZmbGUtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2lubmVycyB7XHJcbiAgICAud2lubmluZy1jb250YWN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManageRaffleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRaffleComponent", function() { return ManageRaffleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-config */ "./src/modules/dialog/helpers/dialog-config.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-ref */ "./src/modules/dialog/helpers/dialog-ref.ts");






var ManageRaffleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageRaffleComponent, _super);
    function ManageRaffleComponent(injector, _dialogRef, _dialogConfig, _raffleApi, _accountApi, _raffleWinnerApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._dialogRef = _dialogRef;
        _this._dialogConfig = _dialogConfig;
        _this._raffleApi = _raffleApi;
        _this._accountApi = _accountApi;
        _this._raffleWinnerApi = _raffleWinnerApi;
        _this.modalSize = 'lg';
        _this.raffle = new _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleDraw"]();
        _this.winners = [];
        return _this;
    }
    ManageRaffleComponent.prototype.ngOnInit = function () {
        this.raffle = this._dialogConfig.data;
        this.raffleWinners = this.raffle.raffleWinners ? this.raffle.raffleWinners : [];
        this.getRaffleEntries();
    };
    ManageRaffleComponent.prototype.getWinningNumbers = function () {
        var _this = this;
        this.loading = true;
        this._raffleWinnerApi.getWinningNumbers(this.raffle)
            .subscribe(function (res) {
            _this.raffleWinners = res.raffleWinners;
            _this.winners = _this.entries.filter(function (entry) {
                if (!!_this.raffleWinners.find(function (winner) { return entry.entryNumber === winner.winningNumber; })) {
                    return entry;
                }
            });
            _this.raffle = Object.assign(_this.raffle, res.raffle);
            _this.getLoosersEmail();
            _this.loading = false;
        }, function (error) { _this.loading = false; console.log(error); });
    };
    ManageRaffleComponent.prototype.getRaffleEntries = function () {
        var _this = this;
        this._raffleApi.getRaffleEntries(this.raffle.id, { include: { 'account': 'contact' } })
            .subscribe(function (res) {
            _this.entries = res;
            var winningNumbers = _this.raffleWinners.map(function (entry) { return entry.winningNumber; });
            _this.winners = _this.entries.filter(function (entry) {
                if (winningNumbers.includes(entry.entryNumber)) {
                    return entry;
                }
            });
        });
    };
    ManageRaffleComponent.prototype.getLoosersEmail = function () {
        var _this = this;
        var winningUsers = this.winners.map(function (winner) { return winner.account.email; });
        var winningNumbers = this.raffleWinners.map(function (entry) { return entry.winningNumber; });
        this.loosers = this.entries.filter(function (entry) {
            if (!winningNumbers.includes(entry.entryNumber)) {
                return entry;
            }
        }).map(function (entry) { return entry.account.email; });
        this.loosers = this.loosers.reduce(function (x, y) { return x.includes(y) ? x : x.concat([y]); }, []);
        this.loosers.filter(function (email) { return !winningUsers.includes(email); });
        this.loading = true;
        var emailData = {
            subject: "Better luck next time!",
            content: "\n      \n      "
        };
        this._accountApi.sendEmail({ emails: this.loosers, emailData: emailData }).subscribe(function () {
            _this.loading = false;
            _this.toastr.success('Email sent');
        });
    };
    ManageRaffleComponent.prototype.send = function (entry) {
        var _this = this;
        this.loading = true;
        var emailData = {
            subject: "You are the winner of " + this.raffle.name + "!",
            content: "\n      \n      "
        };
        var emails = entry.map(function (_entry) { return _entry.account.email; });
        this._accountApi.sendEmail({ emails: emails, emailData: emailData }).subscribe(function () {
            _this.loading = false;
            _this.toastr.success('Email sent');
        });
    };
    ManageRaffleComponent.prototype.closeModal = function () {
        this._dialogRef.close();
    };
    ManageRaffleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-raffle',
            template: __webpack_require__(/*! ./manage-raffle.component.html */ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.html"),
            styles: [__webpack_require__(/*! ./manage-raffle.component.scss */ "./src/pages/admin/admin-home/components/manage-raffle/manage-raffle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_5__["DialogRef"],
            _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_4__["DialogConfig"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleDrawApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["AccountApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleWinnerApi"]])
    ], ManageRaffleComponent);
    return ManageRaffleComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-home-admin-home-module.js.map