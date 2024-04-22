import FormSelect from "@components/FormSelect";
import PropTypes from "prop-types";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_types, get_published_type } from "../../../api/typesApi";
import { useCreatingProductValues } from "../CreatingProductContext";
import { transferSelectOption } from "@utils/transferSelectOption";
function FormSelectType({ data, label = "Type", name = "type" }) {
  const { handleSelectType } = useCreatingProductValues();
  const typesSelectOptions =transferSelectOption(data, "name", "slug");

  return (
    <FormSelect
      label={label}
      name={name}
      options={typesSelectOptions}
      onChange={handleSelectType}
      placeholder={"Select type..."}
      required
    />
  );
}

FormSelectType.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default withFetchData(FormSelectType, get_published_type);
