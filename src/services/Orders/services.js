import { useQuery } from "@tanstack/react-query";
import {
  getAllOrder,
  getOrderDetail
} from "./callers";

const API_KEY = {
  GET_ALL_ORDERS: 'orders',
  GET_ORDER: 'order'
}

export const useGetAllOrder = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_ORDERS],
    queryFn: getAllOrder,
  });
};

export const useGetOrderDetail = (id) => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ORDER, id],
      queryFn: () => getOrderDetail(id),
    },
  );
};

