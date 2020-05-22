(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-base-invitations-invitations-module"],{

/***/ "./src/pages/base/invitations/components/invitations/invitations.component.html":
/*!**************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invitations/invitations.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-white my-3\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Send Invites\">\r\n      <ng-template ngbTabContent>\r\n        <app-send-invites></app-send-invites>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"View Sent Invites\">\r\n      <ng-template ngbTabContent>\r\n        <app-invites-list></app-invites-list>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/base/invitations/components/invitations/invitations.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invitations/invitations.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS9pbnZpdGF0aW9ucy9jb21wb25lbnRzL2ludml0YXRpb25zL2ludml0YXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/base/invitations/components/invitations/invitations.component.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invitations/invitations.component.ts ***!
  \************************************************************************************/
/*! exports provided: InvitationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsComponent", function() { return InvitationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");



var InvitationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvitationsComponent, _super);
    function InvitationsComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    InvitationsComponent.prototype.ngOnInit = function () {
    };
    InvitationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitations',
            template: __webpack_require__(/*! ./invitations.component.html */ "./src/pages/base/invitations/components/invitations/invitations.component.html"),
            styles: [__webpack_require__(/*! ./invitations.component.scss */ "./src/pages/base/invitations/components/invitations/invitations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], InvitationsComponent);
    return InvitationsComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/invitations/components/invites-list/invites-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invites-list/invites-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n  <ng-container *ngIf=\"invitations && invitations.length > 0\">\r\n    <h3>Invitations Sent</h3>\r\n    <app-table [config]=\"{showSelect: false}\" [data]=\"invitations\" [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n    </app-table>\r\n    <ngb-pagination maxSize=\"5\" [collectionSize]=\"invitationsBK.length-1\" (pageChange)=\"onPageChange($event)\"\r\n      aria-label=\"Default pagination\">\r\n    </ngb-pagination>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"invitations && invitations.length === 0\">\r\n    <div class=\"jumbotron\">\r\n      <h4>Empty</h4>\r\n      <p class=\"lead text-dark\">No invitations to display</p>\r\n    </div>\r\n  </ng-container>\r\n\r\n</app-spinner>\r\n"

/***/ }),

