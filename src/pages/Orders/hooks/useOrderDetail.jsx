import { useGetOrderDetail } from "@services/Orders/services";

export function useOrderDetail(id) {
  const { data: order, isLoading } = useGetOrderDetail(id);

  return {
    order,
    isLoading,
  };
}
