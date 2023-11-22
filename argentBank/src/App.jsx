import React from "react";
import "./global.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { Error404 } from "pages/Error404/Error404";
import User from "pages/User/User";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Route index element={<User />} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
