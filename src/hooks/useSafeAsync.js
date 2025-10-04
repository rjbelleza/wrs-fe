import { useEffect, useRef, useCallback } from "react";

export function useSafeAsync() {
    const isMountedRef = useRef(true);

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const runAsync = useCallback(async (asyncFn, onSuccess, onError, onFinally) => {
        try {
            const result = await asyncFn();

            if (isMountedRef.current && onSuccess) {
                onSuccess(result);
            }
        } catch (err) {
            if (isMountedRef.current && onError) {
                onError(err);
            }
        } finally {
            if (isMountedRef.current && onFinally) {
                onFinally();
            }
        }
    }, []);

    return { runAsync };
};
