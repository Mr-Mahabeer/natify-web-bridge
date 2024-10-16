declare const changeStatusBarColor: (color: string) => void;
declare const showNativeAlert: ({ title, description, }: {
    title: string;
    description: string;
}) => void;
declare const nativeShare: (message?: string) => void;
export { changeStatusBarColor, showNativeAlert, nativeShare };
declare global {
    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        };
    }
}
