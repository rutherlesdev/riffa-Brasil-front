(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-admin-admin-home-admin-home-module~pages-admin-content-content-module~pages-admin-prod~1166c6bf"],{

/***/ "./src/modules/table/components/table/table.component.html":
/*!*****************************************************************!*\
  !*** ./src/modules/table/components/table/table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"tableData && tableData.length> 0\">\r\n  <table class=\"table table-striped table-hover border\">\r\n    <thead>\r\n      <tr>\r\n        <th *ngIf=\"config.showSelect\" class=\"select\">\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectAll($event);\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\"></span>\r\n          </label>\r\n        </th>\r\n\r\n        <th *ngFor=\"let header of headers\" (click)=\"changeSorting(header)\" [ngClass]=\"selectedClass(header)\">{{header.formatted_text\r\n          ? header.formatted_text : header.text}}</th>\r\n        <th *ngIf=\"actions.length > 0\" class=\"actions\"> Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr\r\n        *ngFor=\"let data of tableData  | orderBy : convertSorting() | slice: sliceStart : sliceEnd; let odd=odd; let even=even; let i = index;\">\r\n        <td *ngIf=\"config.showSelect\" class=\"select\">\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"data.check\"\r\n              (click)=\"selectItem($event, data);\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\"></span>\r\n          </label>\r\n        </td>\r\n\r\n        <td *ngFor=\"let header of headers\" [ngClass]=\"{'has-image': header.type === 'image'}\">\r\n          <div [ngSwitch]=\"header.type\">\r\n            <div *ngSwitchCase=\"'image'\" class=\"image\"\r\n              [style.background-image]=\"'url(' + byString(data, header.text) + ')'\"></div>\r\n            <div *ngSwitchDefault [innerHTML]=\"byString(data, header.text) | format: header.type\"> </div>\r\n          </div>\r\n        </td>\r\n\r\n        <td *ngIf=\"actions.length > 0\" class=\"actions\">\r\n          <ul class=\"icons\">\r\n            <li *ngFor=\"let action of actions\" (click)=\"action.event(data, i)\">\r\n              <a [class]=\"action.color\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"action.text\">\r\n                <i class=\"fa fa-{{action.icon}}\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/modules/table/components/table/table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/modules/table/components/table/table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host td {\n    vertical-align: middle; }\n  :host .actions {\n    text-align: center; }\n  :host .actions .icons {\n      padding: 0;\n      margin: 0;\n      display: flex;\n      justify-content: center; }\n  :host .actions .icons li {\n        list-style: none;\n        padding: 3px 8px;\n        border: 1px solid gray;\n        margin: 0 2px;\n        border-radius: 2px;\n        cursor: pointer; }\n  :host .has-image .image {\n    height: 80px;\n    width: 80px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxyaWZmYS1CcmFzaWwtZnJvbnQvc3JjXFxtb2R1bGVzXFx0YWJsZVxcY29tcG9uZW50c1xcdGFibGVcXHRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBSUksc0JBQXNCLEVBQUE7RUFKMUI7SUFRSSxrQkFBa0IsRUFBQTtFQVJ0QjtNQVdNLFVBQVU7TUFDVixTQUFTO01BQ1QsYUFBYTtNQUNiLHVCQUF1QixFQUFBO0VBZDdCO1FBaUJRLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZUFBZSxFQUFBO0VBdEJ2QjtJQTZCTSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL21vZHVsZXMvdGFibGUvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuaWNvbnMge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhhcy1pbWFnZSB7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/modules/table/components/table/table.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/table/components/table/table.component.ts ***!
  \***************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.headers = [];
        this.actions = [];
        this.actionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tableData = [];
        this.allData = [];
        this.sort = { column: 'Name', descending: true };
        this.currentPage = 1;
        this.sliceStart = 0;
        this.totalItems = 0;
    }
    TableComponent.prototype.defaults = function () {
        return {
            showSelect: false,
            itemsPerPage: 10
        };
    };
    TableComponent.prototype.ngAfterContentChecked = function () {
        this.config = Object.assign(this.defaults(), this.config);
        if (this.data) {
            // this.data.subscribe((data) => {
            this.getTableHeadings(this.data);
            this.allData = this.tableData = this.data;
            this.setPageNumbers();
            // });
        }
    };
    TableComponent.prototype.getTableHeadings = function (data) {
        var _this = this;
        var tableHeaders = [];
        if (!this.headers || this.headers.length === 0) {
            tableHeaders = data && data[0] ? Object.keys(data[0]).slice() : [];
            tableHeaders.forEach(function (element) {
                _this.headers.push({
                    text: element,
                    checked: true,
                    formatted_text: element,
                    type: 'text',
                    checkbox: false
                });
            });
        }
        if (this.config.selectable && !this.config.tableHeaders[0].checkbox) {
            this.config.tableHeaders.splice(0, 0, {
                text: 'Selectable',
                checked: true,
                formatted_text: 'Selectable',
                type: 'checkbox',
                checkbox: true
            });
        }
    };
    TableComponent.prototype.setPageNumbers = function () {
        this.totalItems = this.tableData.length;
        this.sliceStart = (this.currentPage - 1) * Number(this.config.itemsPerPage);
        this.sliceEnd = this.sliceStart + Number(this.config.itemsPerPage);
    };
    TableComponent.prototype.selectedClass = function (column) {
        var styles = '';
        styles = 'sorting capitalize ';
        if (column.type === 'image') {
            styles = 'img-header capitalize';
        }
        if (column.checkbox) {
            styles = 'sorting_disabled checkbox-header';
        }
        if (column.text === this.sort.column && this.sort.descending === false && !column.checkbox) {
            return 'sorting_asc ' + styles;
        }
        else if (column.text === this.sort.column && this.sort.descending === true && !column.checkbox) {
            return 'sorting_desc ' + styles;
        }
        else {
            return styles;
        }
    };
    TableComponent.prototype.changeSorting = function (column) {
        var sort = this.sort;
        if (sort.column === column.text) {
            sort.descending = !sort.descending;
        }
        else {
            sort.column = column.text;
            sort.descending = false;
        }
    };
    TableComponent.prototype.convertSorting = function () {
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    };
    TableComponent.prototype.onSearch = function (_a) {
        var _this = this;
        var column = _a.column, search = _a.search;
        this.currentPage = 1;
        var comparator = '';
        search = search ? search.toString() : undefined;
        if (search && search.trim() !== '') {
            if (!column) {
                console.log('Select a column to search');
            }
            else {
                this.tableData = this.allData.filter(function (d) {
                    comparator = _this.byString(d, column.text);
                    if (column.type === 'date' || column.type === 'datetime') {
                        return comparator ? new Date(comparator).toDateString().indexOf(new Date(search).toDateString()) > -1 : null;
                    }
                    else {
                        return comparator ? comparator.toLowerCase().indexOf(search.toLowerCase()) > -1 : null;
                    }
                });
            }
        }
        else {
            this.tableData = this.allData;
        }
        this.setPageNumbers();
    };
    TableComponent.prototype.onPageChanged = function (event) {
        this.currentPage = event.currentPage;
        this.sliceStart = event.startIndex;
        this.sliceEnd = event.endIndex + 1;
    };
    TableComponent.prototype.selectAll = function (e) {
        this.tableData.map(function (item) {
            item.check = e.target.checked;
            return item;
        });
        this.getSelectedItems();
    };
    TableComponent.prototype.selectItem = function (e, item) {
        item.check = e.target.checked;
        this.getSelectedItems();
    };
    TableComponent.prototype.getSelectedItems = function () {
        this.selectedData.emit(this.tableData.filter(function (item) { return item.check = true; }));
    };
    TableComponent.prototype.onEvent = function (data, index, action) {
        this.actionClick.emit({ data: data, index: index, action: action.event_name });
    };
    TableComponent.prototype.byString = function (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, ''); // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (o && k in o) {
                o = o[k];
            }
            else {
                return;
            }
        }
        return o;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "viewModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "headers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "actions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableComponent.prototype, "actionClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableComponent.prototype, "selectedData", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/modules/table/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/modules/table/components/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/modules/table/table.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/table/table.module.ts ***!
  \*******************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ "./src/modules/table/components/table/table.component.ts");





var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_3__["WinitCommonModule"]
            ],
            declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]],
            exports: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]]
        })
    ], TableModule);
    return TableModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-admin-admin-home-admin-home-module~pages-admin-content-content-module~pages-admin-prod~1166c6bf.js.map