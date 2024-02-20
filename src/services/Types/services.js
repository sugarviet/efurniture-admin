import { useQuery } from "@tanstack/react-query";
import {
  getAllTypes
} from "./callers";

const API_KEY = {
  GET_ALL_TYPES: 'types',
}

export const useGetAllTypes = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_TYPES],
    queryFn: getAllTypes,
  });
};
