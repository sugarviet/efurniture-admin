import { DatePicker } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";

const { RangePicker } = DatePicker;

const FormRangePicker = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  picker,
  className,
}) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
    >
      <RangePicker
        placeholder={placeholder}
        picker={picker}
        className={className}
      />
    </FormItem>
  );
};

FormRangePicker.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  picker: PropTypes.string,
  className: PropTypes.string,
};

FormRangePicker.defaultProps = {
  label: null,
  picker: "",
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};

export default FormRangePicker;
