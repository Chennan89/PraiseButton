(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.index = mod.exports;
    }
})(this, function () {
    "use strict";

    window.test = function (num) {
        if (num == 1) {
            return 1;
        } else {
            return num + 1;
        }
    };
});