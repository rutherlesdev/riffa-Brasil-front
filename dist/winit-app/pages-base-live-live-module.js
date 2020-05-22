(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-base-live-live-module"],{

/***/ "./src/pages/base/live/components/live-item/live-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/pages/base/live/components/live-item/live-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" *ngIf=\"raffle\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"image-wrapper\">\r\n        <div class=\"images\">\r\n          <div class=\"img\" [ngClass]=\"{'active': selectionIndex === i}\" [imageLoader]=\"item\"\r\n            *ngFor=\"let item of raffle?.product?.images; let i = index\" (click)=\"selectionIndex = i\"></div>\r\n        </div>\r\n        <div class=\"mainImage\">\r\n          <img [src]=\"raffle?.product?.images[selectionIndex]\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <h3 class=\"my-3\">{{raffle?.name}}</h3>\r\n\r\n      <small class=\"text-sm\"\r\n        innerHTML=\"{{(raffle?.product?.description | markdown) || 'No Description for this raffle'}}\"></small>\r\n\r\n      <div class=\"more-detail\">\r\n        <hr>\r\n        <span class=\"my-3 price\">\r\n          <h5 class=\"text-lg text-secondary\">{{raffle.price | ccurrency}}</h5>\r\n          <div class=\"mr-4\"></div>\r\n          <div class=\"text-lg text-danger no-good\">{{raffle.retailPrice | ccurrency}}</div>\r\n        </span>\r\n\r\n        <h6 class=\"my-2\" *ngIf=\"!isEnded\">\r\n          {{deadline?.days || 'dias' }}\r\n          {{deadline?.days ? 'dias': ''}}\r\n          {{deadline?.hours || '' }}\r\n          {{deadline?.hours ? 'hrs': ''}}\r\n          {{deadline?.minutes || '' }} mins\r\n          {{deadline?.seconds || '' }} segundos restantes</h6>\r\n\r\n        <!-- <small class=\"mb-4\">{{entriesLeft}} raffle entires left</small> -->\r\n        <app-progress-bar class=\"mt-1 mb-1\" text=\"{{entriesLeft}} raffle entries left\" [value]=\"entriesLeft\">\r\n        </app-progress-bar>\r\n\r\n\r\n        <span class=\"my-3 price\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"isEnded\" (click)=\"scrollTo('play-raffle')\" angulartics2On=\"click\" angularticsAction=\"PickNumbers\" angularticsLabel=\"PlayNowButton\" [angularticsCategory]=\"'RaffleItemPage'\">Jogue agora</button>\r\n          <div class=\"mr-4\"></div>\r\n          <button class=\"btn btn-primary\" [disabled]=\"isEnded\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\r\n            [autoClose]=\"'outside'\" #popover=\"ngbPopover\" angulartics2On=\"click\" angularticsAction=\"PickNumbers\" angularticsLabel=\"LuckyDipButton\" [angularticsCategory]=\"'RaffleItemPage'\">\r\n            Seleção aleatória\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"play-raffle\" class=\"pt-3 my-5\" *ngIf=\"!isEnded\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 col-lg-8\">\r\n        <app-draw-picker *ngIf=\"entries\" [entries]=\"entries\" [max]=\"raffle.maxOptions\"\r\n          [maxSelection]=\"raffle.maxUserSelection\" [userSelection]=\"userEntries\" (emitEntries)=\"userEntries = $event\">\r\n        </app-draw-picker>\r\n      </div>\r\n      <div class=\"col-md-4 col-lg-4\">\r\n        <!-- TrustBox widget - Micro Review Count -->\r\n        <div class=\"trustpilot-widget\" data-locale=\"en-GB\" data-template-id=\"5419b6a8b0d04a076446a9ad\"\r\n          data-businessunit-id=\"5d0784964b7e5500018c5188\" data-style-height=\"24px\" data-style-width=\"100%\"\r\n          data-theme=\"light\"> </div> <!-- End TrustBox widget -->\r\n        <div class=\"tutorial\">\r\n          <h4 class=\"mb-3\">Como jogar</h4>\r\n          <ul>\r\n            <li>Você pode selecionar até <b>{{raffle.maxUserSelection}}números</b> dessa rifa</li>\r\n            <li>Os números que já foram utilizados aparecerão como <span class=\"text-secondary p-1 prev-selected\">18</span>\r\n            </li>\r\n            <li>Os números digitados anteriormente aparecerão como <span\r\n                class=\"bg-danger text-light p-1 prev-user-selected\">23</span>\r\n            </li>\r\n            <li>Seus números atualmente selecionados aparecerão como<span\r\n                class=\"bg-secondary text-light p-1 current-user-selected\">23</span>\r\n            </li>\r\n            <li>selecionados<span class=\"btn-sm btn btn-primary\">Confirme e pague!</span> botão para pagar pelo seu número selecionado\r\n              números e digite o sorteio</li>\r\n            <li>Boa sorte!</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-lg mt-2 ml-auto btn-primary\" [disabled]=\"!hasNewEntries\" (click)=\"verifyPay()\" angulartics2On=\"click\" angularticsAction=\"VerifyPay\" angularticsLabel=\"VerifyPayButton\" [angularticsCategory]=\"'RaffleItemPage'\">Confirme e pague! <i class=\"fa fa-shopping-cart\"></i></button>\r\n  </div>\r\n\r\n  <div class=\"item-tabs\">\r\n    <ngb-tabset>\r\n      <ngb-tab title=\"Descrição\">\r\n        <ng-template ngbTabContent>\r\n          <p class=\"p-4\" innerHTML=\"{{(raffle.description | markdown) || 'Nenhuma descrição definida para este produto'}}\"></p>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Termos\">\r\n        <ng-template ngbTabContent>\r\n          <p class=\"p-4\" innerHTML=\"{{(raffle.terms | markdown) || 'Nenhum termo definido para este sorteio'}}\">\r\n          </p>\r\n\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #popContent>\r\n  <p>Escolha quantos números de mergulho de sorte você deseja. Este sorteio tem no máximo<span class=\"badge badge-success\">\r\n      {{raffle.maxUserSelection}}</span> seleção</p>\r\n  <form-field suffix=\"true\" size=\"lg\">\r\n    <input type=\"number\" inputRef min=\"0\" [max]=\"raffle.maxUserSelection\" [(ngModel)]=\"luckyDipSelection\">\r\n    <button suffix class=\"btn btn-sm\" (click)=\"doLuckyDip()\" angulartics2On=\"click\" angularticsAction=\"GetLuckyDipNumbers\" angularticsLabel=\"LuckyDipGoButton\" [angularticsCategory]=\"'RaffleItemLuckyDip'\">Go</button>\r\n  </form-field>\r\n  <hr>\r\n  <div class=\"d-block\">\r\n    <div class=\"badge badge-primary badge-lg mx-2 p-1 txt-lg\" *ngFor=\"let item of userEntries\">{{item}}</div>\r\n  </div>\r\n\r\n  <button *ngIf=\"userEntries\" class=\"btn mt-3 ml-auto btn-primary\" [disabled]=\"!hasNewEntries\"\r\n    (click)=\"verifyPay()\" angulartics2On=\"click\" angularticsAction=\"VerifyPay\" angularticsLabel=\"VerifyPayButton\" [angularticsCategory]=\"'RaffleItemLuckyDip'\">Verify and\r\n    Pay! <i class=\"fa fa-shopping-cart\"></i></button>\r\n</ng-template>\r\n<ng-template #popTitle>Seleção aleatória</ng-template>\r\n"

/***/ }),

