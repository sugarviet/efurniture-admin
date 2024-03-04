import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllUser = async () => {
  const res = await request.get("/account/adminMaster?page=1&limit=12");

  return res.data.metaData;
};

export const getUserDetail = async (id) => {
  const res = await request.get(urlcat("/users/:id", { id }));

  return res.data;
};

export const createUser = async(data) => {
  const res = await request.post('/users', data);

  return res.data
}

export const updateUser = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/users/:id', id), rest);

  return res.data
}

export const disableUser = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/users/:id', id), rest);

  return res.data
}