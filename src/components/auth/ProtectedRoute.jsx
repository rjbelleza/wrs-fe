import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, role }) => {
    const { user, isLoadingAuth } = useAuth();

    console.log("Rendered with isLoadingAuth:", isLoadingAuth);
    
    if (isLoadingAuth) return <p>Loading...</p>;

    if (!user) return <Navigate to='/' replace />;

    if (role && !role.includes(user.role)) return <Navigate to='/' replace />;

    return element;
};

export default ProtectedRoute;
