import { lazy } from "react";
import { LazyRouteConfig } from "../LazyRoutes";


const Login = lazy(() => import("../../pages/public/login/v1"));

const publicRoutes: LazyRouteConfig[] = [
    {
        path: "/",
        element: Login,
    }
];

export default publicRoutes;
