import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import('../pages/LoginPage'));

const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;
