

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

var index = require('./index-cd1e5c2e.js');
require('react/jsx-runtime');
require('react');
require('@fortawesome/free-solid-svg-icons');
require('@fortawesome/react-fontawesome');



exports["default"] = index.DatePickerCalendar;
//# sourceMappingURL=index2.js.map
