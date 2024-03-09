import { InputNumber } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const FormInputNumber = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  className,
  style,
  ...others
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
      <InputNumber
        placeholder={placeholder}
        className={classNames(
          "border-black rounded-none w-full flex items-center",
          className
        )}
        type="number"
        {...others}
      />
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
  style: PropTypes.object,
};

FormInputNumber.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};

export default FormInputNumber;
