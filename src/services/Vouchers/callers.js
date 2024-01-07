import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllVouchers = async () => {
  const res = await request.get("/vouchers");

  return res.data;
};

export const getVoucherDetail = async (id) => {
  const res = await request.get(urlcat("/vouchers/:id", { id }));

  return res.data;
};

export const createVoucher = async(data) => {
  const res = await request.post('/vouchers', data);

  return res.data
}

export const updateVoucher = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/vouchers/:id', id), rest);

  return res.data
}

export const disableVoucher = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/vouchers/:id', id), rest);

  return res.data
}