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

const FormItem = ({ children, label, name, type, message, required }) => {
  const customRules = [
    { required: true, message },
    validateWhitespace,
  ];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={required ? customRules : FORM_TYPES[type].rules}
    >
      {children}
    </Form.Item>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
};

FormItem.defaultProps = {
  required: false,
  message: "Please fill in this field",
  type: "default",
};

export default FormItem;
