import axios from "axios";

export const getAllProduct = async () => {
  const res = await axios.get("");

  return res.data;
};