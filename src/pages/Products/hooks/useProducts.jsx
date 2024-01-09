import { useGetAllProducts } from "@services/Products/services";

export default function useProducts() {
  const { data: products, isLoading } = useGetAllProducts();

  return { products, isLoading };
}
