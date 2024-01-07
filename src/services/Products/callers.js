import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllProduct = async () => {
  const res = await request.get("/products");

  return res.data;
};

export const getProductDetail = async (id) => {
  const res = await request.get(urlcat("/products/:id", { id }));

  return res.data;
};

export const createProduct = async(data) => {
  const res = await request.post('/products', data);

  return res.data
}

export const updateProduct = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/products/:id', id), rest);

  return res.data
}

export const disableProduct = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/products/:id', id), rest);

  return res.data
}