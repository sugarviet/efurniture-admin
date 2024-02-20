import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  createProduct,
  disableProduct,
  getAllProduct,
  getProductDetail,
  updateProduct,
  getAllPublishedProduct
} from "./callers";

const API_KEY = {
  GET_ALL_PRODUCTS: 'products',
  GET_ALL_PRODUCTS_PUBLISHED: 'product-published',
  GET_PRODUCT_DETAIL: 'product'
}

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_PRODUCTS],
    queryFn: getAllProduct,
  });
};

export const useGetAllPublishedProducts = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_PRODUCTS_PUBLISHED],
    queryFn: getAllPublishedProduct,
  });
};

export const useGetProductDetail = (id) => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_PRODUCT_DETAIL, id],
      queryFn: () => getProductDetail(id),
    },
  );
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      notification.success({
        message: "Create product successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_PRODUCTS);

    },
    onError: () => {
      notification.error({
        message: "Create product failed",
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct, {
    onSuccess: () => {
      notification.success({
        message: "Update product successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_PRODUCTS);

    },
    onError: () => {
      notification.error({
        message: "Update product failed",
      });
    },
  });
};

export const useDisableProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(disableProduct, {
    onSuccess: () => {
      notification.success({
        message: "Disable product successfully",
      });
      queryClient.invalidateQueries(API_KEY.GET_ALL_PRODUCTS);

    },
    onError: () => {
      notification.error({
        message: "Disable product failed",
      });
    },
  });
};