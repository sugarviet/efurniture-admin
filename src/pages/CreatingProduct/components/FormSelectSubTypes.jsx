import FormSelect from "@components/FormSelect";
import { useCreatingProductValues } from "../CreatingProductContext";
import { transferSelectOption } from "@utils/transferSelectOption";
import { useFetch } from "@hooks/api-hooks";
import { get_sub_type_by_type } from "@api/subtypeApi";

const FormSelectSubTypes = () => {
  const { handleSelectSubType, productType } = useCreatingProductValues();
  
  const {data} = useFetch(get_sub_type_by_type(productType), undefined, !!productType)

  console.log(data, productType);


  const subTypesSelectOptions = transferSelectOption(data, "slug", "slug");

  return (
    <FormSelect
      label="SubType"
      name={["attributes", "type"]}
      required
      options={subTypesSelectOptions}
      mode="multiple"
      onChange={handleSelectSubType}
    />
  );
};

export default FormSelectSubTypes
