import { request } from "../../utils/request";

export const getAllPartner = async () => {
  const res = await request.get("/users");

  return res.data;
};