const changeStatusBarColor = (color: string) => {
  try {
    if (!color) {
      return;
    }

    window.ReactNativeWebView.postMessage(
      JSON.stringify({ event: "barColor", color })
    );
  } catch (error) {
    throw error;
  }
};

export { changeStatusBarColor };

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}
