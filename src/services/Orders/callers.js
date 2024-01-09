import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllOrder = async () => {
  const res = await request.get("/orders");

  return res.data;
};

export const getOrderDetail = async (id) => {
  const res = await request.get(urlcat("/orders/:id", { id }));

  return res.data;
};
