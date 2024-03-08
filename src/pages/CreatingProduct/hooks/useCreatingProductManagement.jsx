import { useEffect } from "react";

import { usePost } from "../../../hooks/api-hooks";
import { get_attribute_by_list_subtype } from "../../../api/attributeApi";
import { useCreatingProductValues } from "../CreatingProductContext";

function useCreatingProductManagement() {
  const { productType, productSubType } = useCreatingProductValues();
    const { mutate: get_product_by_subtype, data: listAttribute } = usePost(
        get_attribute_by_list_subtype(),
      );
      useEffect(() => {
        if (productType && productSubType) {
          get_product_by_subtype({
            type: productType,
            listAttribute: productSubType,
          });
        }
      }, [productType, productSubType, get_product_by_subtype]);
    return {
        get_product_by_subtype,
        listAttribute
    };
}

export default useCreatingProductManagement;