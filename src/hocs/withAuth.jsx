/* eslint-disable react/display-name */
import Login from "@pages/Login";
import useAuth from "@stores/useAuth";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return () => {
    const { accessToken } = useAuth();


    return accessToken ? <WrappedComponent /> : <Login />;
  };
};

export default withAuth;
