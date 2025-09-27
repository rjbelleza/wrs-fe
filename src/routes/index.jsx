import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SessionExpired from "@/components/auth/SessionExpired";

const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const StaffLayout = lazy(() => import('@/layouts/StaffLayout'));

const LoginPage = lazy(() => import('@/pages/LoginPage'));

const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="session-expired" element={<SessionExpired />} />

            <Route element={<AdminLayout />}>

            </Route>

            <Route element={<StaffLayout />}>

            </Route>
        </Routes>
    );
};

export default AppRouter;
