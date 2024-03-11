import FormItem from "@components/FormItem";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const FormDatePicker = ({
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
      <DatePicker
        className={classNames(
          "border-black border-[1px] rounded-none",
          className
        )}
        placeholder={placeholder}
        picker={picker}
      />
    </FormItem>
  );
};

FormDatePicker.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  picker: PropTypes.string,
  className: PropTypes.string,
};

FormDatePicker.defaultProps = {
  label: null,
  picker: "",
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};
export default FormDatePicker;
