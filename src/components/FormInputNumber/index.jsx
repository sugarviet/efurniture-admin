import { InputNumber } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FormInputNumber = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  className,
  ...others
}) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
    >
      <InputNumber placeholder={placeholder} className={className} type="number" {...others}/>
    </FormItem>
  );
};

FormInputNumber.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  className: PropTypes.string,
};

FormInputNumber.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};

export default FormInputNumber;
