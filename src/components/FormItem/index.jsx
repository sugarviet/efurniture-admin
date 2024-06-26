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
});

const validateLeadingTrailingWhitespace = () => ({
  validator(rule, value, callback) {
    if (value.trim() !== value) {
      callback("Input cannot have leading or trailing whitespace!");
    } else {
      callback();
    }
  },
});

const validateSpecialCharacters = () => ({
  validator(rule, value, callback) {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharacters.test(value)) {
      callback("Input cannot contain special characters!");
    } else {
      callback();
    }
  },
});

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

const validatePassword = () => ({
  validator(rule, value, callback) {
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    if (!uppercaseRegex.test(value) || !numberRegex.test(value)) {
      callback("Password must contain at least one uppercase letter and one number");
    } else {
      callback();
    }
  },
});

const FORM_TYPES = {
  password: {
    rules: [
      { required: true, message: "Please input your password!" },
      validateWhitespace,
      validatePassword
    ],
  },
  confirmPassword: {
    rules: [
      { required: true, message: "Please input your password!" },
      validateConfirmPassword,
    ],
  },
  email: {
    rules: [
      { type: "email", required: true, message: "Please enter a valid email" },
    ],
  },
  text:{
    rules: [{ required: true }, validateWhitespace, validateSpecialCharacters, validateLeadingTrailingWhitespace]
  },
  description:{
    rules: [{ required: true }, validateWhitespace, validateLeadingTrailingWhitespace]
  },
  default: {
    rules: [{ required: false, message: "" }],
  },
};

const FormItem = ({
  children,
  label,
  name,
  type,
  message,
  required,
  ...others
}) => {
  const customRules = [{ required: true, message }];
  return (
    <Form.Item
      label={
        label ? (
          <span className="text-sm text-gray-800 font-semibold">{label}</span>
        ) : (
          label
        )
      }
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
