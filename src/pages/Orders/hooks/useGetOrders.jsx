import { useGetAllOrder } from "@services/Orders/services";

export default function useGetOrders() {
  const { data: orders, isLoading } = useGetAllOrder();

  return {
    orders,
    isLoading,
  };
}
