export enum HapticFeedbackTypes {
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
  effectTick = "effectTick",
}

export interface NativeToastProps {
  type: "normal" | "success" | "danger" | "warning";
  duration?: number;
  placement?: "top" | "bottom" | "center";
  message: string;
}

const changeStatusBarColor = (color: string) => {
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ event: "barColor", color })
    );
  } catch (error) {
    throw error;
  }
};

const showNativeAlert = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        event: "alert",
        title,
        description,
      })
    );
  } catch (error) {
    throw error;
  }
};

const nativeShare = (message = "") => {
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        event: "shareExternal",
        message,
      })
    );
  } catch (error) {
    throw error;
  }
};

const showNativeToast = ({
  type,
  duration = 2000,
  placement = "top",
  message,
}: NativeToastProps) => {
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        event: "nativeToast",
        type,
        duration,
        placement,
        message,
      })
    );
  } catch (error) {
    throw error;
  }
};

const hepticFeedBack = (
  type: HapticFeedbackTypes = HapticFeedbackTypes.impactLight
) => {
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        event: "vibrate",
        type,
      })
    );
  } catch (error) {
    throw error;
  }
};

export {
  changeStatusBarColor,
  showNativeAlert,
  nativeShare,
  showNativeToast,
  hepticFeedBack,
};

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}
