import { Input} from "antd";
import FormItem from "../FormItem";
import FormInputNumber from "../FormInputNumber";
import FormSelect from "../FormSelect";
import PropTypes from "prop-types";

const FormMeasurementInput = ({name, label, required }) => {

  return (
    <FormItem label={label} required={required}>
      <Input.Group className="flex">
        <FormInputNumber name={[...name, 'value']}
          style={{ width: "calc(100% - 100px)" }}  className="w-full"/>
          <FormSelect  name={ [...name, 'unit']}
          style={{ width: "100px" }} options={[
            {
              value: "cm",
              label: "cm",
            },
            {
              value: "m",
              label: "m",
            },
            {
              value: "kg",
              label: "kg",
            },
          ]}/>
      </Input.Group>
    </FormItem>
  );
};

FormMeasurementInput.propTypes = {
  name: PropTypes.any,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default FormMeasurementInput;


