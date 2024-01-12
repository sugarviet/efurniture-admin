import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllUser,
  createUser,
  disableUser,
  getUserDetail,
  updateUser
} from "./callers";
import { notification } from "antd";

const API_KEY = {
  GET_ALL_USERS: 'users',
  GET_USER_DETAIL: 'user',
}

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_USERS],
    queryFn: getAllUser,
  });
};

export const useGetUserDetail = () => {
  return useQuery({
    queryKey: [API_KEY.GET_USER_DETAIL],
    queryFn: getUserDetail,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      notification.success({
        message: "Create user successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_USERS);

    },
    onError: () => {
      notification.error({
        message: "Create product failed",
      });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: () => {
      notification.success({
        message: "Update user successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_USERS);

    },
    onError: () => {
      notification.error({
        message: "Update user failed",
      });
    },
  });
};

export const useDisableUser = () => {
  const queryClient = useQueryClient();

  return useMutation(disableUser, {
    onSuccess: () => {
      notification.success({
        message: "Disable user successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_USERS);

    },
    onError: () => {
      notification.error({
        message: "Disable product failed",
      });
    },
  });
};