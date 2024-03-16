import { usePost, useUpdate } from "./api-hooks";
import { add_product_to_warehouse } from "../api/productApi";
import {
  create_warehouse,
  get_all_warehouse,
  get_warehouse_detail,
} from "../api/warehouseApi";

export default function useWarehouse(id) {
  const { mutate: addProductToWarehouse } = useUpdate(
    add_product_to_warehouse(id),
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {},
    get_warehouse_detail({ id })
  );
  const { mutate: createWarehouse } = usePost(
    create_warehouse(),
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {},
    get_all_warehouse()
  );
  return {
    createWarehouse,
    addProductToWarehouse,
  };
}
