import { useQuery } from "@tanstack/react-query";
import {
  getAllProduct
} from "./callers";

const API_KEY = {
    GET_ALL_PRODUCTS: 'products'
}

export const useGetAllProducts = () => {
    return useQuery({
      queryKey: API_KEY.GET_ALL_PRODUCTS,
      queryFn: getAllProduct,
    });
  };