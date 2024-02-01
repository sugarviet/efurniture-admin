import { Select } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FormSelect = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  options,
  defaultValue
}) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
    >
      <Select
        defaultValue={defaultValue}
        placeholder={placeholder}
        options={options}
      />
    </FormItem>
  );
};

FormSelect.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.string,
};

FormSelect.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
  options: []
};

export default FormSelect;
