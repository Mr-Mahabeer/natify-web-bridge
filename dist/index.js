"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatusBarColor = void 0;
const changeStatusBarColor = (color) => {
    try {
        if (!color) {
            return;
        }
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: "barColor", color }));
    }
    catch (error) {
        throw error;
    }
};
exports.changeStatusBarColor = changeStatusBarColor;
