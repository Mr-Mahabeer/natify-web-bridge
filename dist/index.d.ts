declare const changeStatusBarColor: (color: string) => void;
declare const showNativeAlert: ({ title, description, }: {
    title: string;
    description: string;
}) => void;
export { changeStatusBarColor, showNativeAlert };
declare global {
    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        };
    }
}
