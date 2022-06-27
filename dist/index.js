'use strict';



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

var DatePicker = require('./DatePicker.js');
var DatePickerCalendar = require('./DatePickerCalendar-eefde8fc.js');
require('react/jsx-runtime');
require('@fortawesome/free-solid-svg-icons');
require('@fortawesome/react-fontawesome');
require('react');



exports.DatePicker = DatePicker["default"];
exports.DatePickerCalendar = DatePickerCalendar.DatePickerCalendar;
