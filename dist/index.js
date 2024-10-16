"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hepticFeedBack = exports.showNativeToast = exports.nativeShare = exports.showNativeAlert = exports.changeStatusBarColor = exports.HapticFeedbackTypes = void 0;
var HapticFeedbackTypes;
(function (HapticFeedbackTypes) {
    HapticFeedbackTypes["selection"] = "selection";
    HapticFeedbackTypes["impactLight"] = "impactLight";
    HapticFeedbackTypes["impactMedium"] = "impactMedium";
    HapticFeedbackTypes["impactHeavy"] = "impactHeavy";
    HapticFeedbackTypes["rigid"] = "rigid";
    HapticFeedbackTypes["soft"] = "soft";
    HapticFeedbackTypes["notificationSuccess"] = "notificationSuccess";
    HapticFeedbackTypes["notificationWarning"] = "notificationWarning";
    HapticFeedbackTypes["notificationError"] = "notificationError";
    HapticFeedbackTypes["clockTick"] = "clockTick";
    HapticFeedbackTypes["contextClick"] = "contextClick";
    HapticFeedbackTypes["keyboardPress"] = "keyboardPress";
    HapticFeedbackTypes["keyboardRelease"] = "keyboardRelease";
    HapticFeedbackTypes["keyboardTap"] = "keyboardTap";
    HapticFeedbackTypes["longPress"] = "longPress";
    HapticFeedbackTypes["textHandleMove"] = "textHandleMove";
    HapticFeedbackTypes["virtualKey"] = "virtualKey";
    HapticFeedbackTypes["virtualKeyRelease"] = "virtualKeyRelease";
    HapticFeedbackTypes["effectClick"] = "effectClick";
    HapticFeedbackTypes["effectDoubleClick"] = "effectDoubleClick";
    HapticFeedbackTypes["effectHeavyClick"] = "effectHeavyClick";
    HapticFeedbackTypes["effectTick"] = "effectTick";
})(HapticFeedbackTypes || (exports.HapticFeedbackTypes = HapticFeedbackTypes = {}));
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
const hepticFeedBack = (type = HapticFeedbackTypes.impactLight) => {
    try {
        window.ReactNativeWebView.postMessage(JSON.stringify({
            event: "vibrate",
            type,
        }));
    }
    catch (error) {
        throw error;
    }
};
exports.hepticFeedBack = hepticFeedBack;