/***/ "./src/pages/base/invitations/components/invites-list/invites-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invites-list/invites-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS9pbnZpdGF0aW9ucy9jb21wb25lbnRzL2ludml0ZXMtbGlzdC9pbnZpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/base/invitations/components/invites-list/invites-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/invites-list/invites-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvitesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitesListComponent", function() { return InvitesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");




var InvitesListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvitesListComponent, _super);
    function InvitesListComponent(injector, _rt, _accountApi, _invitationApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._accountApi = _accountApi;
        _this._invitationApi = _invitationApi;
        _this.invitations = [];
        _this.invitationsBK = [];
        _this.tableActions = [
            {
                color: 'text-danger',
                icon: 'trash-o',
                text: 'Delete',
                event: function (data) {
                    _this.delete(data);
                }
            }
        ];
        _this.tableHeaders = [
            {
                text: 'receiverEmail',
                formatted_text: 'Recipient',
                type: 'text'
            },
            {
                text: 'senderClaimed',
                formatted_text: 'Sender Claimed',
                type: 'badge.primary'
            },
            {
                text: 'receiverClaimed',
                formatted_text: 'Reciever Claimed',
                type: 'badge.primary'
            },
            {
                text: 'createdAt',
                formatted_text: 'Created At',
                type: 'date'
            },
            {
                text: 'updatedAt',
                formatted_text: 'Updated At',
                type: 'date'
            }
        ];
        _this.pageSize = 10;
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    InvitesListComponent.prototype.ngOnInit = function () {
        this.invitationRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_3__["Invitation"]);
        this._getInvitations();
    };
    InvitesListComponent.prototype.onPageChange = function (page) {
        var start = (page - 1) * this.pageSize;
        this.invitations = this.invitationsBK.slice(start, start + this.pageSize);
    };
    InvitesListComponent.prototype.delete = function (item) {
        var _this = this;
        this.dialog
            .openAlert({
            data: {
                config: {
                    heading: 'Delete Invitation',
                    body: 'Are you sure you want to delete this invitation?'
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
                _this.invitationRef.remove(item).subscribe();
            }
        });
    };
    InvitesListComponent.prototype._getInvitations = function () {
        var _this = this;
        this.loading = true;
        this.invitationRef
            .on('change', {
            where: { isDeleted: false, accountId: this.currentUser.id },
            include: {
                relation: 'account'
            }
        })
            .subscribe(function (data) {
            _this.invitations = _this.invitationsBK = data;
            _this.loading = false;
        });
    };
    InvitesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invites-list',
            template: __webpack_require__(/*! ./invites-list.component.html */ "./src/pages/base/invitations/components/invites-list/invites-list.component.html"),
            styles: [__webpack_require__(/*! ./invites-list.component.scss */ "./src/pages/base/invitations/components/invites-list/invites-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RealTime"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["AccountApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["InvitationApi"]])
    ], InvitesListComponent);
    return InvitesListComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/invitations/components/send-invites/send-invites.component.html":
/*!****************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/send-invites/send-invites.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-top-0\">\r\n  <div class=\"card-body\">\r\n    <form-field suffix=\"true\">\r\n      <input type=\"email\" placeholder=\"Type recipient email and click add button\" inputRef [(ngModel)]=\"email\"\r\n        name=\"email\" #emailRef=\"ngModel\">\r\n      <i suffix class=\"fa fa-plus pointer\" (click)=\"emails.push(email); emailRef.reset()\" angulartics2On=\"click\" angularticsAction=\"AddInviteEmail\" angularticsLabel=\"AddInviteEmailButton\" [angularticsCategory]=\"'SendInvitesPage'\"></i>\r\n    </form-field>\r\n\r\n    <div class=\"display-emails my-3\">\r\n      <span class=\"bg-info text-light mx-1 px-2 py-1 rounded\" *ngFor=\"let item of emails\">{{item}}\r\n        <span class=\"mx-1 text-light pointer\" (click)=\"removeEmail(item)\">x</span>\r\n      </span>\r\n    </div>\r\n\r\n    <hr class=\"my-3\">\r\n    <form-field prefix=\"true\" suffix=\"true\">\r\n      <span prefix>Invitation link</span>\r\n      <input type=\"text\" id=\"invite-link\" class=\"bg-light\" readonly inputRef [(ngModel)]=\"invite.link\" name=\"link\"\r\n        #linkInput=\"ngModel\" #linkRef>\r\n      <span suffix *ngIf=\"invite.link\" (click)=\"copy(invite.link)\" angulartics2On=\"click\" angularticsAction=\"CopyInviteLink\" angularticsLabel=\"CopyInviteLinkButton\" [angularticsCategory]=\"'SendInvitesPage'\">Copy</span>\r\n      <span suffix class=\"text-secondary\" *ngIf=\"!invite.link\" (click)=\"getInviteLink()\" angulartics2On=\"click\" angularticsAction=\"GenerateInviteLink\" angularticsLabel=\"GetInviteLinkButton\" [angularticsCategory]=\"'SendInvitesPage'\">Get Referral Link</span>\r\n    </form-field>\r\n\r\n    <form-field>\r\n      <textarea inputRef name=\"emailContent\" id=\"emailContent\" [(ngModel)]=\"invite.content\"></textarea>\r\n    </form-field>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"emails.length === 0\" (click)=\"addInvitation()\" angulartics2On=\"click\" angularticsAction=\"SendInviteEmail\" angularticsLabel=\"SendInviteEmailButton\" [angularticsCategory]=\"'SendInvitesPage'\">\r\n      Send Invites\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/base/invitations/components/send-invites/send-invites.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/send-invites/send-invites.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9iYXNlL2ludml0YXRpb25zL2NvbXBvbmVudHMvc2VuZC1pbnZpdGVzL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccmlmZmEtQnJhc2lsLWZyb250L3NyY1xccGFnZXNcXGJhc2VcXGludml0YXRpb25zXFxjb21wb25lbnRzXFxzZW5kLWludml0ZXNcXHNlbmQtaW52aXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS9pbnZpdGF0aW9ucy9jb21wb25lbnRzL3NlbmQtaW52aXRlcy9zZW5kLWludml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/pages/base/invitations/components/send-invites/send-invites.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/base/invitations/components/send-invites/send-invites.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SendInvitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInvitesComponent", function() { return SendInvitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");




var SendInvitesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SendInvitesComponent, _super);
    function SendInvitesComponent(injector, _accountApi, _invitationApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._accountApi = _accountApi;
        _this._invitationApi = _invitationApi;
        _this.emails = [];
        _this.invite = new _common_sdk__WEBPACK_IMPORTED_MODULE_3__["Invitation"]();
        return _this;
    }
    SendInvitesComponent.prototype.ngOnInit = function () {
        if (this.currentUser) {
            this.invite = new _common_sdk__WEBPACK_IMPORTED_MODULE_3__["Invitation"]({
                accountId: this.currentUser.id,
                link: this.currentUser.invitivationCode
                    ? window.location.href + "/?page=signup&id=" + this.currentUser.id + "&unicode=" + this.currentUser.invitivationCode
                    : null,
                code: this.currentUser.invitivationCode
            });
        }
    };
    SendInvitesComponent.prototype.removeEmail = function (email) {
        var index = this.emails.findIndex(function (_email) { return _email === email; });
        this.emails.splice(index, 1);
    };
    SendInvitesComponent.prototype.copy = function () {
        var copyText = this.linkRef
            .nativeElement;
        copyText.select();
        document.execCommand('copy');
    };
    SendInvitesComponent.prototype.getInviteLink = function () {
        var _this = this;
        this._accountApi
            .setInvitationCode({ id: this.currentUser.id })
            .subscribe(function (data) {
            _this.currentUser.invitivationCode = data.invitivationCode;
            _this.invite.link = window.location.origin + "/?page=signup&id=" + _this.currentUser.id + "&unicode=" + _this.currentUser.invitivationCode;
            _this.invite.code = _this.currentUser.invitivationCode;
            _this.toastr.success('Invitation code has been set');
        });
    };
    SendInvitesComponent.prototype.addInvitation = function () {
        var _this = this;
        this.emails.forEach(function (email) {
            _this.invite.receiverEmail = email;
            _this._invitationApi.create(_this.invite).subscribe();
        });
        this.send(this.emails);
    };
    SendInvitesComponent.prototype.send = function (emails) {
        var _this = this;
        this.loading = true;
        var emailData = {
            subject: this.currentUser.contact.firstName +
                ' ' +
                this.currentUser.contact.lastName + " sent you an invitation!",
            content: "\n      \n      "
        };
        this._accountApi.sendEmail({ emails: emails, emailData: emailData }).subscribe(function () {
            _this.loading = false;
            _this.toastr.success('Emails have been sent');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SendInvitesComponent.prototype, "linkRef", void 0);
    SendInvitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-invites',
            template: __webpack_require__(/*! ./send-invites.component.html */ "./src/pages/base/invitations/components/send-invites/send-invites.component.html"),
            styles: [__webpack_require__(/*! ./send-invites.component.scss */ "./src/pages/base/invitations/components/send-invites/send-invites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["AccountApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["InvitationApi"]])
    ], SendInvitesComponent);
    return SendInvitesComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/invitations/invitations.module.ts":
