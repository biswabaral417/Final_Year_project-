import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useRoutesContext from "../provider/RoutesProvider";
import { LazyRouteConfig } from "./LazyRoutes";

// Create Router with dynamic layout handling
const Router: React.FC = () => {
  const { routesConfig } = useRoutesContext();

  // Render routes recursively
  const renderRoutes = (routes: LazyRouteConfig[]) => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.element />}>
        {/* Recursively render child routes if they exist */}
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {renderRoutes(routesConfig)} {/* Render the nested routes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
