import React from "react";
import UseAuth from "../hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <h1 className="flex justify-center items-center text-center">
        Loading...
      </h1>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
