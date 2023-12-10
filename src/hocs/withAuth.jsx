/* eslint-disable react/display-name */
import { useState } from "react";
import Login from "@pages/Login";

const withAuth = (WrappedComponent) => {
  return () => {
    const [loggedIn] = useState(!!localStorage.getItem('token'));

    if (!loggedIn) return <Login />;

    return <WrappedComponent />;
  };
};

export default withAuth;
