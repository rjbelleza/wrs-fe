import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SessionExpired from "../components/auth/SessionExpired";

const LoginPage = lazy(() => import('../pages/LoginPage'));

const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/session-expired" element={<SessionExpired />} />
        </Routes>
    );
};

export default AppRouter;
