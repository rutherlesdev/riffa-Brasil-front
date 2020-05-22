(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-admin-content-content-module~pages-base-winners-winners-module"],{

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./src/assets/data/uk-county.ts":
/*!**************************************!*\
  !*** ./src/assets/data/uk-county.ts ***!
  \**************************************/
/*! exports provided: counties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counties", function() { return counties; });
var counties = [
    {
        name: 'Avon',
        abbreviation: 'AVN',
        country: 'England'
    },
    {
        name: 'Bedfordshire',
        abbreviation: 'BDF',
        country: 'England'
    },
    {
        name: 'Berkshire',
        abbreviation: 'BRK',
        country: 'England'
    },
    {
        name: 'Buckinghamshire',
        abbreviation: 'BKM',
        country: 'England'
    },
    {
        name: 'Cambridgeshire',
        abbreviation: 'CAM',
        country: 'England'
    },
    {
        name: 'Cheshire',
        abbreviation: 'CHS',
        country: 'England'
    },
    {
        name: 'Cleveland',
        abbreviation: 'CLV',
        country: 'England'
    },
    {
        name: 'Cornwall',
        abbreviation: 'CON',
        country: 'England'
    },
    {
        name: 'Cumbria',
        abbreviation: 'CMA',
        country: 'England'
    },
    {
        name: 'Derbyshire',
        abbreviation: 'DBY',
        country: 'England'
    },
    {
        name: 'Devon',
        abbreviation: 'DEV',
        country: 'England'
    },
    {
        name: 'Dorset',
        abbreviation: 'DOR',
        country: 'England'
    },
    {
        name: 'Durham',
        abbreviation: 'DUR',
        country: 'England'
    },
    {
        name: 'East Sussex',
        abbreviation: 'SXE',
        country: 'England'
    },
    {
        name: 'Essex',
        abbreviation: 'ESS',
        country: 'England'
    },
    {
        name: 'Gloucestershire',
        abbreviation: 'GLS',
        country: 'England'
    },
    {
        name: 'Hampshire',
        abbreviation: 'HAM',
        country: 'England'
    },
    {
        name: 'Herefordshire',
        abbreviation: 'HEF',
        country: 'England'
    },
    {
        name: 'Hertfordshire',
        abbreviation: 'HRT',
        country: 'England'
    },
    {
        name: 'Isle of Wight',
        abbreviation: 'IOW',
        country: 'England'
    },
    {
        name: 'Kent',
        abbreviation: 'KEN',
        country: 'England'
    },
    {
        name: 'Lancashire',
        abbreviation: 'LAN',
        country: 'England'
    },
    {
        name: 'Leicestershire',
        abbreviation: 'LEI',
        country: 'England'
    },
    {
        name: 'Lincolnshire',
        abbreviation: 'LIN',
        country: 'England'
    },
    {
        name: 'London',
        abbreviation: 'LDN',
        country: 'England'
    },
    {
        name: 'Merseyside',
        abbreviation: 'MSY',
        country: 'England'
    },
    {
        name: 'Norfolk',
        abbreviation: 'NFK',
        country: 'England'
    },
    {
        name: 'Northamptonshire',
        abbreviation: 'NTH',
        country: 'England'
    },
    {
        name: 'Northumberland',
        abbreviation: 'NBL',
        country: 'England'
    },
    {
        name: 'North Yorkshire',
        abbreviation: 'NYK',
        country: 'England'
    },
    {
        name: 'Nottinghamshire',
        abbreviation: 'NTT',
        country: 'England'
    },
    {
        name: 'Oxfordshire',
        abbreviation: 'OXF',
        country: 'England'
    },
    {
        name: 'Rutland',
        abbreviation: 'RUT',
        country: 'England'
    },
    {
        name: 'Shropshire',
        abbreviation: 'SAL',
        country: 'England'
    },
    {
        name: 'Somerset',
        abbreviation: 'SOM',
        country: 'England'
    },
    {
        name: 'South Yorkshire',
        abbreviation: 'SYK',
        country: 'England'
    },
    {
        name: 'Staffordshire',
        abbreviation: 'STS',
        country: 'England'
    },
    {
        name: 'Suffolk',
        abbreviation: 'SFK',
        country: 'England'
    },
    {
        name: 'Surrey',
        abbreviation: 'SRY',
        country: 'England'
    },
    {
        name: 'Tyne and Wear',
        abbreviation: 'TWR',
        country: 'England'
    },
    {
        name: 'Warwickshire',
        abbreviation: 'WAR',
        country: 'England'
    },
    {
        name: 'West Midlands',
        abbreviation: 'WMD',
        country: 'England'
    },
    {
        name: 'West Sussex',
        abbreviation: 'SXW',
        country: 'England'
    },
    {
        name: 'West Yorkshire',
        abbreviation: 'WYK',
        country: 'England'
    },
    {
        name: 'Wiltshire',
        abbreviation: 'WIL',
        country: 'England'
    },
    {
        name: 'Worcestershire',
        abbreviation: 'WOR',
        country: 'England'
    },
    {
        name: 'Clwyd',
        abbreviation: 'CWD',
        country: 'Wales'
    },
    {
        name: 'Dyfed',
        abbreviation: 'DFD',
        country: 'Wales'
    },
    {
        name: 'Gwent',
        abbreviation: 'GNT',
        country: 'Wales'
    },
    {
        name: 'Gwynedd',
        abbreviation: 'GWN',
        country: 'Wales'
    },
    {
        name: 'Mid Glamorgan',
        abbreviation: 'MGM',
        country: 'Wales'
    },
    {
        name: 'Powys',
        abbreviation: 'POW',
        country: 'Wales'
    },
    {
        name: 'South Glamorgan',
        abbreviation: 'SGM',
        country: 'Wales'
    },
    {
        name: 'West Glamorgan',
        abbreviation: 'WGM',
        country: 'Wales'
    },
    {
        name: 'Aberdeenshire',
        abbreviation: 'ABD',
        country: 'Scotland'
    },
    {
        name: 'Angus',
        abbreviation: 'ANS',
        country: 'Scotland'
    },
    {
        name: 'Argyll',
        abbreviation: 'ARL',
        country: 'Scotland'
    },
    {
        name: 'Ayrshire',
        abbreviation: 'AYR',
        country: 'Scotland'
    },
    {
        name: 'Banffshire',
        abbreviation: 'BAN',
        country: 'Scotland'
    },
    {
        name: 'Berwickshire',
        abbreviation: 'BEW',
        country: 'Scotland'
    },
    {
        name: 'Bute',
        abbreviation: 'BUT',
        country: 'Scotland'
    },
    {
        name: 'Caithness',
        abbreviation: 'CAI',
        country: 'Scotland'
    },
    {
        name: 'Clackmannanshire',
        abbreviation: 'CLK',
        country: 'Scotland'
    },
    {
        name: 'Dumfriesshire',
        abbreviation: 'DGY',
        country: 'Scotland'
    },
    {
        name: 'Dunbartonshire',
        abbreviation: 'DNB',
        country: 'Scotland'
    },
    {
        name: 'East Lothian',
        abbreviation: 'ELN',
        country: 'Scotland'
    },
    {
        name: 'Fife',
        abbreviation: 'FIF',
        country: 'Scotland'
    },
    {
        name: 'Inverness-shire',
        abbreviation: 'INV',
        country: 'Scotland'
    },
    {
        name: 'Kincardineshire',
        abbreviation: 'KCD',
        country: 'Scotland'
    },
    {
        name: 'Kinross-shire',
        abbreviation: 'KRS',
        country: 'Scotland'
    },
    {
        name: 'Kirkcudbrightshire',
        abbreviation: 'KKD',
        country: 'Scotland'
    },
    {
        name: 'Lanarkshire',
        abbreviation: 'LKS',
        country: 'Scotland'
    },
    {
        name: 'Midlothian',
        abbreviation: 'MLN',
        country: 'Scotland'
    },
    {
        name: 'Moray',
        abbreviation: 'MOR',
        country: 'Scotland'
    },
    {
        name: 'Nairnshire',
        abbreviation: 'NAI',
        country: 'Scotland'
    },
    {
        name: 'Orkney',
        abbreviation: 'OKI',
        country: 'Scotland'
    },
    {
        name: 'Peeblesshire',
        abbreviation: 'PEE',
        country: 'Scotland'
    },
    {
        name: 'Perthshire',
        abbreviation: 'PER',
        country: 'Scotland'
    },
    {
        name: 'Renfrewshire',
        abbreviation: 'RFW',
        country: 'Scotland'
    },
    {
        name: 'Ross-shire',
        abbreviation: 'ROC',
        country: 'Scotland'
    },
    {
        name: 'Roxburghshire',
        abbreviation: 'ROX',
        country: 'Scotland'
    },
    {
        name: 'Selkirkshire',
        abbreviation: 'SEL',
        country: 'Scotland'
    },
    {
        name: 'Shetland',
        abbreviation: 'SHI',
        country: 'Scotland'
    },
    {
        name: 'Stirlingshire',
        abbreviation: 'STI',
        country: 'Scotland'
    },
    {
        name: 'Sutherland',
        abbreviation: 'SUT',
        country: 'Scotland'
    },
    {
        name: 'West Lothian',
        abbreviation: 'WLN',
        country: 'Scotland'
    },
    {
        name: 'Wigtownshire',
        abbreviation: 'WIG',
        country: 'Scotland'
    },
    {
        name: 'Antrim',
        abbreviation: 'ANT',
        country: 'Northern Ireland'
    },
    {
        name: 'Armagh',
        abbreviation: 'ARM',
        country: 'Northern Ireland'
    },
    {
        name: 'Down',
        abbreviation: 'DOW',
        country: 'Northern Ireland'
    },
    {
        name: 'Fermanagh',
        abbreviation: 'FER',
        country: 'Northern Ireland'
    },
    {
        name: 'Londonderry',
        abbreviation: 'LDY',
        country: 'Northern Ireland'
    },
    {
        name: 'Tyrone',
        abbreviation: 'TYR',
        country: 'Northern Ireland'
    }
];


/***/ }),

