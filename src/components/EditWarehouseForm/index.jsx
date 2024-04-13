import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelect from "../FormSelect";
import {
  get_district_in_saigon,
  get_ward_in_saigon,
} from "../../api/addressApi";
import { useFetchOutsideSystem } from "../../hooks/api-hooks";
import { useEffect, useState } from "react";
import getCoordinates from "../../utils/getCoordinate";
import useWarehouse from "../../hooks/useWarehouse";
const EditWarehouseForm = ({data}) => {
    console.log('warehouse', data);
  const {updateWarehouse, form} = useWarehouse(data._id);
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});
  const { data: districtList } = useFetchOutsideSystem(
    get_district_in_saigon()
  );
  const { data: wardList } = useFetchOutsideSystem(
    get_ward_in_saigon(selectedDistrict?.id),
    null,
    !!selectedDistrict
  );

  const handleDistrictChange = (value, option) => {
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
  const onFinish = async(value) => {
    const coordinates = await getCoordinates(
      `${value.street} ${selectedDistrict?.name?.label || selectedDistrict} ${selectedWard?.name?.labe || setSelectedWard} ${value.province}`
    );
  
    const body = {
      ...value,
      district: selectedDistrict?.name?.label || selectedDistrict,
      ward: selectedWard?.name?.label || selectedWard,
      longitude: coordinates[0],
      latitude: coordinates[1],
    }
    updateWarehouse(body);

  };

  useEffect(() => {
    setSelectedDistrict(data.district)
    setSelectedWard(data.ward);
  }, [])

  return (
    <Form
      form={form}
      requiredMark="optional"
      initialValues={data}
      layout="vertical"
      onFinish={onFinish}
    >
      <FormInput
        label="Location"
        name="location"
        required
        placeholder="Enter location"
        className="h-10"
      />
      <FormInput
      readOnly
        label="Province"
        name="province"
        required
        placeholder="Enter location"
        className="h-10"
      />
      {/* <FormInput
        label="Street"
        name="street"
        required
        message="Please enter the code of message"
        placeholder="Enter street"
        className="h-10"
      /> */}

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

      <button type="submit" className="furniture-button">
        Edit
      </button>
    </Form>
  );
};

export default EditWarehouseForm;
