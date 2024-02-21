import { useMutation } from "@tanstack/react-query";
import { login } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

export const useLoginIn = () => {
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess: (data) => {
      notification.success({
        message: "Login successful",
      });
      console.log(data);
      const decode = jwtDecode(data.metaData.access_token);
      console.log(decode);
      localStorage.setItem("token", decode.role);
      navigate("/");
    },
    onError: () => {
      notification.error({
        message: "Login failed",
      });
    },
  });
};