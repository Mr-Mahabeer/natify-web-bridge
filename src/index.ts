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

export interface NativeToastProps {
  type: "normal" | "success" | "danger" | "warning";
  duration?: number;
  placement?: "top" | "bottom" | "center";
  message: string;
}
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

export { changeStatusBarColor, showNativeAlert, nativeShare, showNativeToast };

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}
