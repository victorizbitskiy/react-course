import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../../router';

const AppRouter = () => {
  const isAuth = false;
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map((route, index) => (
          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={index}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to="/posts" replace />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={index}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
  );
};

export default AppRouter;