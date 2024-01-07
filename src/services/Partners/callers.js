import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllPartner = async () => {
  const res = await request.get("/users");

  return res.data;
};

export const getPartnerDetail = async (id) => {
  const res = await request.get(urlcat("/users/:id", { id }));

  return res.data;
};
