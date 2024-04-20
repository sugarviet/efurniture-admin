import FormSelect from "@components/FormSelect";
import PropTypes from "prop-types";
import { withFetchData } from "@hocs/withFetchData";
import {  get_published_type } from "@api/typesApi";
import { transferSelectOption } from "@utils/transferSelectOption";
function FormSelectType({ data, label = "Type", name = "type", receiveValue = 'slug' }) {
  const typesSelectOptions =transferSelectOption(data, "name", receiveValue);
  return (
    <FormSelect
      label={label}
      name={name}
      options={typesSelectOptions}
      required
      placeholder="Select type"
    />
  );
}

FormSelectType.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  receiveValue: PropTypes.string,
};

export default withFetchData(FormSelectType, get_published_type);
