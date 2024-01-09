import { useGetVoucherDetail } from "@services/Vouchers/services";

export default function useVoucherDetail(id) {
  const { data: voucher, isLoading } = useGetVoucherDetail(id);

  return {
    voucher,
    isLoading,
  };
}
