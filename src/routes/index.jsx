import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SessionExpired from "@/components/auth/SessionExpired";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const StaffLayout = lazy(() => import('@/layouts/StaffLayout'));

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const StaffDashboard = lazy(() => import('@/pages/staff/StaffDashboard'));

const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="session-expired" element={<SessionExpired />} />

            <Route element={<ProtectedRoute element={<AdminLayout />} role={["admin"]} />}>
                <Route path="admin">
                    <Route index element={<AdminDashboard />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoute element={<StaffLayout />} role={["staff"]} />}>
                <Route path="staff">
                    <Route index element={<StaffDashboard />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
