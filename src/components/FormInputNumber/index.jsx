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
  prefix,
  style,
  disabled,
  min,
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
      min={min}
      disabled={disabled}
      prefix={prefix}
        placeholder={placeholder}
        className={classNames(
          "border-black rounded-none w-full flex items-center",
          className
        )}
 
        {...others}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
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
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number
};

FormInputNumber.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
  prefix: "",
  disabled: false,
  min: 0

};

export default FormInputNumber;
