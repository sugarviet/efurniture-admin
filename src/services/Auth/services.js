import { useMutation } from "@tanstack/react-query";
import { login } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { getCurrentUserRole } from "@utils/getCurrentUserRole";
import { refreshPage } from "@utils/refreshPage";
import { setLocalStorage } from "@utils/setLocalStorage";

import Cookies from 'js-cookie';


const init_route = {
  superAdmin: "/users",
  admin: "/",
  staff: "/products",
};

export const useLoginIn = () => {
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess: (data) => {
      notification.success({
        message: "Login successful",
      });
      const decode = jwtDecode(data.metaData.access_token);
      const role = getCurrentUserRole(decode.role);
      setLocalStorage('token', decode.role)



      Cookies.set('accress_token', data.metaData.access_token)
      Cookies.set('refresh_token', data.metaData.refresh_token)
      Cookies.set('account_id', decode.account_id)


      navigate(init_route[role]);

      refreshPage();
    },
    onError: () => {
      notification.error({
        message: "Login failed",
      });
    },
  });
};
