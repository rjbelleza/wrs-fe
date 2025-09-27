import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SessionExpired = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <div className="p-4 text-center">
            <h1 className="text-xl font-bold">Session Expired</h1>
            <p>You've been logged out. Please sign in again.</p>
            <button onClick={() => navigate("/")}>
                Go to Login
            </button>
        </div>
    );
};

export default SessionExpired;
