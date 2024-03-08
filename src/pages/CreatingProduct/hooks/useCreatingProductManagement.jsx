import { usePost } from "../../../hooks/api-hooks";
import useNotification from "@hooks/useNotification";
import { get_attribute_by_list_subtype } from "../../../api/attributeApi";

function useCreatingProductManagement() {
  const { success_message, error_message } = useNotification();

    const { mutate: get_product_by_subtype, data: listAttribute } = usePost(
        get_attribute_by_list_subtype(),
        undefined,
        () => {},
        () => {}
      );
    return {
        get_product_by_subtype,
        listAttribute
    };
}

export default useCreatingProductManagement;