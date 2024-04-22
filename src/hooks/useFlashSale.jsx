import { usePost, useUpdate } from "./api-hooks";
import { Form } from "antd";
import dayjs from "dayjs";

import { create_flash_sale, get_all_flash_sale, edit_flashsale } from "../api/flashsaleApi";
import useNotification from "./useNotification";
import { useNavigate } from "react-router-dom";
import { formatDateByDateAndMinute } from "../utils/formatDate";
import { formatThumbs } from "../utils/formatThumb";
export default function useFlashSale(id = '') {
  const { error_message, success_message } = useNotification();

  const navigate = useNavigate()
  const [form] = Form.useForm();

  const { mutate: createFlashsale } = usePost(
    create_flash_sale(),
    undefined,
    () => {
      success_message("flashsale", "add");
      navigate('/flashsales')
      form.resetFields();
    },
    (error) => {
      error_message("flashsale", "add", error.response.data.error.message);
    },
    get_all_flash_sale()
  );

  const { mutate: editFlashsale } = useUpdate(edit_flashsale(id), undefined, () => {
    success_message("flashsale", "edit");

  }, () => {
    success_message("flashsale", "edit");

  }, get_all_flash_sale())

  const handleCreateFlashsale = (data) => {
    const { name, endDay, startDay, products, thumb, background } = data;


    const body = {
      name,
      endDay: formatDateByDateAndMinute(endDay),
      startDay: formatDateByDateAndMinute(startDay),
      products: products.map(item => ({ productId: item.product._id, count: item.count, salePrice: item.salePrice })),
      thumb: formatThumbs(thumb)[0],
      background: formatThumbs(background)[0],
    }
    createFlashsale(body)
  }

  const handleEditFlashsale = (data) => {
    const { name, endDay, startDay, products } = data;
    const body = {
      name,
      endDay: formatDateByDateAndMinute(endDay),
      startDay: formatDateByDateAndMinute(startDay),
      products: products.map(item => ({ productId: item.productId._id, count: item.count, salePrice: item.salePrice })),
    }

    editFlashsale(body)
  }
  return {
    handleCreateFlashsale,
    form,
    handleEditFlashsale
  };
}
