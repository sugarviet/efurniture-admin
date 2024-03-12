import { request } from "@utils/request";
import urlcat from "urlcat";

export const getWarehouse = async () => {
  const res = await request.get("/warehouse");

  return res.data.metaData;
};

export const getWarehouseDetail = async (id) => {
  const res = await request.get(urlcat("/warehouse/:id", { id }));

  return res.data;
};

