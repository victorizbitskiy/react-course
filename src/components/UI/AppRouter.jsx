import React from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from '../../router';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
          key={index}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;