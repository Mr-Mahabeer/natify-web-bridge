"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNativeToast = exports.nativeShare = exports.showNativeAlert = exports.changeStatusBarColor = void 0;
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
const nativeShare = (message = "") => {
    try {
        window.ReactNativeWebView.postMessage(JSON.stringify({
            event: "shareExternal",
            message,
        }));
    }
    catch (error) {
        throw error;
    }
};
exports.nativeShare = nativeShare;
const showNativeToast = ({ type, duration = 2000, placement = "top", message, }) => {
    try {
        window.ReactNativeWebView.postMessage(JSON.stringify({
            event: "nativeToast",
            type,
            duration,
            placement,
            message,
        }));
    }
    catch (error) {
        throw error;
    }
};
exports.showNativeToast = showNativeToast;
