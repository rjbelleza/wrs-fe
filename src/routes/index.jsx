import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import('../pages/HomePage'));

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
}

export default AppRouter;
