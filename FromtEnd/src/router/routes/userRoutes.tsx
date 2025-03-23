import { lazy } from "react";
import { LazyRouteConfig } from "../LazyRoutes";


const Dashboard = lazy(() => import("../../pages/protected/admin/Dashboard/v1"));

const userRoutes: LazyRouteConfig[] = [
    {
        path: "/",
        element: Dashboard,
    }
];

export default userRoutes;
