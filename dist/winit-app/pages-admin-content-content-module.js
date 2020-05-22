(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-content-content-module"],{

/***/ "./src/pages/admin/content/components/content-item/content-item.component.html":
/*!*************************************************************************************!*\
  !*** ./src/pages/admin/content/components/content-item/content-item.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper p-4\">\r\n  <h3 class=\"mb-3\">{{content?.id ? 'Edit' : 'Add New'}} content</h3>\r\n\r\n  <form #form=\"ngForm\">\r\n    <form-field label=\"Content Type\">\r\n      <select name=\"types\" inputRef #name=\"ngModel\" [(ngModel)]=\"contentModel.type\">\r\n        <option [value]=\"item\" *ngFor=\"let item of contentTypes\">{{item}}</option>\r\n      </select>\r\n      <!-- <input inputRef name=\"name\" [(ngModel)]=\"content.type\" #name=\"ngModel\" required> -->\r\n      <div invalid *ngIf=\"name.dirty && name.invalid\">\r\n        <span *ngIf=\"name?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <form-field label=\"Title\">\r\n      <input inputRef name=\"title\" [(ngModel)]=\"contentModel.title\" #title=\"ngModel\" required>\r\n      <div invalid *ngIf=\"title.dirty && title.invalid\">\r\n        <span *ngIf=\"title?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <form-field label=\"Subtitle\">\r\n      <input inputRef name=\"subtitle\" [(ngModel)]=\"contentModel.subtitle\" #subtitle=\"ngModel\">\r\n      <div invalid *ngIf=\"subtitle.dirty && subtitle.invalid\">\r\n        <span *ngIf=\"subtitle?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <form-field label=\"Link\">\r\n      <input inputRef name=\"href\" [(ngModel)]=\"contentModel.href\" #href=\"ngModel\">\r\n      <div invalid *ngIf=\"href.dirty && href.invalid\">\r\n        <span *ngIf=\"href?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <form-field label=\"Content\">\r\n      <textarea inputRef name=\"content\" [(ngModel)]=\"contentModel.content\" #content=\"ngModel\"></textarea>\r\n      <div invalid *ngIf=\"content.dirty && content.invalid\">\r\n        <span *ngIf=\"content?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n  </form>\r\n\r\n  <div class=\"footer text-right mt-3\">\r\n    <button class=\"btn btn-primary mr-2\" [btnStatus]=\"loading\" [disabled]=\"form.invalid\" (click)=\"save()\">Save</button>\r\n    <button class=\"btn btn-dark\" (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/content/components/content-item/content-item.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/admin/content/components/content-item/content-item.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vY29udGVudC9jb21wb25lbnRzL2NvbnRlbnQtaXRlbS9jb250ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/admin/content/components/content-item/content-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/pages/admin/content/components/content-item/content-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemComponent", function() { return ContentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-config */ "./src/modules/dialog/helpers/dialog-config.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-ref */ "./src/modules/dialog/helpers/dialog-ref.ts");








var ContentItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentItemComponent, _super);
    function ContentItemComponent(injector, _dialogRef, _dialogConfig, _contentApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._dialogRef = _dialogRef;
        _this._dialogConfig = _dialogConfig;
        _this._contentApi = _contentApi;
        _this.modalSize = 'lg';
        _this.contentTypes = [
            'Homepage Left content',
            'Homepage Right content',
            'Footer nav Menu'
        ];
        _this.contentModel = new _common_sdk__WEBPACK_IMPORTED_MODULE_5__["Content"]();
        return _this;
    }
    ContentItemComponent.prototype.ngOnInit = function () {
        var data = this._dialogConfig.data;
        if (data) {
            this.contentModel = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3__(data);
        }
    };
    ContentItemComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this._contentApi.upsert(this.contentModel)
            .subscribe(function (_data) {
            _this.loading = false;
            _this.form.resetForm();
        }, function (error) {
            _this.loading = false;
            _this.toastr.error(error.message);
        });
    };
    ContentItemComponent.prototype.closeModal = function () {
        this._dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ContentItemComponent.prototype, "form", void 0);
    ContentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-item',
            template: __webpack_require__(/*! ./content-item.component.html */ "./src/pages/admin/content/components/content-item/content-item.component.html"),
            styles: [__webpack_require__(/*! ./content-item.component.scss */ "./src/pages/admin/content/components/content-item/content-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"],
            _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_5__["ContentApi"]])
    ], ContentItemComponent);
    return ContentItemComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/content/components/content/content.component.html":
