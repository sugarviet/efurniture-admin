/* eslint-disable react/display-name */
import useAuth from "@stores/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();

    useEffect(() => {
      if(!accessToken){
        navigate('/login')
      }
    }, [accessToken])


    return <WrappedComponent />;
  };
};

export default withAuth;
