import FormSelect from "@components/FormSelect";
import { useCreatingProductValues } from "../CreatingProductContext";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_subType } from "@api/subtypeApi";
import PropTypes from "prop-types";
import { transferSelectOption } from "@utils/transferSelectOption";
import { useFetch } from "@hooks/api-hooks";
import { get_sub_type_by_type } from "@api/subtypeApi";

const FormSelectSubTypes = () => {
  const { handleSelectSubType, productType } = useCreatingProductValues();
  
  const {data} = useFetch(get_sub_type_by_type(productType), undefined, !!productType)


  const subTypesSelectOptions = transferSelectOption(data, "slug", "slug");

  return (
    <FormSelect
      label="SubType"
      name="subtype"
      options={subTypesSelectOptions}
      mode="multiple"
      onChange={handleSelectSubType}
    />
  );
};

export default FormSelectSubTypes
