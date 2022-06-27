

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-7f284dce.js');
var jsxRuntime = require('react/jsx-runtime');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var react = require('react');

___$insertStyle(".date-picker {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 100%;\n  font-size: 1.2rem;\n  max-width: 250px;\n  min-height: 30px;\n  color: var(--text-color);\n}\n.date-picker .input-date {\n  position: relative;\n  width: 100%;\n  max-width: 250px;\n  margin: 25px 0;\n  flex: 1 1 auto;\n  cursor: pointer;\n}\n.date-picker .input-date label, .date-picker .input-date input {\n  padding: 5px 10px;\n  pointer-events: none;\n  color: var(--text-color);\n}\n.date-picker .input-date__content {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: none;\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  border-radius: 5px;\n  background-color: white;\n  width: 100%;\n  z-index: -1;\n}\n.date-picker .input-date__content i {\n  width: 30px;\n  display: block;\n  padding: 5px 10px;\n  line-height: 18px;\n  color: var(--text-color);\n}\n.date-picker .input-date__content input {\n  flex: 1 1 auto;\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  line-height: 30px;\n  transition: border 0.3s ease-in-out;\n  z-index: 2;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--text-color);\n}\n.date-picker .input-date label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  line-height: 30px;\n  transform-origin: center left;\n  transition: transform 0.15s ease-in-out;\n}\n.date-picker .input-date label.indent {\n  left: 25px;\n}\n.date-picker .input-date__error-message {\n  position: absolute;\n  right: 0;\n  top: 30px;\n  font-size: 0.6rem;\n  color: var(--error-color) !important;\n  animation: error 0.25s ease-in both;\n}\n.date-picker .input-date--active label {\n  line-height: 1rem;\n  opacity: 1;\n  transform: translate(-5px, -25px) scale(0.85);\n}\n.date-picker .input-date--focus label, .date-picker .input-date--focus i {\n  color: var(--focus-color) !important;\n}\n.date-picker .input-date--focus .input__content {\n  border-color: var(--focus-color);\n}\n.date-picker .input-date--error label, .date-picker .input-date--error input, .date-picker .input-date--error i {\n  color: var(--error-color) !important;\n}\n.date-picker .input-date--error .input-date__content {\n  border: 1px solid var(--error-color);\n}\n.date-picker .picker {\n  position: absolute !important;\n  top: 70px;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  transform-origin: top;\n  display: none;\n  opacity: 0;\n  transform: scale(0.6);\n}\n.date-picker .picker.hide {\n  display: block;\n  pointer-events: none;\n  animation: hide-picker 0.15s ease-in both;\n}\n.date-picker .picker.show {\n  display: block;\n  animation: show-picker 0.15s ease-out both;\n}\n@keyframes error {\n  0% {\n    opacity: 0;\n    transform: translateX(3px);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n  75% {\n    transform: translateX(-3px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes show-picker {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes hide-picker {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n}");

var DatePicker = function (_a) {
    var label = _a.label, name = _a.name, _b = _a.errorMessage, errorMessage = _b === void 0 ? "Erreur message" : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.value, value = _d === void 0 ? "" : _d, _e = _a.lang, lang = _e === void 0 ? "fr-FR" : _e, year = _a.year, month = _a.month, day = _a.day, intervalYearsSelection = _a.intervalYearsSelection, _f = _a.elevationPicker, elevationPicker = _f === void 0 ? false : _f, _g = _a.headerPickerColor, headerPickerColor = _g === void 0 ? '#059ECE' : _g, _h = _a.borderColor, borderColor = _h === void 0 ? '#DADCE0' : _h, _j = _a.textColor, textColor = _j === void 0 ? '#70757A' : _j, _k = _a.focusColor, focusColor = _k === void 0 ? '#059ECE' : _k, _l = _a.errorColor, errorColor = _l === void 0 ? '#EF6C6C' : _l, _m = _a.borderRadius, borderRadius = _m === void 0 ? '5px' : _m, className = _a.className, _o = _a.zIndex, zIndex = _o === void 0 ? 999 : _o, onSelect = _a.onSelect;
    var inputDate = react.useRef(null);
    var wrapperInputDate = react.useRef(null);
    var wrapperDate = react.useRef(null);
    var _p = react.useState(), showCalendar = _p[0], setShowCalendar = _p[1];
    var _q = react.useState(value), valueInput = _q[0], setValueInput = _q[1];
    var _r = react.useState(error), errorStatus = _r[0], setErrorStatus = _r[1];
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
    return (jsxRuntime.jsxs("div", index.__assign({ className: "date-picker ".concat(className) }, { children: [jsxRuntime.jsxs("div", index.__assign({ "data-testid": 'datepicker', ref: wrapperInputDate, onClick: function () { return displayDatePicker(); }, className: "input-date ".concat(valueInput !== "" ? " input-date--active" : "").concat(errorStatus ? " input-date--error" : "").concat(showCalendar ? " input-date--focus" : ""), style: {
                    zIndex: zIndex,
                    '--text-color': textColor,
                    '--focus-color': focusColor,
                    '--error-color': errorColor,
                    '--border-color': borderColor,
                    '--border-radius': borderRadius,
                } }, { children: [jsxRuntime.jsx("label", index.__assign({ htmlFor: name }, { children: label })), jsxRuntime.jsxs("div", index.__assign({ className: "input-date__content" }, { children: [jsxRuntime.jsx("input", { "data-testid": "datepicker-input", ref: inputDate, name: name, value: valueInput, readOnly: true }), jsxRuntime.jsx("i", { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faCalendar }) })] })), errorStatus && (jsxRuntime.jsx("p", index.__assign({ className: "input-date__error-message" }, { children: errorMessage })))] })), jsxRuntime.jsx("div", index.__assign({ ref: wrapperDate, className: "picker".concat(showCalendar === true ? ' show' : showCalendar === false ? ' hide' : ''), style: {
                    zIndex: zIndex
                } }, { children: jsxRuntime.jsx(index.DatePickerCalendar, { elevation: elevationPicker, lang: lang, year: year, month: month, day: day, intervalYearsSelection: intervalYearsSelection, color: headerPickerColor, onSelect: function (date, value) {
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
//# sourceMappingURL=index.js.map
