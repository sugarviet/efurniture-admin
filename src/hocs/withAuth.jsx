/* eslint-disable react/display-name */
import Login from "@pages/Login";
import useAuth from "@stores/useAuth";

const withAuth = (WrappedComponent) => {
  return () => {
    const { accessToken } = useAuth();


    return accessToken ? <WrappedComponent /> : <Login />;
  };
};

export default withAuth;
