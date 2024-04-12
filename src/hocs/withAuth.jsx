/* eslint-disable react/display-name */
import useAuth from "@stores/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "../components/FallbackComponent";

const withAuth = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();

    useEffect(() => {
      if (!accessToken) {
        navigate('/login')
      }
    }, [accessToken])


    return accessToken ?
      <ErrorBoundary fallback={<FallbackComponent />}>
        <WrappedComponent />
      </ErrorBoundary>
      : null;
  };
};

export default withAuth;