/***/ "./src/pages/base/live/components/live-item/live-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/base/live/components/live-item/live-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .image-wrapper {\n  display: flex; }\n  :host .image-wrapper .images {\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px; }\n  :host .image-wrapper .images .img {\n      width: 60px;\n      height: 60px;\n      border: 1px solid grey;\n      background-size: contain !important;\n      margin: 3px 0; }\n  :host .image-wrapper .images .img.active {\n        background-blend-mode: overlay;\n        background-color: rgba(0, 0, 0, 0.5); }\n  :host .image-wrapper .mainImage img {\n    max-width: 100%; }\n  :host .price {\n  display: flex; }\n  :host .price .no-good {\n    text-decoration: line-through; }\n  :host .more-detail {\n  width: 75%; }\n  :host #play-raffle .tutorial {\n  background: #f2f2f2;\n  padding: 15px 10px;\n  border-radius: 4px;\n  font-size: 14px; }\n  :host #play-raffle .tutorial ul {\n    -webkit-padding-start: 17px;\n            padding-inline-start: 17px; }\n  :host #play-raffle .tutorial ul li {\n      margin: 10px 0; }\n  :host #play-raffle .tutorial ul li .prev-user-selected,\n      :host #play-raffle .tutorial ul li .prev-selected,\n      :host #play-raffle .tutorial ul li .current-user-selected {\n        width: 25px;\n        height: 25px;\n        border-radius: 50%;\n        font-size: 14px;\n        margin-left: 5px; }\n  :host #play-raffle .tutorial ul li .prev-selected {\n        background: #d3d3d3; }\n  :host ::ng-deep .tab-content {\n  border: 1px solid #dde2e5;\n  border-top: none;\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n  :host .txt-lg {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9iYXNlL2xpdmUvY29tcG9uZW50cy9saXZlLWl0ZW0vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxyaWZmYS1CcmFzaWwtZnJvbnQvc3JjXFxwYWdlc1xcYmFzZVxcbGl2ZVxcY29tcG9uZW50c1xcbGl2ZS1pdGVtXFxsaXZlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFhLEVBQUE7RUFGakI7SUFLTSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTtFQVByQjtNQVVRLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLG1DQUFtQztNQUNuQyxhQUFhLEVBQUE7RUFkckI7UUFpQlUsOEJBQThCO1FBQzlCLG9DQUE0QixFQUFBO0VBbEJ0QztJQXlCUSxlQUFlLEVBQUE7RUF6QnZCO0VBK0JJLGFBQWEsRUFBQTtFQS9CakI7SUFrQ00sNkJBQTZCLEVBQUE7RUFsQ25DO0VBdUNJLFVBQVUsRUFBQTtFQXZDZDtFQTZDTSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFoRHJCO0lBbURRLDJCQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQW5EbEM7TUFzRFUsY0FBYyxFQUFBO0VBdER4Qjs7O1FBMkRZLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQS9ENUI7UUFtRVksbUJBQW1CLEVBQUE7RUFuRS9CO0VBNkVNLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTtFQWpGaEM7RUFzRkksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9iYXNlL2xpdmUvY29tcG9uZW50cy9saXZlLWl0ZW0vbGl2ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDA7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5JbWFnZSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubm8tZ29vZCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vcmUtZGV0YWlsIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuXHJcbiAgI3BsYXktcmFmZmxlIHtcclxuICAgIC50dXRvcmlhbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE3cHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICAgIC5wcmV2LXVzZXItc2VsZWN0ZWQsXHJcbiAgICAgICAgICAucHJldi1zZWxlY3RlZCxcclxuICAgICAgICAgIC5jdXJyZW50LXVzZXItc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJldi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGUyZTU7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHh0LWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/base/live/components/live-item/live-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/base/live/components/live-item/live-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: LiveItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveItemComponent", function() { return LiveItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _modules_auth_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/auth/components/auth/auth.component */ "./src/modules/auth/components/auth/auth.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment/payment.component */ "./src/pages/base/live/components/payment/payment.component.ts");






var LiveItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LiveItemComponent, _super);
    function LiveItemComponent(injector, _rt, _raffleApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this._raffleApi = _raffleApi;
        _this.raffle = new _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleDraw"]();
        _this.selectionIndex = 0;
        _this.userEntries = [];
        _this.luckyDipNumbers = [];
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    Object.defineProperty(LiveItemComponent.prototype, "isEnded", {
        get: function () {
            return new Date(this.raffle.endDate) < new Date();
        },
        enumerable: true,
        configurable: true
    });
    LiveItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) { return _this.getRaffle(param.id); });
        this.raffleEntriesRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleEntry"]);
    };
    LiveItemComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval);
        this._rt.onDisconnect();
    };
    LiveItemComponent.prototype.getRaffle = function (id) {
        var _this = this;
        this._raffleApi
            .findById(id, {
            where: { isDeleted: false },
            include: ['product', 'raffleEntries']
        })
            .subscribe(function (data) {
            _this.raffle = data;
            _this.entriesLeft = Math.round(_this.raffle.maxOptions - _this.raffle.raffleEntries.length);
            _this.setupTimer(_this.raffle);
            _this.raffleEntriesRef
                .on('change', {
                where: { isDeleted: false, raffleDrawId: _this.raffle.id }
            })
                .subscribe(function (rafEntry) {
                _this.entries = rafEntry;
                _this.entriesAsNumberArray = rafEntry.map(function (entry) { return entry.entryNumber; });
            });
        });
    };
    LiveItemComponent.prototype.scrollTo = function (item) {
        var element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }
    };
    LiveItemComponent.prototype.verifyPay = function () {
        var _this = this;
        if (!this.loggedIn) {
            this.dialog.open(_modules_auth_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], { data: { size: 'md', form: 'login' } });
        }
        else {
            this.dialog
                .openAlert({
                data: {
                    config: {
                        body: " Parab\u00E9ns Voc\u00EA escolheu os n\u00FAmeros para " + this.raffle.name + " Rifa",
                        footer: "<h4> \n                \n                 </h4>"
                    },
                    buttons: {
                        buttons: [
                            {
                                color: 'outline-danger',
                                text: 'Cancelar',
                                eventname: 'close'
                            },
                            {
                                color: 'secondary',
                                text: 'Pagar',
                                eventname: 'payment'
                            }
                        ]
                    }
                }
            })
                .afterClosed.subscribe(function (data) {
                if (data === 'payment') {
                    var raffleEntries_1 = _this.userEntries
                        .filter(function (obj) {
                        return _this.entries
                            .map(function (entry) { return entry.entryNumber; })
                            .indexOf(obj) === -1;
                    })
                        .map(function (entry) {
                        return new _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleEntry"]({
                            entryNumber: entry,
                            accountId: _this.currentUser.id,
                            isLuckyDip: _this.luckyDipNumbers.includes(entry)
                        });
                    });
                    _this.dialog
                        .open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"], {
                        data: { entries: raffleEntries_1, raffle: _this.raffle }
                    })
                        .afterClosed.subscribe(function (payment) {
                        if (payment === 'success') {
                            _this._raffleApi
                                .createManyRaffleEntries(_this.raffle.id, raffleEntries_1)
                                .subscribe(function () {
                                // this.userEntries = [];
                                _this.luckyDipNumbers = [];
                            });
                        }
                    });
                }
            });
        }
    };
    LiveItemComponent.prototype.doLuckyDip = function () {
        if (this.luckyDipSelection <= this.raffle.maxUserSelection) {
            this.userEntries = [];
            var i = 1;
            while (i <= this.luckyDipSelection) {
                var number = this.generateRandomNumber(this.raffle.maxOptions);
                if (!this.userEntries.includes(number) &&
                    !this.entriesAsNumberArray.includes(number)) {
                    this.luckyDipNumbers.push(number);
                    this.userEntries.push(number);
                    i++;
                }
            }
        }
        // for (let index = 0; index < this.luckyDipSelection; index++) {
        //   this.userEntries.push(this.generateRandomNumber(this.raffle.maxOptions))
        // }
    };
    Object.defineProperty(LiveItemComponent.prototype, "hasNewEntries", {
        get: function () {
            var _this = this;
            if (this.userEntries) {
                var data = this.userEntries.filter(function (obj) {
                    return _this.entries.map(function (entry) { return entry.entryNumber; }).indexOf(obj) === -1;
                });
                return data.length > 0 ? true : false;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LiveItemComponent.prototype.setupTimer = function (item) {
        var _this = this;
        var deadlineTime = new Date(item.endDate).getTime();
        var currentTime = new Date().getTime();
        var interval = 1000;
        var duration;
        duration = deadlineTime - currentTime;
        this.timerInterval = setInterval(function () {
            duration = Math.abs(duration - interval);
            _this.deadline = {
                seconds: Math.floor((duration / 1000) % 60),
                minutes: Math.floor((duration / 1000 / 60) % 60),
                hours: Math.floor((duration / (1000 * 60 * 60)) % 24),
                days: Math.floor(duration / (1000 * 60 * 60 * 24))
            };
        }, interval);
    };
    LiveItemComponent.prototype.generateRandomNumber = function (end) {
        return Math.floor(Math.random() * end) + 1;
    };
    LiveItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-item',
            template: __webpack_require__(/*! ./live-item.component.html */ "./src/pages/base/live/components/live-item/live-item.component.html"),
            styles: [__webpack_require__(/*! ./live-item.component.scss */ "./src/pages/base/live/components/live-item/live-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RealTime"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_3__["RaffleDrawApi"]])
    ], LiveItemComponent);
    return LiveItemComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/live/components/live/live.component.html":
/*!*****************************************************************!*\
  !*** ./src/pages/base/live/components/live/live.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <app-spinner [isLoading]=\"loading\">\r\n    <ng-container *ngIf=\"raffles && raffles.length > 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-8\">\r\n          <app-search placeholder=\"Procurar Rifa\" (event)=\"doSearch($event)\" angulartics2On=\"click\" angularticsAction=\"SearchRaffle\" angularticsLabel=\"SearchBar\" [angularticsCategory]=\"'LiveRaffleSearch'\"></app-search>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4\">\r\n          <!-- <app-filter [property]=\"raffles[0]\" (event)=\"sort($event)\"></app-filter> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-12 col-md-4 col-lg-3\" *ngFor=\"let item of raffles | orderBy: '-endDate'\">\r\n          <app-product-card [raffle]=\"item\"></app-product-card>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"raffles && raffles.length < 1\">\r\n      <div class=\"jumbotron text-center\">\r\n        <h1 class=\"display-4\">Sem Jogos no Momento</h1>\r\n        <p class=\"lead\">Ainda não há sorteios disponíveis - verifique novamente em breve se há novas competições</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/base/live/components/live/live.component.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/base/live/components/live/live.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYmFzZS9saXZlL2NvbXBvbmVudHMvbGl2ZS9saXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/base/live/components/live/live.component.ts":
/*!***************************************************************!*\
  !*** ./src/pages/base/live/components/live/live.component.ts ***!
  \***************************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");





var LiveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LiveComponent, _super);
    function LiveComponent(injector, _rt, orderBy) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._rt = _rt;
        _this.orderBy = orderBy;
        _this.raffles = [];
        _this.rafflesBackup = [];
        _this._rt.onReady().subscribe(function () { });
        return _this;
    }
    LiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raffleRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_4__["RaffleDraw"]);
        this.raffleRef.on('change', {
            where: { isDeleted: false, endDate: { gt: new Date() }, startDate: { lt: new Date() } }, include: ['product', 'raffleEntries']
        }).subscribe(function (data) {
            return _this.rafflesBackup = _this.raffles = data;
        });
    };
    LiveComponent.prototype.doSearch = function (val) {
        if (val && val.trim() !== '') {
            this.raffles = this.rafflesBackup.filter(function (raffle) { return raffle.name.toLowerCase().indexOf(val.toLowerCase()) !== -1; });
        }
        else {
            this.raffles = this.rafflesBackup.slice();
        }
    };
    LiveComponent.prototype.sort = function (prop, by) {
        // sort by asc and desc and by property
        this.raffles = this.orderBy.transform(this.raffles, by + prop);
    };
    LiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/pages/base/live/components/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.scss */ "./src/pages/base/live/components/live/live.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_4__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], LiveComponent);
    return LiveComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/base/live/components/payment/payment.component.html":
/*!***********************************************************************!*\
  !*** ./src/pages/base/live/components/payment/payment.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper m-4 p-2\">\r\n  <h4 class=\"mb-3\">Pague agora para garantir os números</h4>\r\n\r\n  <div class=\"item-details mt-4 p-4 text-secondary card\">\r\n    <h6>\r\n      Você escolheu <b>{{entries.length}}</b> números neste sorteio.\r\n      <br> Seu total é <b> {{amount | ccurrency}}</b>\r\n    </h6>\r\n\r\n    <div class=\"discount text-danger\" *ngIf=\"hasInviteDiscount\">\r\n      <hr>\r\n      <ng-container *ngIf=\"!discountClaimed\">\r\n        <h6>Você tem um desconto de R$ 5, deseja reivindicá-lo?</h6>\r\n        <button type=\"button\" (click)=\"claimDiscount()\" class=\"btn btn-secondary mr-4\" [btnStatus]=\"loading\" angulartics2On=\"click\" angularticsAction=\"ClaimDiscount\" angularticsLabel=\"DiscountButton\" [angularticsCategory]=\"'ClaimDiscountSection'\">\r\n          Reivindicar desconto\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"discountClaimed\">\r\n        <h6 class=\"text-danger\">Você reivindicou seu desconto!</h6>\r\n      </ng-container>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <app-progress-bar class=\"mt-1 mb-1\" [value]=\"(progress/180000) * 100\">\r\n  </app-progress-bar>\r\n\r\n  <div class=\"stripe-image my-3\">\r\n    <img src=\"./assets/images/stripe.png\" alt=\"\">\r\n  </div>\r\n\r\n\r\n  <form (ngSubmit)=\"buy()\" #form=\"ngForm\">\r\n    <form-field label=\"Nome\">\r\n      <input inputRef [(ngModel)]=\"name\" name=\"name\" placeholder=\"Jane Doe\">\r\n    </form-field>\r\n\r\n    <div class=\"card-wrapper mt-3 mb-5\">\r\n      <label>Digite os detalhes do cartão</label>\r\n      <div id=\"card-element\"></div>\r\n    </div>\r\n\r\n    <div class=\"text-right\">\r\n      <button type=\"submit\" class=\"btn btn-secondary mr-4\" [btnStatus]=\"loading\" angulartics2On=\"click\" angularticsAction=\"RafflePay\" angularticsLabel=\"RafflePayButton\" [angularticsCategory]=\"'RafflePayPopUp'\">\r\n        Pagar\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"closeModal()\" angulartics2On=\"click\" angularticsAction=\"RaffleCancel\" angularticsLabel=\"RaffleCancelButton\" [angularticsCategory]=\"'RafflePayPopUp'\">\r\n        Cancelar\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n<!-- <label>Enter Address details</label>\r\n    <form-field>\r\n      <input inputRef [(ngModel)]=\"address.addressLine1\" name=\"name\" placeholder=\"Address line 1\">\r\n    </form-field>\r\n    <form-field>\r\n      <input inputRef [(ngModel)]=\"address.addressLine2\" name=\"name\" placeholder=\"Address line 2\">\r\n    </form-field>\r\n    <form-field>\r\n      <input inputRef [(ngModel)]=\"address.city\" name=\"name\" placeholder=\"City\">\r\n    </form-field>\r\n    <form-field>\r\n      <input inputRef [(ngModel)]=\"address.postCode\" name=\"name\" placeholder=\"Post Code\">\r\n    </form-field> -->\r\n"

/***/ }),

