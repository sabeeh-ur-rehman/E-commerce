import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteProtect = ({ component: Component }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? <Component /> : <Navigate to="/login" />;
};

export default RouteProtect;
