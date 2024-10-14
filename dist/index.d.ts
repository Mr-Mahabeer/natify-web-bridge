declare const changeStatusBarColor: (color: string) => void;
export { changeStatusBarColor };
declare global {
    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        };
    }
}
