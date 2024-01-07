import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { notification } from "antd";
import {
  createVoucher, 
  disableVoucher,
  getAllVouchers, 
  getVoucherDetail,
  updateVoucher
} from "./callers";

const API_KEY = {
    GET_ALL_VOUCHERS: 'vouchers',
    GET_VOUCHER_DETAIL: 'voucher'
}

export const useGetAllVouchers = () => {
    return useQuery({
      queryKey: API_KEY.GET_ALL_VOUCHERS,
      queryFn: getAllVouchers,
    });
  };

  export const useGetVoucherDetail = (id) => {
    return useQuery(
      {
        queryKey: [API_KEY.GET_VOUCHER_DETAIL, id],
        queryFn: () => getVoucherDetail(id),
      },
    );
  };

  export const useCreateVoucher = () => {
    const queryClient = useQueryClient();
  
    return useMutation(createVoucher, {
      onSuccess: () => {
        notification.success({
          message: "Create voucher successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_VOUCHERS);
      
      },
      onError: () => {
        notification.error({
          message: "Create voucher failed",
        });
      },
    });
  };

  export const useUpdateVoucher = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateVoucher, {
      onSuccess: () => {
        notification.success({
          message: "Update voucher successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_VOUCHERS);
      
      },
      onError: () => {
        notification.error({
          message: "Update voucher failed",
        });
      },
    });
  };

  export const useDisableVoucher = () => {
    const queryClient = useQueryClient();
  
    return useMutation(disableVoucher, {
      onSuccess: () => {
        notification.success({
          message: "Disable voucher successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_VOUCHERS);
      
      },
      onError: () => {
        notification.error({
          message: "Disable voucher failed",
        });
      },
    });
  };