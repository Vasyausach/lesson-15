window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calc = require('./parts/calc'),
        forms = require('./parts/forms'),
        popup = require('./parts/popup'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');

    calc();
    popup();
    slider();
    tabs();
    timer();
    forms();
});