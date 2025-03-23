import { lazy } from "react";
import { LazyRouteConfig } from "../LazyRoutes";


const Dashboard = lazy(() => import("../../pages/protected/admin/Dashboard/v1"));

const adminRoutes: LazyRouteConfig[] = [
    {
        path: "/",
        element: Dashboard,
    }
];

export default adminRoutes;
