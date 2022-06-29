'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./style.css');

var DatePickerCalendar = require('./DatePickerCalendar-92767d8c.js');
var jsxRuntime = require('react/jsx-runtime');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var react = require('react');

var DatePicker = function (_a) {
    var label = _a.label, name = _a.name, _b = _a.errorMessage, errorMessage = _b === void 0 ? "Erreur message" : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.value, value = _d === void 0 ? "" : _d, _e = _a.lang, lang = _e === void 0 ? "fr-FR" : _e, year = _a.year, month = _a.month, day = _a.day, intervalYearsSelection = _a.intervalYearsSelection, _f = _a.elevationPicker, elevationPicker = _f === void 0 ? false : _f, _g = _a.headerPickerColor, headerPickerColor = _g === void 0 ? '#059ECE' : _g, _h = _a.borderColor, borderColor = _h === void 0 ? '#DADCE0' : _h, _j = _a.textColor, textColor = _j === void 0 ? '#70757A' : _j, _k = _a.focusColor, focusColor = _k === void 0 ? '#059ECE' : _k, _l = _a.errorColor, errorColor = _l === void 0 ? '#EF6C6C' : _l, _m = _a.borderRadius, borderRadius = _m === void 0 ? '5px' : _m, className = _a.className, _o = _a.zIndex, zIndex = _o === void 0 ? 999 : _o, onSelect = _a.onSelect;
    var inputDate = react.useRef(null);
    var wrapperInputDate = react.useRef(null);
    var wrapperDate = react.useRef(null);
    var _p = react.useState(), showCalendar = _p[0], setShowCalendar = _p[1];
    var _q = react.useState(value), valueInput = _q[0], setValueInput = _q[1];
    var _r = react.useState(error), errorStatus = _r[0], setErrorStatus = _r[1];
    // On blur fade out date calendar
    react.useEffect(function () {
        document.addEventListener("mousedown", function (e) {
            var _a;
            e.stopPropagation();
            if (wrapperDate.current && wrapperInputDate.current && !wrapperDate.current.contains(e.target) && !wrapperInputDate.current.contains(e.target) && showCalendar === true) {
                setShowCalendar(false);
                (_a = inputDate.current) === null || _a === void 0 ? void 0 : _a.blur();
            }
        });
    }, [wrapperDate, showCalendar]);
    react.useEffect(function () {
        setErrorStatus(error);
    }, [error]);
    react.useEffect(function () {
        setValueInput(value);
    }, [value]);
    var displayDatePicker = function (active) {
        var _a, _b;
        showCalendar ? (_a = inputDate.current) === null || _a === void 0 ? void 0 : _a.blur() : (_b = inputDate.current) === null || _b === void 0 ? void 0 : _b.focus();
        setShowCalendar(active !== null && active !== void 0 ? active : !showCalendar);
    };
    return (jsxRuntime.jsxs("div", DatePickerCalendar.__assign({ className: "date-picker ".concat(className) }, { children: [jsxRuntime.jsxs("div", DatePickerCalendar.__assign({ "data-testid": 'datepicker', ref: wrapperInputDate, onClick: function () { return displayDatePicker(); }, className: "input-date ".concat(valueInput !== "" ? " input-date--active" : "").concat(errorStatus ? " input-date--error" : "").concat(showCalendar ? " input-date--focus" : ""), style: {
                    zIndex: zIndex,
                    '--text-color': textColor,
                    '--focus-color': focusColor,
                    '--error-color': errorColor,
                    '--border-color': borderColor,
                    '--border-radius': borderRadius,
                } }, { children: [jsxRuntime.jsx("label", DatePickerCalendar.__assign({ htmlFor: name }, { children: label })), jsxRuntime.jsxs("div", DatePickerCalendar.__assign({ className: "input-date__content" }, { children: [jsxRuntime.jsx("input", { id: name, "data-testid": "datepicker-input", ref: inputDate, name: name, value: valueInput, readOnly: true }), jsxRuntime.jsx("i", { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faCalendar }) })] })), errorStatus && (jsxRuntime.jsx("p", DatePickerCalendar.__assign({ className: "input-date__error-message" }, { children: errorMessage })))] })), jsxRuntime.jsx("div", DatePickerCalendar.__assign({ ref: wrapperDate, className: "picker".concat(showCalendar === true ? ' show' : showCalendar === false ? ' hide' : ''), style: {
                    zIndex: zIndex
                } }, { children: jsxRuntime.jsx(DatePickerCalendar.DatePickerCalendar, { elevation: elevationPicker, lang: lang, year: year, month: month, day: day, intervalYearsSelection: intervalYearsSelection, color: headerPickerColor, onSelect: function (date, value) {
                        var result = {
                            date: date,
                            value: value
                        };
                        setValueInput(value);
                        if (onSelect)
                            onSelect(result);
                    }, onClose: function () { return displayDatePicker(false); } }) }))] })));
};

exports["default"] = DatePicker;
