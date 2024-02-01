import { Form } from "antd";
import PropTypes from "prop-types";

const validateWhitespace = () => ({
  validator(rule, value, callback) {
    if (value.trim() === "") {
      callback("Input cannot be empty or contain only white spaces!");
    } else {
      callback();
    }
  },
})

const validateConfirmPassword = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("The new password that you entered does not match!")
    );
  },
});

const FORM_TYPES = {
  password: {
    rules: [{ required: true, message: "Please input your password!" }, validateWhitespace],
  },
  confirmPassword: {
    rules: [
      { required: true, message: "Please input your password!" },
      validateConfirmPassword,
    ],
  },
  default: {
    rules: [{ required: false, message: "" }],
  },
};

const FormItem = ({ children, label, name, type, message, required, ...others }) => {
  const customRules = [
    { required: true, message },
    validateWhitespace,
  ];
  return (
    <Form.Item
      label={label ? <span className="text-lg text-gray-800 font-semibold">{label}</span> : label}
      name={name}
      rules={required ? customRules : FORM_TYPES[type].rules}
      {...others}
    >
      {children}
    </Form.Item>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
};

FormItem.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
};

export default FormItem;
