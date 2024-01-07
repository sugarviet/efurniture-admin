import { useMutation } from "@tanstack/react-query";
import { login } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLoginIn = () => {
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess: (data) => {
      notification.success({
        message: "Login successful",
      });
      localStorage.setItem("token", data);
      navigate("/dashboard");
    },
    onError: () => {
      notification.error({
        message: "Login failed",
      });
    },
  });
};