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

export { changeStatusBarColor, showNativeAlert, nativeShare };

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}
