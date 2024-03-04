import { useQuery} from "@tanstack/react-query";
import {
  getWarehouse,
  getWarehouseDetail
} from "./callers";

const API_KEY = {
    GET_ALL_WAREHOUSES: 'warehouses',
    GET_WAREHOUSE_DETAIL: 'warehouse'
}

export const useGetWarehouse = () => {
    return useQuery({
      queryKey: [API_KEY.GET_ALL_WAREHOUSES],
      queryFn: getWarehouse,
    });
  };

  export const useGetWarehouseDetail = (id) => {
    return useQuery(
      {
        queryKey: [API_KEY.GET_WAREHOUSE_DETAIL, id],
        queryFn: () => getWarehouseDetail(id),
      },
    );
  };

