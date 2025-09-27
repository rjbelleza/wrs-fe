import useAuth from "@/hooks/useAuth";
import Navigate from "react-router-dom";

const ProtectedRoute = ({ element, role }) => {
    const { user, isLoadingAuth } = useAuth();
    
    if (isLoadingAuth) return <p>Loading...</p>;

    if (!user) return <Navigate to='/' replace />;

    if (role && !role.includes(user.role)) return <Navigate to='/' replace />;

    return element;
};

export default ProtectedRoute;
