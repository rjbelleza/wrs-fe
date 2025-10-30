import useAuth from "@/hooks/useAuth";
import { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { logoutUser } from "@/api/auth";

const Logout = () => {
    const { logout } = useAuth();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const hasRun = useRef(false);

    useEffect(() => {

        if (hasRun.current) {
            return;
        }

        hasRun.current = true;

        const performLogout = async () => {
            try {
                await logoutUser();
                logout();
            } catch (err) {
                console.log("Logout failed on API call:" + err.message);
                logout();
            } finally {
                setIsLoggedOut(true);
            }
        }

        performLogout();
    }, [logout]);

    if (!isLoggedOut) {
        return <div className="flex justify-center items-center h-screen w-full">
            <p className="text-xl font-AlbertSans-Bold text-blue-950 animate-bounce">Logging out..</p>
        </div>
    }

    return <Navigate to="/" replace />
}

export default Logout;
