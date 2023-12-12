import { request } from "../../utils/request";

export const getAllUser = async () => {
  const res = await request.get("/users");

  return res.data;
};