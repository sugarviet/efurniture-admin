import { useQuery } from "@tanstack/react-query";
import {
  getAllPartner
} from "./callers";

const API_KEY = {
    GET_ALL_PARTNERS: 'partners'
}

export const useGetAllPartners = () => {
    return useQuery({
      queryKey: [API_KEY.GET_ALL_PARTNERS],
      queryFn: getAllPartner,
    });
  };