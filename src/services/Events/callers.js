import { request } from "@utils/request";
import urlcat from "urlcat";

export const getAllEvents = async () => {
  const res = await request.get("/events");

  return res.data;
};

export const getEventDetail = async (id) => {
  const res = await request.get(urlcat("/events/:id", { id }));

  return res.data;
};

export const createEvent = async(data) => {
  const res = await request.post('/events', data);

  return res.data
}

export const updateEvent = async(data) => {
  const [id, ...rest] = data;
  const res = await request.put(urlcat('/events/:id', id), rest);

  return res.data
}

export const disableEvent = async(data) => {
  const [id, ...rest] = data;
  const res = await request.delete(urlcat('/events/:id', id), rest);

  return res.data
}