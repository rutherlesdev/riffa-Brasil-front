(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-raffles-raffles-module"],{

/***/ "./node_modules/pikaday-time/pikaday.js":
/*!**********************************************!*\
  !*** ./node_modules/pikaday-time/pikaday.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (true) {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); } catch (e) {}
        module.exports = factory(moment);
    } else {}
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // Copy so we don't change the dates being passed in
        var _a = new Date(a.getTime());
        var _b = new Date(b.getTime());
        setToStartOfDay(_a);
        setToStartOfDay(_b);
        return _a.getTime() === _b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {
        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // data-attribute on the input field with an aria assistance tekst (only applied when `bound` is set)
        ariaLabel: 'Use the arrow keys to pick a date',

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        // set in `config` based on if showTime is set
        format: null,

        // an array giving the allowable input format(s).  As with moment,
        // the input formats may be either a single string or an array of strings.
        // Usually set in `config`
        inputFormats: null,

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // time
        showTime: true,
        showMinutes: true,
        showSeconds: false,
        use24hour: false,
        incrementHourBy: 1,
        incrementMinuteBy: 1,
        incrementSecondBy: 1,
        timeLabel: null,

        // option to prevent calendar from auto-closing after date is selected
        autoClose: true,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect : true,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            midnight      : 'Midnight',
            noon          : 'Noon'
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null,

        // Enable keyboard input
        keyboardInput: true
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if(!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }

            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL, pickWholeWeek, isRowSelected)
    {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },

    renderTimePicker = function(num_options, selected_val, select_class, display_func, increment_by) {
        increment_by = increment_by || 1;
        var to_return = '<td><select class="pika-select '+select_class+'">';
        for (var i = 0; i < num_options; i += increment_by) {
            to_return += '<option value="'+i+'" '+(i==selected_val ? 'selected' : '')+'>'+display_func(i)+'</option>'
        }
        to_return += '</select></td>';
        return to_return;
    },

    renderTime = function(hh, mm, ss, opts)
    {
        var to_return = '<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>' +
            (opts.timeLabel !== null ? '<td class="pika-time-label">'+opts.timeLabel+'</td>' : '') +
            renderTimePicker(24, hh, 'pika-select-hour', function(i) {
                if (opts.use24hour) {
                    return i;
                } else {
                    var to_return = (i%12) + (i<12 ? ' AM' : ' PM');
                    if (to_return == '0 AM') {
                        return opts.i18n.midnight;
                    } else if (to_return == '0 PM') {
                        return opts.i18n.noon;
                    } else {
                        return to_return;
                    }
                }
            },
            opts.incrementHourBy);

        if (opts.showMinutes) {
          to_return += '<td>:</td>' +
              renderTimePicker(60, mm, 'pika-select-minute', function(i) { if (i < 10) return "0" + i; return i }, opts.incrementMinuteBy);
        }

        if (opts.showSeconds) {
            to_return += '<td>:</td>' +
                renderTimePicker(60, ss, 'pika-select-second', function(i) { if (i < 10) return "0" + i; return i }, opts.incrementSecondBy);
        }
        return to_return + '</tr></tbody></table>';
    },



    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    var newDate = new Date(
                            target.getAttribute('data-pika-year'),
                            target.getAttribute('data-pika-month'),
                            target.getAttribute('data-pika-day')
                        );
                    // Preserve time selection when date changed
                    var prevDate = self._d || opts.defaultDate;
                    if (prevDate && isDate(prevDate) && opts.showTime) {
                        newDate.setHours(prevDate.getHours());
                        newDate.setMinutes(prevDate.getMinutes());
                        if (opts.showSeconds) {
                            newDate.setSeconds(prevDate.getSeconds());
                        }
                    }
                    self.setDate(newDate);
                    if (opts.bound) {
                        sto(function() {
                            if (opts.autoClose) {
                                self.hide();
                            }
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
            else if (hasClass(target, 'pika-select-hour')) {
                self.setTime(target.value);
            }
            else if (hasClass(target, 'pika-select-minute')) {
                self.setTime(null, target.value);
            }
            else if (hasClass(target, 'pika-select-second')) {
                self.setTime(null, null, target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (opts.parse) {
                date = opts.parse(opts.field.value, opts.format || opts.inputFormats);
            } else if (hasMoment) {
                date = moment(opts.field.value, opts.inputFormats, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };


        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (opts.autoClose && !self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') ||
                    pEl === opts.trigger ||
                    (opts.showTime && hasClass(pEl, 'pika-time-container'))) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.keyboardInput) {
            addEvent(document, 'keydown', self._onKeyChange);
        }

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.inputFormats).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {
        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.autoClose = !!opts.autoClose;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
               this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            // If no format is given, set based on showTime
            if (opts.format === null) {
                opts.format = 'YYYY-MM-DD';
                if (opts.showTime) {
                    opts.format += ' HH:mm:ss';
                }
            }

            if(!opts.inputFormats) {
                opts.inputFormats = opts.format;
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
              return this._o.toString(this._d, format);
            }
            if (hasMoment) {
              return moment(this._d).format(format);
            }
            if (this._o.showTime) {
                return this._d.toString();
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set time components
         * Currently defaulting to setting date to today if not set
         */
        setTime: function(hours, minutes, seconds) {
            if (!this._d) {
                this._d = new Date();
                this._d.setHours(0,0,0,0);
            }
            if (hours) {
                this._d.setHours(hours);
            }
            if (minutes) {
                this._d.setMinutes(minutes);
            }
            if (seconds) {
                this._d.setSeconds(seconds);
            }
            this.setDate(this._d);
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());

            if (this._o.showTime && !this._o.showSeconds) {
                this._d.setSeconds(0);
            } else if (!this._o.showTime) {
                setToStartOfDay(this._d);
            }

            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                if (!this._o.showTime) setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }
            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                if (!this._o.showTime) setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }
            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            if (opts.showTime) {
                var prevDate = this._d || this._o.defaultDate;
                html += '<div class="pika-time-container">' +
                        renderTime(
                            prevDate && isDate(prevDate) ? prevDate.getHours() : 0,
                            prevDate && isDate(prevDate) ? prevDate.getMinutes() : 0,
                            prevDate && isDate(prevDate) ? prevDate.getSeconds() : 0,
                            opts)
                    + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', opts.ariaLabel);
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            if (!opts.showTime) setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;

            // Ensure we only compare date portion when deciding to show a date in picker
            var minDate_date = opts.minDate ? new Date(opts.minDate.getFullYear(), opts.minDate.getMonth(), opts.minDate.getDate()) : null;
            var maxDate_date = opts.maxDate ? new Date(opts.maxDate.getFullYear(), opts.maxDate.getMonth(), opts.maxDate.getDate()) : null;

            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (minDate_date && day < minDate_date) ||
                                 (maxDate_date && day > maxDate_date) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        hasEvent: hasEvent,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                        enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                    };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
}));


