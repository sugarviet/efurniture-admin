import { useEffect } from "react";
import { Form } from "antd";
import { usePost } from "../../../hooks/api-hooks";
import { get_attribute_by_list_subtype } from "../../../api/attributeApi";
import { useCreatingProductValues } from "../CreatingProductContext";
import useNotification from "@hooks/useNotification";
import {
  get_draft_product,
  create_product_staff,
} from "../../../api/productApi";
import { useNavigate } from "react-router";

function useCreatingProductManagement() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { success_message, error_message } = useNotification();
  const { productType, productSubType } = useCreatingProductValues();
  const { mutate: get_product_by_subtype, data: listAttribute } = usePost(
    get_attribute_by_list_subtype()
  );

  const { mutate: create_draft_product } = usePost(
    create_product_staff(),
    undefined,
    () => {
      success_message("products", "add_draft");
      form.resetFields();
      navigate("/products");
    },
    () => {
      error_message("products", "add_draft");
    },
    get_draft_product()
  );

  useEffect(() => {
    if (productType && productSubType) {
      get_product_by_subtype({
        type: productType,
        listAttribute: productSubType,
      });
    }
  }, [productType, productSubType, get_product_by_subtype]);

  return {
    get_product_by_subtype,
    listAttribute,
    form,
    create_draft_product,
  };
}

export default useCreatingProductManagement;
