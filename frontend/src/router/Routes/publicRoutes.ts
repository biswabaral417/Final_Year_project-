import {lazy} from "react"
import { createRoute } from "../createRoutes"
const Signup=lazy(()=>import("../../testAuth/signUp"))

const NotFound=lazy(()=>import("../../core/components/notFound/NotFound"))

export const publicRoutes=[
    createRoute({
        path:"*",
        element:NotFound,
        // errorElement: <ErrorBoundary>
    }),
    createRoute({
         path:"signup", element: Signup 
        }),
        


]