/*!**********************************************************!*\
  !*** ./src/pages/base/invitations/invitations.module.ts ***!
  \**********************************************************/
/*! exports provided: InvitationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsModule", function() { return InvitationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-moment */ "./node_modules/angular2-moment/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _modules_table_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/table/table.module */ "./src/modules/table/table.module.ts");
/* harmony import */ var _components_invitations_invitations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/invitations/invitations.component */ "./src/pages/base/invitations/components/invitations/invitations.component.ts");
/* harmony import */ var _components_send_invites_send_invites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/send-invites/send-invites.component */ "./src/pages/base/invitations/components/send-invites/send-invites.component.ts");
/* harmony import */ var _components_invites_list_invites_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/invites-list/invites-list.component */ "./src/pages/base/invitations/components/invites-list/invites-list.component.ts");













var InvitationsModule = /** @class */ (function () {
    function InvitationsModule() {
    }
    InvitationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_invitations_invitations_component__WEBPACK_IMPORTED_MODULE_10__["InvitationsComponent"], _components_send_invites_send_invites_component__WEBPACK_IMPORTED_MODULE_11__["SendInvitesComponent"], _components_invites_list_invites_list_component__WEBPACK_IMPORTED_MODULE_12__["InvitesListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_7__["WinitCommonModule"],
                angular2_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_8__["FormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_table_table_module__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_invitations_invitations_component__WEBPACK_IMPORTED_MODULE_10__["InvitationsComponent"]
                    }
                ])
            ]
        })
    ], InvitationsModule);
    return InvitationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-base-invitations-invitations-module.js.map