/***/ }),

/***/ "./src/modules/date-picker/date-picker.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/date-picker/date-picker.module.ts ***!
  \*******************************************************/
/*! exports provided: DatePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerModule", function() { return DatePickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/date-picker.directive */ "./src/modules/date-picker/directives/date-picker.directive.ts");




var DatePickerModule = /** @class */ (function () {
    function DatePickerModule() {
    }
    DatePickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_3__["DatePickerDirective"]],
            exports: [_directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_3__["DatePickerDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], DatePickerModule);
    return DatePickerModule;
}());



/***/ }),

/***/ "./src/modules/date-picker/directives/date-picker.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/date-picker/directives/date-picker.directive.ts ***!
  \*********************************************************************/
/*! exports provided: DatePickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function() { return DatePickerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var pikaday_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pikaday-time */ "./node_modules/pikaday-time/pikaday.js");
/* harmony import */ var pikaday_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pikaday_time__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/extender */ "./src/common/helpers/extender.ts");





var DatePickerDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DatePickerDirective, _super);
    function DatePickerDirective(injector, _elementRef) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._elementRef = _elementRef;
        _this.defaultDate = new Date();
        _this.displayDayFn = null;
        _this.minDate = null;
        _this.maxDate = null;
        _this.currentDate = null;
        _this.onChange = function (_) { };
        _this.onTouch = function () { };
        return _this;
    }
    DatePickerDirective_1 = DatePickerDirective;
    DatePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._pikaday = new pikaday_time__WEBPACK_IMPORTED_MODULE_3__({
            field: this._elementRef.nativeElement,
            format: 'DD/MM/YYYY H:mm',
            // defaultDate: this.currentDate,
            setDefaultDate: false,
            disableDayFn: this.displayDayFn,
            minDate: this.minDate,
            maxDate: this.maxDate,
            onSelect: function (date) {
                _this.onSelect(date);
            }
        });
    };
    DatePickerDirective.prototype.onSelect = function (date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        this.currentDate = date.toLocaleDateString();
        this.onChange(date);
    };
    DatePickerDirective.prototype.ngOnDestroy = function () {
        this._pikaday.destroy();
    };
    DatePickerDirective.prototype.writeValue = function (obj) {
        this.currentDate = obj;
        this.onChange(this.currentDate);
        if (this.currentDate) {
            this._pikaday.setDate(this.currentDate);
        }
    };
    DatePickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    DatePickerDirective.prototype.toggle = function () {
        if (!this._pikaday.isVisible()) {
            this._pikaday.show();
        }
        else {
            this._pikaday.destroy();
        }
    };
    DatePickerDirective.prototype.clear = function () {
        this._elementRef.nativeElement.value = '';
        // this._pikaday.clear();
    };
    var DatePickerDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerDirective.prototype, "defaultDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], DatePickerDirective.prototype, "displayDayFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerDirective.prototype, "minDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerDirective.prototype, "maxDate", void 0);
    DatePickerDirective = DatePickerDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatePickerDirective_1; }),
                    multi: true
                },
            ],
            selector: '[datePicker]',
            exportAs: 'datePicker',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DatePickerDirective);
    return DatePickerDirective;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.html":
