import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllOrder = async () => {
  const res = await request.get("/order/admin/all/orders?page=1&limit=10");

  return res.data;
};

export const getOrderDetail = async (id) => {
  const res = await request.get(urlcat("/order/admin/:id", { id }));

  return res.data;
};
