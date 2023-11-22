import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate to="/signIn" replace />
  );
};

export default ProtectedRoute;
