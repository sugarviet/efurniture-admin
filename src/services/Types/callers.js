import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllTypes = async () => {
  const res = await request.get("/type");

  return res.data;
};


export const getAllDraftedTypes = async () => {
  const res = await request.get("/type/share/draft");

  return res.data;
};

export const disableType = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/products/:id', id), rest);

  return res.data
}

export const createType = async(data) => {
  const res = await request.post('/products', data);

  return res.data
}

export const createDraftedType = async(data) => {
  const res = await request.post('/products', data);

  return res.data
}

export const updateType = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/products/:id', id), rest);

  return res.data
}

export const updateDraftedType = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/products/:id', id), rest);

  return res.data
}