/*!*********************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/add-raffle/add-raffle.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper m-3 p-2\" #wrapper>\r\n  <h3 class=\"mb-3\">{{raffle?.id ? 'Edit' : 'Add New'}} Raffle</h3>\r\n\r\n  <form #form=\"ngForm\" novalidate>\r\n    <form-field label=\"Name\">\r\n      <input inputRef name=\"name\" #name=\"ngModel\" [(ngModel)]=\"raffle.name\" required>\r\n      <div invalid *ngIf=\"name.dirty && name.invalid\">\r\n        <span *ngIf=\"name?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <form-field label=\"Category\">\r\n      <select inputRef name=\"category\" #category=\"ngModel\" [(ngModel)]=\"raffle.category\" required>\r\n        <option [value]=\"item\" *ngFor=\"let item of categories\">{{item}}</option>\r\n      </select>\r\n      <div invalid *ngIf=\"category.dirty && category.invalid\">\r\n        <span *ngIf=\"category?.errors?.required\">required</span>\r\n      </div>\r\n    </form-field>\r\n\r\n    <checkbox label=\"Is featured\">\r\n      <input inputRef type=\"checkbox\" #isFeatured=\"ngModel\" [(ngModel)]=\"raffle.isFeatured\" name=\"isFeatured\">\r\n    </checkbox>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form-field label=\"Price\">\r\n          <input inputRef name=\"price\" #price=\"ngModel\" [(ngModel)]=\"raffle.price\" restrict=\"number\" required>\r\n          <div invalid *ngIf=\"price.dirty && price.invalid\">\r\n            <span *ngIf=\"price?.errors?.required\">required</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n      <div class=\"col\">\r\n        <form-field label=\"Menor preço\">\r\n          <input inputRef name=\"retailPrice\" #retailPrice=\"ngModel\" [(ngModel)]=\"raffle.retailPrice\" restrict=\"number\"\r\n            required>\r\n          <div invalid *ngIf=\"retailPrice.dirty && retailPrice.invalid\">\r\n            <span *ngIf=\"retailPrice?.errors?.required\">required</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form-field suffix=\"true\" label=\"Start Date\">\r\n          <input inputRef name=\"start\" [(ngModel)]=\"raffle.startDate\" datePicker #startDate=\"datePicker\"\r\n            #start=\"ngModel\">\r\n          <i suffix class=\"fa fa-calendar text-secondary\" (click)=\"startDate.toggle()\"></i>\r\n          <div invalid *ngIf=\"start.dirty && start.invalid\">\r\n            <span *ngIf=\"start?.errors?.invalid\">Must be a valid date</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n      <div class=\"col\">\r\n        <form-field suffix=\"true\" label=\"End Date\">\r\n          <input inputRef name=\"end\" [(ngModel)]=\"raffle.endDate\" datePicker #endDate=\"datePicker\" #end=\"ngModel\"\r\n            [date]=\"{minDate: raffle.startDate}\">\r\n          <i suffix class=\"fa fa-calendar text-secondary\" (click)=\"endDate.toggle()\"></i>\r\n          <div invalid *ngIf=\"end.dirty && end.invalid\">\r\n            <span *ngIf=\"end?.errors?.invalid\">Must be a valid date</span>\r\n            <span *ngIf=\"end?.errors?.minDate\">End date cannot be less than start date</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form-field label=\"Max User Selection\">\r\n          <input inputRef name=\"maxUserSelection\" [(ngModel)]=\"raffle.maxUserSelection\" #maxUserSelection=\"ngModel\"\r\n            restrict=\"number\" required>\r\n          <div invalid *ngIf=\"maxUserSelection.dirty && maxUserSelection.invalid\">\r\n            <span *ngIf=\"maxUserSelection?.errors?.required\">required</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n      <div class=\"col\">\r\n        <form-field label=\"Max Options\">\r\n          <input inputRef name=\"maxOptions\" [(ngModel)]=\"raffle.maxOptions\" #maxOptions=\"ngModel\" required\r\n            restrict=\"number\">\r\n          <div invalid *ngIf=\"maxOptions.dirty && maxOptions.invalid\">\r\n            <span *ngIf=\"maxOptions?.errors?.required\">required</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n      <div class=\"col\">\r\n        <form-field label=\"Max Winners\">\r\n          <input inputRef name=\"maxWinners\" [(ngModel)]=\"raffle.maxWinners\" #maxWinners=\"ngModel\" restrict=\"number\"\r\n            required>\r\n          <div invalid *ngIf=\"maxWinners.dirty && maxWinners.invalid\">\r\n            <span *ngIf=\"maxWinners?.errors?.required\">required</span>\r\n          </div>\r\n        </form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <td-text-editor [value]=\"raffle.description\" #textDescEditor></td-text-editor>\r\n\r\n    <td-text-editor [value]=\"raffle.terms\" #textTermsEditor></td-text-editor>\r\n\r\n    <!-- <form-field label=\"Raffle Description\">\r\n      <textarea inputRef name=\"description\" #description=\"ngModel\" [(ngModel)]=\"raffle.description\"></textarea>\r\n    </form-field>\r\n\r\n    <form-field label=\"Raffle Terms\">\r\n      <textarea inputRef name=\"terms\" #terms=\"ngModel\" [(ngModel)]=\"raffle.terms\"></textarea>\r\n    </form-field> -->\r\n\r\n    <div class=\"manage-raffle-products\">\r\n      <div class=\"list-group-item\" *ngIf=\"raffleProduct\">\r\n        <div class=\"image\" [imageLoader]=\"raffleProduct?.images[0]\"></div>\r\n        <div class=\"detail\">\r\n          <p><strong>Product Name:</strong> {{raffleProduct.name}}</p>\r\n        </div>\r\n        <div class=\"action\">\r\n          <button class=\"btn btn-danger\" (click)=\"raffleProduct = null\">\r\n            <i class=\"fa fa-minus\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-block\" *ngIf=\"!raffleProduct\">\r\n        <button class=\"btn btn-{{showProductTable ? 'warning': 'secondary'}} mb-2\"\r\n          (click)=\"showProductTable = !showProductTable\">{{showProductTable ? 'Hide': 'Show'}} Product</button>\r\n\r\n        <ng-container *ngIf=\"showProductTable === true\">\r\n          <app-table [config]=\"{showSelect: false, itemsPerPage: pageSize}\" [data]=\"products | orderBy: '-updatedAt'\"\r\n            [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n          </app-table>\r\n          <ngb-pagination maxSize=\"5\" [pageSize]=\"pageSize\" [collectionSize]=\"productsBK.length\"\r\n            (pageChange)=\"onPageChange($event)\" aria-label=\"Default pagination\">\r\n          </ngb-pagination>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"footer text-right mt-3\">\r\n    <button class=\"btn btn-primary mr-2\" [btnStatus]=\"loading\" [disabled]=\"!(form.valid || raffle.productId)\"\r\n      (click)=\"save()\">Save</button>\r\n    <button class=\"btn btn-dark\" (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/add-raffle/add-raffle.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .list-group-item {\n  display: flex; }\n  :host .list-group-item .image {\n    width: 80px;\n    height: 80px;\n    border-radius: 4px; }\n  :host .list-group-item .detail {\n    padding-left: 20px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    width: 200px; }\n  :host .list-group-item .detail p {\n      margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hZG1pbi9yYWZmbGVzL2NvbXBvbmVudHMvYWRkLXJhZmZsZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHJpZmZhLUJyYXNpbC1mcm9udC9zcmNcXHBhZ2VzXFxhZG1pblxccmFmZmxlc1xcY29tcG9uZW50c1xcYWRkLXJhZmZsZVxcYWRkLXJhZmZsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWEsRUFBQTtFQUZqQjtJQUtNLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFQeEI7SUFXTSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBZmxCO01Ba0JRLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vcmFmZmxlcy9jb21wb25lbnRzL2FkZC1yYWZmbGUvYWRkLXJhZmZsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/add-raffle/add-raffle.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddRaffleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRaffleComponent", function() { return AddRaffleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/fesm5/covalent-text-editor.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _modules_date_picker_directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../modules/date-picker/directives/date-picker.directive */ "./src/modules/date-picker/directives/date-picker.directive.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-config */ "./src/modules/dialog/helpers/dialog-config.ts");
/* harmony import */ var _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../modules/dialog/helpers/dialog-ref */ "./src/modules/dialog/helpers/dialog-ref.ts");










var AddRaffleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddRaffleComponent, _super);
    function AddRaffleComponent(injector, _dialogRef, _dialogConfig, _raffleApi, _productApi) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._dialogRef = _dialogRef;
        _this._dialogConfig = _dialogConfig;
        _this._raffleApi = _raffleApi;
        _this._productApi = _productApi;
        _this.modalSize = 'lg';
        _this.raffle = new _common_sdk__WEBPACK_IMPORTED_MODULE_6__["RaffleDraw"]();
        _this.products = [];
        _this.productsBK = [];
        _this.tableActions = [
            {
                color: 'text-info',
                icon: 'plus',
                text: 'Edit',
                event: function (data, i) { _this.addProduct(data); }
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
        _this.pageSize = 5;
        _this.categories = [
            'Dinheiro', 'Caros', 'Técnologia', 'Viagens', 'Motos'
        ];
        return _this;
    }
    AddRaffleComponent.prototype.ngOnInit = function () {
        var data = this._dialogConfig.data;
        if (data) {
            this.raffle = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4__(data);
            this.raffleProduct = data.product;
            delete this.raffle.product;
        }
        this._getproducts();
    };
    AddRaffleComponent.prototype.isSelected = function (item) {
        return this.raffleProduct ? this.raffleProduct.id === item.id : false;
    };
    AddRaffleComponent.prototype.onPageChange = function (page) {
        var start = (page - 1) * this.pageSize;
        this.products = this.productsBK.slice(start, start + this.pageSize);
    };
    AddRaffleComponent.prototype.addProduct = function (item) {
        this.raffleProduct = item;
        this.raffle.productId = item.id;
    };
    AddRaffleComponent.prototype.removeProduct = function () {
        this.raffleProduct = null;
        this.raffle.productId = null;
    };
    AddRaffleComponent.prototype.save = function () {
        var _this = this;
        if (this.form.valid && this.raffleProduct) {
            this.loading = true;
            this.raffle.description = this._textDescEditor.value;
            this.raffle.terms = this._textTermsEditor.value;
            this._raffleApi.upsert(this.raffle).subscribe(function () {
                _this.loading = false;
                _this._reset();
            }, function (error) {
                _this.loading = false;
                _this.toastr.error(error.message);
            });
        }
    };
    AddRaffleComponent.prototype._reset = function () {
        this.form.resetForm();
        this._textDescEditor.value = '';
        this._textTermsEditor.value = '';
        this.raffle = new _common_sdk__WEBPACK_IMPORTED_MODULE_6__["RaffleDraw"]();
        this.raffleProduct = null;
        this._pikaStartDate.clear();
        this._pikaEndDate.clear();
        this.showProductTable = false;
        this.wrapper.nativeElement.scrollTop = 0;
    };
    AddRaffleComponent.prototype.closeModal = function () {
        this._dialogRef.close();
    };
    AddRaffleComponent.prototype._getproducts = function () {
        var _this = this;
        this._productApi.find({ where: { isDeleted: false } }).subscribe(function (data) {
            _this.products = _this.productsBK = data.map(function (product) {
                product.mainImage = product.images[0];
                return product;
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AddRaffleComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddRaffleComponent.prototype, "wrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textDescEditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _covalent_text_editor__WEBPACK_IMPORTED_MODULE_3__["TdTextEditorComponent"])
    ], AddRaffleComponent.prototype, "_textDescEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textTermsEditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _covalent_text_editor__WEBPACK_IMPORTED_MODULE_3__["TdTextEditorComponent"])
    ], AddRaffleComponent.prototype, "_textTermsEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('startDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _modules_date_picker_directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_7__["DatePickerDirective"])
    ], AddRaffleComponent.prototype, "_pikaStartDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('endDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _modules_date_picker_directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_7__["DatePickerDirective"])
    ], AddRaffleComponent.prototype, "_pikaEndDate", void 0);
    AddRaffleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-raffle',
            template: __webpack_require__(/*! ./add-raffle.component.html */ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.html"),
            styles: [__webpack_require__(/*! ./add-raffle.component.scss */ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _modules_dialog_helpers_dialog_ref__WEBPACK_IMPORTED_MODULE_9__["DialogRef"],
            _modules_dialog_helpers_dialog_config__WEBPACK_IMPORTED_MODULE_8__["DialogConfig"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_6__["RaffleDrawApi"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_6__["ProductApi"]])
    ], AddRaffleComponent);
    return AddRaffleComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/raffles/components/raffles/raffles.component.html":
/*!***************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/raffles/raffles.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-white my-3\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct()\">Add Raffle</button>\r\n\r\n  <app-spinner class=\"mt-3\" [isLoading]=\"loading\">\r\n\r\n    <ng-container *ngIf=\"raffles && raffles.length > 0\">\r\n      <app-table [config]=\"{showSelect: false, itemsPerPage: pageSize}\" [data]=\"raffles | orderBy: '-updatedAt'\"\r\n        [headers]=\"tableHeaders\" [actions]=\"tableActions\">\r\n      </app-table>\r\n      <ngb-pagination maxSize=\"5\" [pageSize]=\"pageSize\" [collectionSize]=\"rafflesBK.length\"\r\n        (pageChange)=\"onPageChange($event)\" aria-label=\"Default pagination\">\r\n      </ngb-pagination>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"raffles && raffles.length === 0\">\r\n      <div class=\"jumbotron\">\r\n        <h4>Empty</h4>\r\n        <p class=\"lead text-dark\">No raffles to display</p>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </app-spinner>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/admin/raffles/components/raffles/raffles.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/raffles/raffles.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvYWRtaW4vcmFmZmxlcy9jb21wb25lbnRzL3JhZmZsZXMvcmFmZmxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/admin/raffles/components/raffles/raffles.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/admin/raffles/components/raffles/raffles.component.ts ***!
  \*************************************************************************/
/*! exports provided: RafflesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RafflesComponent", function() { return RafflesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/helpers/extender */ "./src/common/helpers/extender.ts");
/* harmony import */ var _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/pipes/order-by/order-by.pipe */ "./src/common/pipes/order-by/order-by.pipe.ts");
/* harmony import */ var _common_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/sdk */ "./src/common/sdk/index.ts");
/* harmony import */ var _add_raffle_add_raffle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-raffle/add-raffle.component */ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.ts");






var RafflesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RafflesComponent, _super);
    function RafflesComponent(injector, _rt, _orderBy) {
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
                event: function (data) { _this.addProduct(data); }
            }, {
                color: 'text-danger',
                icon: 'trash-o',
                text: 'Delete',
                event: function (data) { _this.delete(data); }
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
    RafflesComponent.prototype.ngOnInit = function () {
        this.raffleRef = this._rt.FireLoop.ref(_common_sdk__WEBPACK_IMPORTED_MODULE_4__["RaffleDraw"]);
        this._getraffles();
    };
    RafflesComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageSize;
        this.raffles = this.rafflesBK.slice(start, start + this.pageSize);
    };
    RafflesComponent.prototype.addProduct = function (raffle) {
        if (raffle === void 0) { raffle = null; }
        this.dialog.open(_add_raffle_add_raffle_component__WEBPACK_IMPORTED_MODULE_5__["AddRaffleComponent"], raffle ? { data: raffle } : null);
    };
    RafflesComponent.prototype.delete = function (item) {
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
                _this.raffleRef.remove(item).subscribe();
            }
        });
    };
    RafflesComponent.prototype._getraffles = function () {
        var _this = this;
        this.loading = true;
        this.raffleRef.on('change', {
            where: { isDeleted: false },
            include: {
                relation: 'product', scope: { where: { isDeleted: false } }
            }
        }).subscribe(function (data) {
            _this.raffles = _this.rafflesBK = _this._orderBy.transform(data, '-updatedAt');
            _this.onPageChange(_this.currentPage);
            _this.loading = false;
        });
    };
    RafflesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]],
            selector: 'app-raffles',
            template: __webpack_require__(/*! ./raffles.component.html */ "./src/pages/admin/raffles/components/raffles/raffles.component.html"),
            styles: [__webpack_require__(/*! ./raffles.component.scss */ "./src/pages/admin/raffles/components/raffles/raffles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _common_sdk__WEBPACK_IMPORTED_MODULE_4__["RealTime"],
            _common_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]])
    ], RafflesComponent);
    return RafflesComponent;
}(_common_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/admin/raffles/raffles.module.ts":
/*!***************************************************!*\
  !*** ./src/pages/admin/raffles/raffles.module.ts ***!
  \***************************************************/
/*! exports provided: RafflesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RafflesModule", function() { return RafflesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/fesm5/covalent-text-editor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/common.module */ "./src/common/common.module.ts");
/* harmony import */ var _modules_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/date-picker/date-picker.module */ "./src/modules/date-picker/date-picker.module.ts");
/* harmony import */ var _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/dialog/dialog.module */ "./src/modules/dialog/dialog.module.ts");
/* harmony import */ var _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/form-field/form-field.module */ "./src/modules/form-field/form-field.module.ts");
/* harmony import */ var _modules_table_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modules/table/table.module */ "./src/modules/table/table.module.ts");
/* harmony import */ var _components_add_raffle_add_raffle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-raffle/add-raffle.component */ "./src/pages/admin/raffles/components/add-raffle/add-raffle.component.ts");
/* harmony import */ var _components_raffles_raffles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/raffles/raffles.component */ "./src/pages/admin/raffles/components/raffles/raffles.component.ts");
/* harmony import */ var _services_raffle_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/raffle.service */ "./src/pages/admin/raffles/services/raffle.service.ts");















