export declare enum HapticFeedbackTypes {
    selection = "selection",
    impactLight = "impactLight",
    impactMedium = "impactMedium",
    impactHeavy = "impactHeavy",
    rigid = "rigid",
    soft = "soft",
    notificationSuccess = "notificationSuccess",
    notificationWarning = "notificationWarning",
    notificationError = "notificationError",
    clockTick = "clockTick",
    contextClick = "contextClick",
    keyboardPress = "keyboardPress",
    keyboardRelease = "keyboardRelease",
    keyboardTap = "keyboardTap",
    longPress = "longPress",
    textHandleMove = "textHandleMove",
    virtualKey = "virtualKey",
    virtualKeyRelease = "virtualKeyRelease",
    effectClick = "effectClick",
    effectDoubleClick = "effectDoubleClick",
    effectHeavyClick = "effectHeavyClick",
    effectTick = "effectTick"
}
export interface SaveDataProps {
    key: string;
    value: string;
    showToast?: boolean;
}
export interface NativeToastProps {
    type: "normal" | "success" | "danger" | "warning";
    duration?: number;
    placement?: "top" | "bottom" | "center";
    message: string;
}
declare const changeStatusBarColor: (color: string) => void;
declare const showNativeAlert: ({ title, description, }: {
    title: string;
    description: string;
}) => void;
declare const nativeShare: (message?: string) => void;
declare const showNativeToast: ({ type, duration, placement, message, }: NativeToastProps) => void;
declare const hepticFeedBack: (type?: HapticFeedbackTypes) => void;
declare const saveData: ({ key, value, showToast }: SaveDataProps) => void;
declare const openDeviceSettings: () => void;
export { changeStatusBarColor, showNativeAlert, nativeShare, showNativeToast, hepticFeedBack, saveData, openDeviceSettings, };
declare global {
    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        };
    }
}
