declare const changeStatusBarColor: (color: string) => void;
declare const showNativeAlert: ({ title, description, }: {
    title: string;
    description: string;
}) => void;
declare const nativeShare: (message?: string) => void;
export interface NativeToastProps {
    type: "normal" | "success" | "danger" | "warning";
    duration?: number;
    placement?: "top" | "bottom" | "center";
    message: string;
}
declare const showNativeToast: ({ type, duration, placement, message, }: NativeToastProps) => void;
export { changeStatusBarColor, showNativeAlert, nativeShare, showNativeToast };
declare global {
    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        };
    }
}
