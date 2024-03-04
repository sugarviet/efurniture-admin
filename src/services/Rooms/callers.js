import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllRooms = async () => {
  const res = await request.get("/room");

  return res.data;
};

export const getRoomDetail = async (id) => {
  const res = await request.get(urlcat("/room/:id", { id }));

  return res.data;
};

export const createRoom = async (data) => {
  const res = await request.post('/room', data);

  return res.data
}

export const updateRoom = async (data) => {
  const { id, ...rest } = data;
  const res = await request.put(urlcat('/room/:id', { id }), rest);

  return res.data
}

export const disableRoom = async (data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/room/:id', id), rest);

  return res.data
}