var RafflesModule = /** @class */ (function () {
    function RafflesModule() {
    }
    RafflesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_raffles_raffles_component__WEBPACK_IMPORTED_MODULE_13__["RafflesComponent"], _components_add_raffle_add_raffle_component__WEBPACK_IMPORTED_MODULE_12__["AddRaffleComponent"]],
            entryComponents: [_components_add_raffle_add_raffle_component__WEBPACK_IMPORTED_MODULE_12__["AddRaffleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_7__["WinitCommonModule"],
                _modules_table_table_module__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
                _modules_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"].forRoot(),
                _modules_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_10__["FormFieldModule"],
                _modules_date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_8__["DatePickerModule"],
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_5__["CovalentTextEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_raffles_raffles_component__WEBPACK_IMPORTED_MODULE_13__["RafflesComponent"]
                    }
                ])
            ],
            providers: [
                _services_raffle_service__WEBPACK_IMPORTED_MODULE_14__["RaffleService"]
            ]
        })
    ], RafflesModule);
    return RafflesModule;
}());



/***/ }),

/***/ "./src/pages/admin/raffles/services/raffle.service.ts":
/*!************************************************************!*\
  !*** ./src/pages/admin/raffles/services/raffle.service.ts ***!
  \************************************************************/
/*! exports provided: RaffleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaffleService", function() { return RaffleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RaffleService = /** @class */ (function () {
    function RaffleService() {
    }
    Object.defineProperty(RaffleService.prototype, "raffleRef", {
        get: function () {
            return this._raffleRef;
        },
        set: function (data) {
            this._raffleRef = data;
        },
        enumerable: true,
        configurable: true
    });
    RaffleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RaffleService);
    return RaffleService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-raffles-raffles-module.js.map