(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-products-products-module"],{

/***/ "./src/pages/admin/products/components/add-product/add-product.component.html":
/*!************************************************************************************!*\
  !*** ./src/pages/admin/products/components/add-product/add-product.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper p-4\">\r\n  <h3 class=\"mb-3\">{{product?.id ? 'Edit' : 'Add New'}} Product</h3>\r\n\r\n  <form #form=\"ngForm\">\r\n    <form-field label=\"Name\">\r\n      <input inputRef name=\"name\" [(ngModel)]=\"product.name\" #name=\"ngModel\" required>\r\n      <div invalid *ngIf=\"name.dirty && name.invalid\">\r\n        <span *ngIf=\"name?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n    <td-text-editor [value]=\"product.description\" #textEditor></td-text-editor>\r\n\r\n    <hr />\r\n\r\n    <div class=\"product-images\">\r\n      <label class=\"btn btn-info\">\r\n        Add Image&hellip; <input type=\"file\" style=\"display: none;\" multiple (change)=\"addImage($event)\">\r\n      </label>\r\n      <div class=\"row mt-2 p-2\">\r\n        <div class=\"col col-sm-4 col-md-2\" *ngFor=\"let item of images; let i = index\" (mouseenter)=\"item.show = true\"\r\n          (mouseleave)=\"item.show = false\">\r\n          <img class=\"image\" [src]=\"item.url\">\r\n          <div class=\"actions\" *ngIf=\"item.show\" (click)=\"deleteFile(item, i)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"footer text-right mt-3\">\r\n    <button class=\"btn btn-primary mr-2\" [btnStatus]=\"loading\" [disabled]=\"form.invalid\" (click)=\"save()\">Save</button>\r\n    <button class=\"btn btn-dark\" (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/products/components/add-product/add-product.component.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/admin/products/components/add-product/add-product.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .wrapper form .product-images .col {\n  padding: 0 5px;\n  position: relative; }\n  :host .wrapper form .product-images .col img {\n    max-width: 100%;\n    border-radius: 2px;\n    height: 100px; }\n  :host .wrapper form .product-images .col .actions {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 0 5px;\n    width: calc(100% - 10px);\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.5);\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hZG1pbi9wcm9kdWN0cy9jb21wb25lbnRzL2FkZC1wcm9kdWN0L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccmlmZmEtQnJhc2lsLWZyb250L3NyY1xccGFnZXNcXGFkbWluXFxwcm9kdWN0c1xcY29tcG9uZW50c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS1UsY0FBYztFQUNkLGtCQUFrQixFQUFBO0VBTjVCO0lBU1ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFYekI7SUFlWSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBc0I7SUFDdEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9hZG1pbi9wcm9kdWN0cy9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICAucHJvZHVjdC1pbWFnZXMge1xyXG4gICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLCAwLjUpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/admin/products/components/add-product/add-product.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/admin/products/components/add-product/add-product.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/fesm5/covalent-text-editor.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-config */ "./src/modules/dialog/helpers/dialog-config.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-ref */ "./src/modules/dialog/helpers/dialog-ref.ts");












var AddProductComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddProductComponent, _super);
    function AddProductComponent(injector, _http, _dialogRef, _dialogConfig, _productApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._http = _http;
        _this._dialogRef = _dialogRef;
        _this._dialogConfig = _dialogConfig;
        _this._productApi = _productApi;
        _this.modalSize = 'lg';
        _this.product = new _common_sdk__WEBPACK_IMPORTED_MODULE_8__["Product"]();
        _this.images = [];
        _this.files = [];
        _this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].server.BASE_URL + "/" + _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].server.API_VERSION + "/Containers/container";
        return _this;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this._dialogConfig.data;
        if (data) {
            this.product = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_5__(data);
        }
        this.product.images ? this.product.images.map(function (image) { return _this.images.push({ url: image, show: false }); }) : null;
    };
    AddProductComponent.prototype.addImage = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var _fileList = [].slice.call(event.target.files);
            _fileList.forEach(function (file) {
                _this.files.push(file);
                _this.createFileUrl(file);
            });
            delete event.target.files;
        }
    };
    AddProductComponent.prototype.createFileUrl = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            if (_this.product !== null && _this.product !== undefined) {
                _this.images.push({ url: reader.result, show: false });
            }
        });
        reader.readAsDataURL(file);
    };
    AddProductComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        var formData = new FormData();
        var uploadUrl = this.imgUrl + "/upload";
        if (this.form.valid) {
            if (this.files.length > 0) {
                this._uploadImages(formData, this.imgUrl, uploadUrl).subscribe(function () { return _this.upsertProduct(); });
            }
            else {
                this.upsertProduct();
            }
        }
    };
    AddProductComponent.prototype.upsertProduct = function () {
        var _this = this;
        this.product.description = this._textEditor.value;
        this._productApi.upsert(this.product)
            .subscribe(function (_data) {
            _this.loading = false;
            _this._reset();
        }, function (error) {
            _this.loading = false;
            _this.toastr.error(error.message);
        });
    };
    AddProductComponent.prototype._reset = function () {
        this.form.resetForm();
        this._textEditor.value = '';
        this.files = [];
        this.product = new _common_sdk__WEBPACK_IMPORTED_MODULE_8__["Product"]();
        this.images = [];
    };
    AddProductComponent.prototype.deleteFile = function (file, i) {
        var _this = this;
        if (/data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(file.url)) {
            this.images.splice(i, 1);
        }
        else {
            this._http.delete("" + file.url.replace('download', 'files')).subscribe(function () {
                var index = _this.product.images.findIndex(function (image) { return image === "" + file.url.replace('download', 'files'); });
                _this.product.images.splice(index, 1);
                _this.images.splice(i, 1);
            });
        }
    };
    AddProductComponent.prototype.closeModal = function () {
        this._dialogRef.close();
    };
    AddProductComponent.prototype._uploadImages = function (formData, url, uploadUrl) {
        var _this = this;
        this.files.forEach(function (file) {
            formData.append('uploads', file, file.name);
            if (!_this.product.images) {
                _this.product.images = [];
            }
            _this.product.images.push(url + "/download/" + file.name);
        });
        return this._http.post(uploadUrl, formData)
            .pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.loading = false; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddProductComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('textEditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _covalent_text_editor__WEBPACK_IMPORTED_MODULE_4__["TdTextEditorComponent"])
    ], AddProductComponent.prototype, "_textEditor", void 0);
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/pages/admin/products/components/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/pages/admin/products/components/add-product/add-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_11__["DialogRef"],
            _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_10__["DialogConfig"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_8__["ProductApi"]])
    ], AddProductComponent);
    return AddProductComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_7__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/products/components/products/products.component.html":
