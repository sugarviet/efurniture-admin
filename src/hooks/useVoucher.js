import { get_create_voucher_api, get_update_voucher_api, get_voucher_api } from "../api/voucherApi";
import { usePost, useUpdate } from "./api-hooks";
import { Form } from "antd";
import useNotification from "./useNotification";
import { v4 as uuidv4 } from "uuid";
function useVoucher(id = '') {
  const { success_message, error_message } = useNotification();
  const [form] = Form.useForm();
  const { mutate: createMutation } = usePost(
    get_create_voucher_api(),
    undefined,
    () => {
      success_message("voucher", "add");
      form.resetFields();
    },
    () => {
      error_message("voucher", "add");
    },
    get_voucher_api()
  );
  const { mutate: updateMutation } = useUpdate(
    get_update_voucher_api(id),
    undefined,
    () => {
      success_message("voucher", "add");
      form.resetFields();
    },
    () => {
      error_message("voucher", "add");
    },
    get_voucher_api()
  );

  const createVoucher = (values) => {
    const {
      name,
      description,
      type,
      value,
      start_date,
      end_date,
      maximum_use,
      maximum_use_per_user,
      minimum_order_value,
      products,
      max_discount,
    } = values;

    const body = {
      name: name,
      description: description,
      type: type,
      code: uuidv4(),
      value: value,
      start_date: start_date,
      end_date: end_date,
      maximum_use: maximum_use,
      maximum_use_per_user: maximum_use_per_user,
      minimum_order_value: minimum_order_value,
      max_discount: max_discount,
      is_active: 1,
      products: products ? products.map((item) => item._id) : [],
    };
    // console.log(body);
    createMutation(body);
  };

  const editVoucher = (values) => {
    const {
      name,
      description,
      type,
      value,
      start_date,
      end_date,
      code,
      maximum_use,
      maximum_use_per_user,
      minimum_order_value,
      products,
      max_discount,
    } = values;

    const body = {
      name: name,
      description: description,
      type: type,
      code: code,
      value: value,
      start_date: start_date,
      end_date: end_date,
      maximum_use: maximum_use,
      maximum_use_per_user: maximum_use_per_user,
      minimum_order_value: minimum_order_value,
      max_discount: max_discount,
      is_active: 1,
      products: products ? products.map((item) => item._id) : [],
    };
    // console.log(body);
    updateMutation(body);
  };

  return { createVoucher, form, editVoucher };
}

export default useVoucher;
