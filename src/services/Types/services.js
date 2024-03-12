import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";

import {
  getAllTypes,
  getAllDraftedTypes,
  createDraftedType,
  createType,
  disableType,
  updateDraftedType,
  updateType,
} from "./callers";

const API_KEY = {
  GET_ALL_TYPES: "types",
  GET_ALL_TYPES_DRAFT: "draft-types",
};

export const useGetAllTypes = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_TYPES],
    queryFn: getAllTypes,
  });
};

export const useGetAllDraftedTypes = (enabled = false) => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_TYPES_DRAFT],
    queryFn: getAllDraftedTypes,
    enabled,
  });
};

export const useCreateType = () => {
  const queryClient = useQueryClient();

  return useMutation(createType, {
    onSuccess: () => {
      notification.success({
        message: "Create Type successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_TYPES);
    },
    onError: () => {
      notification.error({
        message: "Create type failed",
      });
    },
  });
};

export const useCreateDraftedType = () => {
  const queryClient = useQueryClient();

  return useMutation(createDraftedType, {
    onSuccess: () => {
      notification.success({
        message: "Create Type successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_TYPES_DRAFT);
    },
    onError: () => {
      notification.error({
        message: "Create type failed",
      });
    },
  });
};

export const useUpdateType = () => {
  const queryClient = useQueryClient();

  return useMutation(updateType, {
    onSuccess: () => {
      notification.success({
        message: "Update type successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_PRODUCTS);
    },
    onError: () => {
      notification.error({
        message: "Update type failed",
      });
    },
  });
};

export const useUpdateDraftedType = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDraftedType, {
    onSuccess: () => {
      notification.success({
        message: "Update type successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_PRODUCTS);
    },
    onError: () => {
      notification.error({
        message: "Update type failed",
      });
    },
  });
};

export const useDisableType = () => {
  const queryClient = useQueryClient();

  return useMutation(disableType, {
    onSuccess: () => {
      notification.success({
        message: "Disable type successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_TYPES);
    },
    onError: () => {
      notification.error({
        message: "Disable type failed",
      });
    },
  });
};
