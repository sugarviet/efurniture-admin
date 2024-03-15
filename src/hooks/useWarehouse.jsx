import { useUpdate } from "./api-hooks";
import { add_product_to_warehouse } from "../api/productApi";
import { get_warehouse_detail } from "../api/warehouseApi";

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
  return {
    addProductToWarehouse,
  };
}