/***/ "./src/pages/base/live/components/payment/payment.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/base/live/components/payment/payment.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .stripe-image {\n  margin-left: -20px; }\n  :host .stripe-image img {\n    max-width: 50%; }\n  :host #card-element {\n  display: block;\n  border: 1px solid #ced4da;\n  border-radius: 4px; }\n  :host .StripeElement {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n  transition: box-shadow 150ms ease; }\n  :host .StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df; }\n  :host .StripeElement--invalid {\n  border-color: #fa755a; }\n  :host .StripeElement--webkit-autofill {\n  background-color: #fefde5 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9iYXNlL2xpdmUvY29tcG9uZW50cy9wYXltZW50L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccmlmZmEtQnJhc2lsLWZyb250L3NyY1xccGFnZXNcXGJhc2VcXGxpdmVcXGNvbXBvbmVudHNcXHBheW1lbnRcXHBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxrQkFBa0IsRUFBQTtFQUh0QjtJQU1NLGNBQWMsRUFBQTtFQU5wQjtFQVdJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7RUFidEI7RUFrQkksc0JBQXNCO0VBRXRCLFlBQVk7RUFFWixrQkFBa0I7RUFFbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFJdkIsaUNBQWlDLEVBQUE7RUE5QnJDO0VBa0NJLCtCQUErQixFQUFBO0VBbENuQztFQXNDSSxxQkFBcUIsRUFBQTtFQXRDekI7RUEwQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2Jhc2UvbGl2ZS9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgLnN0cmlwZS1pbWFnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY2FyZC1lbGVtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC8vIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLlN0cmlwZUVsZW1lbnQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLy8gYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2U2ZWJmMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XHJcbiAgfVxyXG5cclxuICAuU3RyaXBlRWxlbWVudC0taW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYTc1NWE7XHJcbiAgfVxyXG5cclxuICAuU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZkZTUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/base/live/components/payment/payment.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/base/live/components/payment/payment.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_currency_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/pipes/currency/custom-currency.pipe */ "./src/common/pipes/currency/custom-currency.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _common_sdk_services_custom_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/sdk/services/custom/Payment */ "./src/common/sdk/services/custom/Payment.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-config */ "./src/modules/dialog/helpers/dialog-config.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-ref */ "./src/modules/dialog/helpers/dialog-ref.ts");










