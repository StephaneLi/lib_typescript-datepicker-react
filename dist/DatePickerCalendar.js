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

var DatePickerCalendar = require('./DatePickerCalendar-81393f38.js');
require('react/jsx-runtime');
require('react');
require('@fortawesome/free-solid-svg-icons');
require('@fortawesome/react-fontawesome');



exports["default"] = DatePickerCalendar.DatePickerCalendar;
