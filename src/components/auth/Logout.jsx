import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logoutUser } from "@/api/auth";
import { useState } from "react";

const Logout = () => {
    const { logout } = useAuth();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        const performLogout = async () => {
            try {
                await logoutUser();
                logout();
            } catch (err) {
                console.log("Logout failed on API call:" + err);
                logout();
            } finally {
                setIsLoggedOut(true);
            }
        }

        performLogout();
    }, [logout]);

    if (!isLoggedOut) {
        return <div>Logging out...</div>
    }

    return <Navigate to="/" replace />
}

export default Logout;
