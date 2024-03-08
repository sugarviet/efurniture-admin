import React, { useState } from "react";
import { Input, Select } from "antd";
import FormItem from "../FormItem";

const { Option } = Select;
const FormInputMeasurement = ({name}) => {
  const [unit, setUnit] = useState("centimeter");
  const [value, setValue] = useState("");

  const handleUnitChange = (value) => {
    setUnit(value);
  };
  return (
    
    <Input.Group compact>
      <Input
        name={name}
        style={{ width: "calc(100% - 100px)" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <Select
        value={unit}
        onChange={handleUnitChange}
        style={{ width: "100px" }}
      >
        <Option value="centimeter">Centimeter</Option>
        <Option value="meter">Meter</Option>
      </Select>
    </Input.Group>
    
  );
};

export default FormInputMeasurement;
