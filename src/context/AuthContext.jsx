import backendApi from "../api/backendApi";
import { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import { useSafeAsync } from "../hooks/useSafeAsync";
import { AuthContext } from "../hooks/useAuth";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [authError, setAuthError] = useState("");

    const { runAsync } = useSafeAsync();

    async function clearAuthData() {
        try {
            await Promise.all([
                localforage.removeItem("api-token"),
                localforage.removeItem('user'),
            ]);
        } catch (err) {
            console.error("Error clearing auth data: ", err);
            setAuthError("Something went wrong.");
        }

        delete backendApi.defaults.headers.common['Authorization'];

        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
    };

    const setAuthData = useCallback(async (newToken, newUser) => {
        try {
            if (newToken && newUser) {
                await Promise.all([
                    localforage.setItem('api-token', newToken),
                    localforage.setItem('user', newUser),
                ]);

                backendApi.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

                setUser(newUser);
                setToken(newToken);
                setIsLoggedIn(true);

                setAuthError("");
            } else {
                await clearAuthData();
            }
        } catch (err) {
            console.error("Error setting auth data: ", err);
            setAuthError("Something went wrong.");

            await clearAuthData();
        }
    }, []);

    // Load auth data from storage on initial app load
    useEffect(() => {
        runAsync(
            async () => {
                const storedToken = await localforage.getItem('api-token');
                const storedUser = await localforage.getItem('user');

                return { storedToken, storedUser };
            },
            async ({ storedToken, storedUser }) => {
                if (storedToken && storedUser) {
                    await setAuthData(storedToken, storedUser);
                } else {
                    await setAuthData(null, null);
                }
            },
            async (err) => {
                console.error("Error loading auth data: ", err);
                setAuthError("Something went wrong.");
                await setAuthData(null, null);
            },
            () => {
                setIsLoadingAuth(false);
            }
        );
    }, [setAuthData, runAsync]);

    const login = useCallback(async (newToken, newUser) => {
        await setAuthData(newToken, newUser);
    }, [setAuthData]);

    const logout = useCallback(async () => {
        await clearAuthData();
    }, []);

    const value = {
        user,
        token,
        isLoggedIn,
        login,
        logout,
        isLoadingAuth,
        authError,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
