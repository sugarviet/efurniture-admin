import PropTypes from "prop-types";
import FormSelect from "@components/FormSelect";
import { get_all_roles } from "@api/roleApi";
import { withFetchData } from "@hocs/withFetchData";

const FormSelectRole = ({ data }) => {
  const selectOptions = data.map((item) => ({
    label: `${item.role} ${item.action}`,
    value: item._id,
  }));
  return (
    <FormSelect
      label="role"
      name="role"
      mode="multiple"
      options={selectOptions}
    />
  );
};

FormSelectRole.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(FormSelectRole, get_all_roles);
