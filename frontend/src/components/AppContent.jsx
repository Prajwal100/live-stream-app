import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppFooter from "./AppFooter";
import routes from "../routes";
const AppContent = () => {
  return (
    <div id="content-wrapper">
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>

      {/* <!-- /.container-fluid --> */}
      {/* <!-- Sticky Footer --> */}
      <AppFooter />
    </div>
  );
};

export default AppContent;