var stripe = window.Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].STRIPE_PUB_KEY);
var elements = stripe.elements();
var cardElement = elements.create('card', {
    style: {
        base: {
            // iconColor: '#666EE8',
            color: '#31325F',
            fontWeight: 300,
            fontFamily: '"Montserrat", Helvetica, sans-serif',
            fontSize: '18px',
            '::placeholder': {
                color: '#CFD7E0'
            }
        }
    }
});
var PaymentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentComponent, _super);
    function PaymentComponent(injector, _dialogRef, _dialogConfig, _paymentApi, _raffleEntryApi, _invitationApi, _currency) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._dialogRef = _dialogRef;
        _this._dialogConfig = _dialogConfig;
        _this._paymentApi = _paymentApi;
        _this._raffleEntryApi = _raffleEntryApi;
        _this._invitationApi = _invitationApi;
        _this._currency = _currency;
        _this.address = null;
        _this.cardElement = cardElement;
        _this.progress = 180000;
        return _this;
    }
    Object.defineProperty(PaymentComponent.prototype, "entries", {
        get: function () {
            return this._dialogConfig.data.entries;
        },
        enumerable: true,
        configurable: true
    });
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardElement.mount('#card-element');
        this.name =
            this.currentUser.contact.firstName +
                ' ' +
                this.currentUser.contact.lastName;
        this.raffle = this._dialogConfig.data.raffle;
        this.raffleEntries = this._dialogConfig.data.entries.map(function (e) { return e.entryNumber; });
        this.getInvites();
        this.amount = this.raffleEntries.length * this.raffle.price;
        setInterval(function () {
            if (_this.progress <= 0) {
                _this.progress = 180000;
            }
            _this.progress = _this.progress - 1000;
        }, 1000);
    };
    PaymentComponent.prototype.buy = function () {
        var _this = this;
        this.loading = true;
        this.checkRaffleEntriesB4Payment().then(function (isTaken) {
            if (isTaken) {
                _this.toastr.warning('Your Raffle Entries have already been taken, please select new raffle numbers');
                _this._dialogRef.close();
                _this.loading = false;
            }
            else {
                _this._makePayment();
            }
        });
    };
    PaymentComponent.prototype.claimDiscount = function () {
        this.discountClaimed = true;
        this.amount = this._getDiscount(this.raffleEntries.length * this.raffle.price);
    };
    PaymentComponent.prototype.getInvites = function () {
        var _this = this;
        this._invitationApi
            .findOne({
            where: {
                or: [
                    {
                        hasSignedUp: true,
                        isDeleted: false,
                        receiverEmail: this.currentUser.email,
                        receiverClaimed: false
                    },
                    {
                        hasSignedUp: true,
                        isDeleted: false,
                        accountId: this.currentUser.id,
                        senderClaimed: false
                    }
                ]
            }
        })
            .subscribe(function (res) {
            _this.invite = res;
            _this.hasInviteDiscount = res.id ? true : false;
            _this._invitationApi
                .findOne({
                where: {
                    hasSignedUp: true,
                    isDeleted: false,
                    accountId: _this.currentUser.id,
                    senderClaimed: true
                }
            })
                .subscribe(function (resp) {
                if (resp) {
                    _this.hasInviteDiscount = false;
                }
            });
        });
    };
    PaymentComponent.prototype._getDiscount = function (amount) {
        return amount - 5;
    };
    PaymentComponent.prototype._makePayment = function () {
        var _this = this;
        this._paymentApi
            .start({
            amount: this.amount * 100,
            currency: 'gbp'
        })
            .subscribe(function (res) {
            stripe
                .handleCardPayment(res.client_secret, _this.cardElement, {
                payment_method_data: {
                    billing_details: {
                        name: _this.name
                    }
                },
                receipt_email: _this.currentUser.email
            })
                .then(function (result) {
                _this.loading = false;
                if (result.error) {
                    // Display error.message in your UI.
                    _this.toastr.error(result.error.message);
                }
                else {
                    _this._updateInvite();
                    _this._dialogRef.close('success');
                    _this.dialog.openAlert({
                        data: {
                            config: {
                                heading: 'Payment Successful',
                                body: "You have successfuly made a payment of " + _this._currency.transform(_this.amount) + " for " + _this.raffleEntries.length + " raffle tickets"
                            }
                        }
                    });
                }
            });
        }, function (error) {
            _this.toastr.error(error.message);
        });
    };
    PaymentComponent.prototype._updateInvite = function () {
        if (this.invite && this.invite.accountId === this.currentUser.id) {
            this.invite.senderClaimed = true;
        }
        else if (this.invite &&
            this.invite.receiverEmail === this.currentUser.email) {
            this.invite.receiverClaimed = true;
        }
        this._invitationApi.upsert(this.invite).subscribe();
    };
    PaymentComponent.prototype.closeModal = function () {
        this._dialogRef.close();
    };
    PaymentComponent.prototype.checkRaffleEntriesB4Payment = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._raffleEntryApi
                .find({ where: { raffleDrawId: _this.raffle.id, isDeleted: false } })
                .subscribe(function (data) {
                var raffleEntry = !!data.find(function (e) {
                    return _this.raffleEntries.includes(e.entryNumber);
                });
                resolve(raffleEntry);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PaymentComponent.prototype, "form", void 0);
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_currency_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["CustomCurrencyPipe"]],
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/pages/base/live/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/pages/base/live/components/payment/payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_9__["DialogRef"],
            _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_8__["DialogConfig"],
            _common_sdk_services_custom_Payment__WEBPACK_IMPORTED_MODULE_6__["PaymentApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_5__["RaffleEntryApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_5__["InvitationApi"],
            _common_pipes_currency_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["CustomCurrencyPipe"]])
    ], PaymentComponent);
    return PaymentComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/base/live/live.module.ts":
