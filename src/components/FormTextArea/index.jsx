import { Input } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";
const { TextArea } = Input;

const FormTextArea = ({
  label,
  name,
  placeholder,
  type,
  required,
  message,
}) => {
  return (
    <FormItem
      label={label}
      name={name}
      type={type}
      required={required}
      message={message}
    >
      <TextArea
        className="border-black rounded-none"
        placeholder={placeholder}
        allowClear
        size="large"
      />
    </FormItem>
  );
};

FormTextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
};

FormTextArea.defaultProps = {
  label: null,
  required: false,
  message: "Please fill in this field",
  type: "default",
};

export default FormTextArea;