/*!***************************************************************************!*\
  !*** ./src/pages/admin/content/components/content/content.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-white my-3\">\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Use Winner Dummy Data</h4>\r\n    <button class=\"btn btn-secondary\" (click)=\"toggleDummyWinnerData()\">Toggle Use of Dummy Winners Data</button>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addContent()\">Add Content</button>\r\n\r\n  <app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n    <ng-container *ngIf=\"contents && contents.length > 0\">\r\n      <app-table [config]=\"{showSelect: false}\" [data]=\"contents\" [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n      </app-table>\r\n      <ngb-pagination maxSize=\"5\" [collectionSize]=\"contentsBK.length\" (pageChange)=\"onPageChange($event)\"\r\n        aria-label=\"Default pagination\">\r\n      </ngb-pagination>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"contents && contents.length === 0\">\r\n      <div class=\"jumbotron\">\r\n        <h4>Empty</h4>\r\n        <p class=\"lead text-dark\">No Content to display</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/content/components/content/content.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/admin/content/components/content/content.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vY29udGVudC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/admin/content/components/content/content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/admin/content/components/content/content.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _common_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/services/common/common.service */ "./src/common/services/common/common.service.ts");
/* harmony import */ var _content_item_content_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-item/content-item.component */ "./src/pages/admin/content/components/content-item/content-item.component.ts");






var ContentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentComponent, _super);
    function ContentComponent(injector, _rt, _contentApi, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._contentApi = _contentApi;
        _this.commonService = commonService;
        _this.contents = [];
        _this.tableActions = [
            {
                color: 'text-info',
                icon: 'pencil-square-o',
                text: 'Edit',
                event: function (data, i) {
                    _this.addContent(data);
                }
            },
            {
                color: 'text-danger',
                icon: 'trash-o',
                text: 'Delete',
                event: function (data, i) {
                    _this.delete(data);
                }
            }
        ];
        _this.tableHeaders = [
            {
                text: 'type',
                formatted_text: 'Type',
                type: 'text'
            },
            {
                text: 'title',
                formatted_text: 'Title',
                type: 'title'
            }
        ];
        _this.pageSize = 10;
        _this.contentsBK = [];
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.contentRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_3__["Content"]);
        this._getContents();
    };
    ContentComponent.prototype.onPageChange = function (page) {
        var start = (page - 1) * this.pageSize;
        this.contents = this.contentsBK.slice(start, start + this.pageSize);
    };
    ContentComponent.prototype.toggleDummyWinnerData = function () {
        var _this = this;
        if (!this.commonService.useWinnersDummyData.value) {
            this._contentApi
                .create({
                type: 'useWinnersDummyData',
                title: true
            })
                .subscribe(function (_data) {
                _this.loading = false;
                _this.commonService.useWinnersDummyData.next(_data);
            }, function (error) {
                _this.loading = false;
                _this.toastr.error(error.message);
            });
        }
        else {
            this._contentApi
                .deleteById(this.commonService.useWinnersDummyData.value.id)
                .subscribe(function (_data) {
                _this.loading = false;
                _this.commonService.useWinnersDummyData.next(null);
            }, function (error) {
                _this.loading = false;
                _this.toastr.error(error.message);
            });
        }
    };
    ContentComponent.prototype.addContent = function (content) {
        if (content === void 0) { content = null; }
        this.dialog.open(_content_item_content_item_component__WEBPACK_IMPORTED_MODULE_5__["ContentItemComponent"], content ? { data: content } : null);
    };
    ContentComponent.prototype.delete = function (item) {
        var _this = this;
        this.dialog
            .openAlert({
            data: {
                config: {
                    heading: 'Delete Raffle',
                    body: 'Are you sure you want to delete this raffle?'
                },
                buttons: {
                    buttons: [
                        { text: 'Delete', color: 'danger', eventname: 'delete' },
                        { text: 'Close', color: 'outline-danger', eventname: 'close' }
                    ]
                }
            }
        })
            .afterClosed.subscribe(function (event) {
            if (event === 'delete') {
                _this.contentRef.remove(item).subscribe();
            }
        });
    };
    ContentComponent.prototype._getContents = function () {
        var _this = this;
        this.loading = true;
        this.contentRef
            .on('change', { where: { isDeleted: false } })
            .subscribe(function (data) {
            _this.contents = _this.contentsBK = data;
            _this.loading = false;
        });
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/pages/admin/content/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/pages/admin/content/components/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RealTime"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["ContentApi"],
            _common_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ContentComponent);
    return ContentComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/content/content.module.ts":
/*!***************************************************!*\
  !*** ./src/pages/admin/content/content.module.ts ***!
  \***************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
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
/* harmony import */ var _components_content_item_content_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/content-item/content-item.component */ "./src/pages/admin/content/components/content-item/content-item.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/content/content.component */ "./src/pages/admin/content/components/content/content.component.ts");












var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"], _components_content_item_content_item_component__WEBPACK_IMPORTED_MODULE_10__["ContentItemComponent"]],
            entryComponents: [_components_content_item_content_item_component__WEBPACK_IMPORTED_MODULE_10__["ContentItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_6__["WinitCommonModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_8__["FormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_table_table_module__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_7__["DialogModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"]
                    }
                ])
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-content-content-module.js.map