/*!********************************************!*\
  !*** ./src/pages/base/live/live.module.ts ***!
  \********************************************/
/*! exports provided: LiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveModule", function() { return LiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-moment */ "./node_modules/angular2-moment/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _components_live_item_live_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/live-item/live-item.component */ "./src/pages/base/live/components/live-item/live-item.component.ts");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/live/live.component */ "./src/pages/base/live/components/live/live.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/pages/base/live/components/payment/payment.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");















var LiveModule = /** @class */ (function () {
    function LiveModule() {
    }
    LiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_live_live_component__WEBPACK_IMPORTED_MODULE_12__["LiveComponent"], _components_live_item_live_item_component__WEBPACK_IMPORTED_MODULE_11__["LiveItemComponent"], _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"]],
            entryComponents: [_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_7__["WinitCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_10__["FormFieldModule"],
                angular2_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_14__["MarkdownModule"].forChild(),
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_live_live_component__WEBPACK_IMPORTED_MODULE_12__["LiveComponent"]
                    },
                    {
                        path: ':id',
                        component: _components_live_item_live_item_component__WEBPACK_IMPORTED_MODULE_11__["LiveItemComponent"]
                    }
                ])
            ]
        })
    ], LiveModule);
    return LiveModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-base-live-live-module.js.map