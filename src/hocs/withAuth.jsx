/* eslint-disable react/display-name */
import { useState } from "react";
import Login from "@pages/Login";
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  return () => {
    // const [loggedIn] = useState(!!localStorage.getItem('token'));
    const [loggedIn] = useState(!!Cookies.get("access_token"));

    console.log(loggedIn);

    if (!loggedIn){
      localStorage.removeItem('token')
      return <Login />;
    } 

    return <WrappedComponent />;
  };
};

export default withAuth;
