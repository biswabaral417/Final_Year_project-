import { LazyRouteConfig } from "../../router/LazyRoutes";

export default interface RoutesContextTypes {
    routesConfig: LazyRouteConfig[]; 
    loading: boolean;
}
