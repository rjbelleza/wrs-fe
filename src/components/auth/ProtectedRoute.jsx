import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
    const { user, isLoadingAuth } = useAuth();
    
    if (isLoadingAuth) return <p>Loading...</p>;

    if (!user) return <Navigate to='/' replace />;

    if (role && !role.includes(user.role)) return <Navigate to='/' replace />;

    return <Outlet />;
};

export default ProtectedRoute;
