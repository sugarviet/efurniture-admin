import { Input } from "antd";
import FormItem from "../FormItem";
import PropTypes from "prop-types";

const FormInput = ({ label, name, placeholder, type, required, message, inputType }) => {
  return (
    <FormItem label={label} name={name} type={type} required={required} message={message}>
      <Input placeholder={placeholder} type={inputType}/>
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
  };
  
  FormInput.defaultProps = {
    label: null,
    inputType: 'text',
    required: false,
    message: "Please fill in this field",
    type: "default",
  };
  

export default FormInput;
