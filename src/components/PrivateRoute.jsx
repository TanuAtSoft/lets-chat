import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