/***/ "./src/common/services/common/common.service.ts":
/*!******************************************************!*\
  !*** ./src/common/services/common/common.service.ts ***!
  \******************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _assets_data_uk_county__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/uk-county */ "./src/assets/data/uk-county.ts");
/* harmony import */ var _helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sdk */ "./src/common/sdk/index.ts");








var CommonService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommonService, _super);
    function CommonService(injector, http, raffleApi, contentApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.raffleApi = raffleApi;
        _this.useWinnersDummyData = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        contentApi
            .find({ where: { type: 'useWinnersDummyData' } })
            .subscribe(function (item) {
            return _this.useWinnersDummyData.next(item.length > 0 ? item[0] : null);
        });
        return _this;
    }
    CommonService.prototype.getWinners = function () {
        var _this = this;
        return this.raffleApi
            .find({
            where: { isDeleted: false, endDate: { lt: new Date() } },
            include: ['product']
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (oldRaffles) {
            _this.oldRaffles = oldRaffles;
            return _this.getRandomUsers(oldRaffles.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (joins) {
            return _this.oldRaffles.map(function (entry, i) {
                return { raffleDraw: entry, account: { contact: joins[i] } };
            });
        }));
    };
    CommonService.prototype.getRandomUsers = function (res) {
        var _this = this;
        return this.http.get("https://randomuser.me/api/?results=" + res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.results.map(function (item) {
                return {
                    firstName: item.name.first,
                    lastName: item.name.last,
                    title: item.name.title,
                    picture: item.picture.large,
                    town: _assets_data_uk_county__WEBPACK_IMPORTED_MODULE_5__["counties"][_this.getRandomInt(_assets_data_uk_county__WEBPACK_IMPORTED_MODULE_5__["counties"].length)].name
                };
            });
        }));
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sdk__WEBPACK_IMPORTED_MODULE_7__["RaffleDrawApi"],
            _sdk__WEBPACK_IMPORTED_MODULE_7__["ContentApi"]])
    ], CommonService);
    return CommonService;
}(_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-admin-content-content-module~pages-base-winners-winners-module.js.map