import { usePost, useUpdate } from "./api-hooks";
import { add_product_to_warehouse } from "../api/productApi";
import {
  create_warehouse,
  get_all_warehouse,
  get_warehouse_detail,
  get_switch_notification_in_warehouse,
  update_lowstock_qty_in_warehouse
} from "../api/warehouseApi";
import useNotification from "./useNotification";

export default function useWarehouse(id) {
  const { error_message, success_message } = useNotification();
  const { mutate: addProductToWarehouse } = useUpdate(
    add_product_to_warehouse(id),
    undefined,
    () => {
      success_message('warehouse', 'add_product')
    },
    () => {
      error_message('warehouse', 'add_product');
    },
    get_warehouse_detail({ id })
  );
  const { mutate: createWarehouse } = usePost(
    create_warehouse(),
    undefined,
    () => {
      success_message('warehouse', 'add')

    },
    () => {
      error_message('warehouse', 'add');

    },
    get_all_warehouse()
  );
  const { mutate: switchNotification } = useUpdate(get_switch_notification_in_warehouse(id), undefined, () => {
    success_message('warehouse', 'receive_low_stock')

  }, () => {
    error_message('warehouse', 'receive_low_stock');

  })
  const { mutate: updateProductLowstock } = useUpdate(update_lowstock_qty_in_warehouse(id), undefined, () => {
    success_message('warehouse', 'update_low_stock')

  }, () => {
    error_message('warehouse', 'update_low_stock');

  })

  const handleSwitchNotification = (value, productId) => {
    console.log(value, productId);
  }

  const handleUpdateProductLowstock = () => { }
  return {
    createWarehouse,
    addProductToWarehouse,
    handleSwitchNotification,
    handleUpdateProductLowstock
  };
}
