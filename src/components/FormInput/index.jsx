import { Input } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const FormInput = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  inputType,
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
      <Input
        placeholder={placeholder}
        type={inputType}
        className={classNames("rounded-none border border-black", className)}
      />
    </FormItem>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  inputType: PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  label: null,
  inputType: "text",
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};

export default FormInput;
