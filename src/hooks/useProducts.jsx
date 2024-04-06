import useNotification from './useNotification';
import { useUpdate } from './api-hooks';
import { publish_product_admin, get_published_product } from '../api/productApi';
export default function useProducts() {
    const { success_message, error_message } = useNotification();
    const { mutate: publishedProduct } = useUpdate(
      publish_product_admin(),
      undefined,
      () => {
        success_message("products", "publish");
      },
      () => {
        error_message("products", "publish");
      },
      get_published_product()
    );
  return {
    publishedProduct
  }
}
