import { usePost } from "./api-hooks";
import { Form } from "antd";
import dayjs from "dayjs";

import { create_flash_sale, get_all_flash_sale } from "../api/flashsaleApi";
import useNotification from "./useNotification";
import { useNavigate } from "react-router-dom";
export default function useFlashSale() {
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

  const handleCreateFlashsale = (data) => {
    const {name, endDay, startDay, products} = data;
    const formatStartDate = dayjs(startDay).format("YYYY-MM-DD:HH:mm");
    const formatEndDate = dayjs(endDay).format("YYYY-MM-DD:HH:mm");
    const body = {
        name,
        endDay: formatEndDate,
        startDay: formatStartDate,
        products: products.map(item => ({ productId: item.product._id, count: item.count, salePrice: item.salePrice}))
    }

    console.log(body);
    // createFlashsale(body)
  }
  return {
    handleCreateFlashsale,
    form,
  };
}
