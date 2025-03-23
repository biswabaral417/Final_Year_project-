import { JSX, LazyExoticComponent } from "react";
import { RouteObject } from "react-router-dom";

export interface LazyRouteConfig extends Omit<RouteObject, 'element'> {
    element: LazyExoticComponent<FC>;
}
