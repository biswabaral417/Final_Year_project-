import { lazy } from "react";
import { LazyRouteConfig } from "../LazyRoutes";

// Lazy-loaded components
const Login = lazy(() => import("../../pages/public/login/v1"));
const SignUp = lazy(() => import("../../pages/public/signup/v1"));
const Layout = lazy(() => import("../../pages/public/Layout"));
const ForgotPassword = lazy(() => import("../../pages/public/forgotPassword/v1"));
const NewPassword = lazy(() => import("../../pages/public/newPassword/v1"));

// Define public routes with children
const publicRoutes: LazyRouteConfig[] = [
    {
        path: "/",
        element: Layout,
        children: [
            {
                path: "/",
                element: Login,// this is login  page
            },
            {
                path: "/signup",
                element: SignUp, // this is sign up page
            },
            {
                path: "/forgot_password",
                element: ForgotPassword,// the fogot password page
            },
            {
                path: "/Verify_Email",
                element: ForgotPassword,// the fogot password page
            },
            {
                path: '/new_password',
                element: NewPassword
            }
        ]
    }
];

export default publicRoutes;
