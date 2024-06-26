import FormItem from "@components/FormItem";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";
import locale from "antd/es/date-picker/locale/de_DE";
export default function FormDatePickerWithTime({
  label,
  name,
  placeholder,
  type,
  required,
  message,
  className,
  onChange,
}) {
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
        onChange={onChange}
        placeholder={placeholder}
        showTime
        format="YYYY-MM-DD:HH:mm"
        locale={{
          ...locale,
          lang: {
            ...locale.lang,
            now: "Current Time",
            ok: "Submit",
          }
        }}
      />
    </FormItem>
  );
}

FormDatePickerWithTime.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.any,
  type: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  picker: PropTypes.string,
  className: PropTypes.string,
};

FormDatePickerWithTime.defaultProps = {
  label: null,
  picker: "",
  required: false,
  message: "Please fill in this field",
  type: "default",
  className: "",
};