/*!******************************************************************************!*\
  !*** ./src/pages/admin/products/components/products/products.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-white my-3\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct()\">Add Product</button>\r\n\r\n  <app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n    <ng-container *ngIf=\"products && products.length > 0\">\r\n      <app-table [config]=\"{showSelect: false, itemsPerPage: pageSize}\" [data]=\"products | orderBy: '-updatedAt'\"\r\n        [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n      </app-table>\r\n      <ngb-pagination maxSize=\"5\" [pageSize]=\"pageSize\" [collectionSize]=\"productsBK.length\"\r\n        (pageChange)=\"onPageChange($event)\" aria-label=\"Default pagination\">\r\n      </ngb-pagination>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"products && products.length === 0\">\r\n      <div class=\"jumbotron\">\r\n        <h4>Empty</h4>\r\n        <p class=\"lead text-dark\">No products to display</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/products/components/products/products.component.scss":
/*!******************************************************************************!*\
  !*** ./src/pages/admin/products/components/products/products.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/admin/products/components/products/products.component.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/admin/products/components/products/products.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/pages/admin/products/components/add-product/add-product.component.ts");






var ProductsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsComponent, _super);
    function ProductsComponent(injector, _rt, _orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._orderBy = _orderBy;
        _this.products = [];
        _this.tableActions = [
            {
                color: 'text-info',
                icon: 'pencil-square-o',
                text: 'Edit',
                event: function (data, i) { _this.addProduct(data); }
            }, {
                color: 'text-danger',
                icon: 'trash-o',
                text: 'Delete',
                event: function (data, i) { _this.delete(data); }
            }
        ];
        _this.tableHeaders = [{
                text: 'images[0]',
                formatted_text: 'Image',
                type: 'image',
            },
            {
                text: 'name',
                formatted_text: 'Name',
                type: 'text',
            }
        ];
        _this.pageSize = 10;
        _this.productsBK = [];
        _this.currentPage = 1;
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_4__["Product"]);
        this._getproducts();
    };
    ProductsComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageSize;
        this.products = this.productsBK.slice(start, start + this.pageSize);
    };
    ProductsComponent.prototype.addProduct = function (product) {
        if (product === void 0) { product = null; }
        this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"], product ? { data: product } : null);
    };
    ProductsComponent.prototype.delete = function (item) {
        var _this = this;
        this.dialog.openAlert({
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
        }).afterClosed.subscribe(function (event) {
            if (event === 'delete') {
                _this.productRef.remove(item).subscribe();
            }
        });
    };
    ProductsComponent.prototype._getproducts = function () {
        var _this = this;
        this.loading = true;
        this.productRef.on('change', { where: { isDeleted: false } }).subscribe(function (data) {
            _this.products = _this.productsBK = _this._orderBy.transform(data, '-updatedAt');
            _this.onPageChange(_this.currentPage);
            _this.loading = false;
        });
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/pages/admin/products/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/pages/admin/products/components/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_4__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], ProductsComponent);
    return ProductsComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/admin/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/fesm5/covalent-text-editor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _modules_table_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/table/table.module */ "./src/modules/table/table.module.ts");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/pages/admin/products/components/add-product/add-product.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/products.component */ "./src/pages/admin/products/components/products/products.component.ts");













var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"]],
            entryComponents: [_components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"]],
            exports: [_components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_7__["WinitCommonModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_table_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_5__["CovalentTextEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"]
                    }
                ])
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-products-products-module.js.map