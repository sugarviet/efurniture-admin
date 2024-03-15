import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";
import FormDatePicker from "@components/FormDatePicker";
import FurnitureSelection from "../FurnitureSelection";
import FormTextArea from "@components/FormTextArea";
import FormItem from "../FormItem";
import FormSelect from "../FormSelect";
import {
  get_district_in_saigon,
  get_ward_in_saigon,
} from "../../api/addressApi";
import { useFetchOutsideSystem } from "../../hooks/api-hooks";
import { useState } from "react";
const CreatingWarehouseForm = () => {
  const [form] = Form.useForm();
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});
  const { data: districtList } = useFetchOutsideSystem(
    get_district_in_saigon()
  );
  const { data: wardList } = useFetchOutsideSystem(
    get_ward_in_saigon(selectedDistrict.id),
    null,
    !!selectedDistrict
  );


  const handleDistrictChange = (value , option) => {
    console.log(value, option);
    setSelectedWard({ id: "0", name: "" });
    setSelectedDistrict({
      id: value,
      name: option,
    });
   
  };
  const handleWardChange = (value, option) => {
    setSelectedWard({
      id: value,
      name: option,
    });
  };
  const onFinish = (value) => {};

  return (
    <Form
      form={form}
      requiredMark="optional"
      layout="vertical"
      onFinish={onFinish}
    >
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Code"
          name="code"
          required
          message="Please enter the code of message"
          placeholder="Enter voucher code"
          className="h-10"
        />
        <FormInput
          label="Name"
          name="name"
          required
          message="Please enter the code of message"
          placeholder="Enter voucher name"
          className="h-10"
        />
      </div>
      <FormTextArea
        label="Description"
        name="description"
        required
        placeholder="Enter voucher description"
        message="Please enter the description of the voucher"
      />
      <FormSelect
        label="District"
        name="district"
        required
        onChange={handleDistrictChange}
        placeholder="Enter district"
        options={districtList?.map((district) => ({
          label: district.district_name,
          value: district.district_id,
        }))}
      />
      <FormSelect
        label="Ward"
        name="ward"
        required
        onChange={handleWardChange}
        placeholder="Enter Ward"
        options={wardList?.map((district) => ({
          label: district.ward_name,
          value: district.ward_id,
        }))}
      />

      <button onClick={onFinish} className="furniture-button">
        Create
      </button>
    </Form>
  );
};

export default CreatingWarehouseForm;
