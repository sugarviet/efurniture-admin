import { useGetAllVouchers } from "@services/Vouchers/services";

export function useGetVouchers() {
  const { data: vouchers, isLoading } = useGetAllVouchers();

  return { vouchers, isLoading };
}
