"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNativeAlert = exports.changeStatusBarColor = void 0;
const changeStatusBarColor = (color) => {
    try {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: "barColor", color }));
    }
    catch (error) {
        throw error;
    }
};
exports.changeStatusBarColor = changeStatusBarColor;
const showNativeAlert = ({ title, description, }) => {
    try {
        window.ReactNativeWebView.postMessage(JSON.stringify({
            event: "alert",
            title,
            description,
        }));
    }
    catch (error) {
        throw error;
    }
};
exports.showNativeAlert = showNativeAlert;
