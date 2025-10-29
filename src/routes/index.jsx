import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SessionExpired from "@/components/auth/SessionExpired";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const StaffLayout = lazy(() => import('@/layouts/StaffLayout'));

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const Logout = lazy(() => import('@/components/auth/Logout'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const StaffDashboard = lazy(() => import('@/pages/staff/StaffDashboard'));

const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="session-expired" element={<SessionExpired />} />

            <Route element={<ProtectedRoute role={["admin"]} />}>
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoute role={["staff"]} />}>
                <Route path="staff" element={<StaffLayout />}>
                    <Route index element={<StaffDashboard />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
