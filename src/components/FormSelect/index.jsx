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
  defaultValue,
  className,
  mode,
  allowClear,
  style,
  onChange,
}) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
      style={style}
    >
      <Select
        mode={mode}
        allowClear={allowClear}
        value={defaultValue}
        placeholder={placeholder}
        options={options}
        className={className}
        onChange={onChange}
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
  className: PropTypes.string,
  mode: PropTypes.string,
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

FormSelect.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
  options: [],
  className: "",
  mode: "",
  allowClear: false,
};

export default FormSelect;
