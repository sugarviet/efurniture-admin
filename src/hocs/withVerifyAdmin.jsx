/* eslint-disable react/display-name */

import { useState } from "react";
import { ROLE } from "../constants/role";
import Login from "@pages/Login";

const withVerifyAdmin = (WrappedComponent) => {
  return () => {
    const [isAdmin] = useState(localStorage.getItem('token'));

    if(ROLE.ADMIN !== isAdmin) return <Login />

    return (
      <WrappedComponent />
    );
  };
};

export default withVerifyAdmin;