import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllTypes = async () => {
  const res = await request.get("/type");

  return res.data;
};


export const disableType = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/products/:id', id), rest);

  return res.data
}