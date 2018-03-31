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
        global.indexSepc = mod.exports;
    }
})(this, function () {
    "use strict";

    describe("测试基本的函数API", function () {
        it("+1函数的应用", function () {
            expect(window.test(1)).toBe(1);
            expect(window.test(2)).toBe(3);
        });
    });
});