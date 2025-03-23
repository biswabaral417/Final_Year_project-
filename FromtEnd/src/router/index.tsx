import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useRoutesContext from "../provider/RoutesProvider";




const Router: React.FC = () => {
  const { routesConfig } = useRoutesContext();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={React.createElement(route.element)}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
