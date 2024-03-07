import { Form, Button } from "antd";
import AppModal from "@components/AppModal";
import { useState } from "react";
import FormInput from "@components/FormInput";
import FormUploadSingleButton from "@components/FormUploadSingleButton";
import FormSelect from "@components/FormSelect";
import { useCreatingProductValues } from "../CreatingProductContext";
import FormTextArea from "@components/FormTextArea";

import { useFetch } from "@hooks/api-hooks";
import { get_all_types } from "@api/typesApi";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_subType } from "@api/subtypeApi";
import PropTypes from "prop-types";
import { get_attribute } from "@api/attributeApi";
import { get_sub_type_group } from "@api/subTypeGroup";

const transferSelectOption = (data, label, value) => {
  return data?.map((item) => ({
    label: item[label],
    value: item[value],
  }));
};

const FormSelectSubTypes = ({ data }) => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { handleSelectSubType } = useCreatingProductValues();
  const { data: allTypes } = useFetch(get_all_types());
  const { data: allAtrributes } = useFetch(get_attribute());
  // const { data: allSubtypesGroup } = useFetch(get_sub_type_group());
  // console.log('allSubtypesGroup', allSubtypesGroup);

  const subTypesSelectOptions = transferSelectOption(data, "slug", "slug");
  const typesSelectOptions = transferSelectOption(allTypes, "name", "_id");
  const typesAttributeOptions = transferSelectOption(
    allAtrributes,
    "name",
    "_id"
  );
  const onFinish = (values) => {};

  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-52">
        <FormSelect
          label="SubType"
          name="subtype"
          className="col-span-1"
          options={subTypesSelectOptions}
          mode="multiple"
          onChange={handleSelectSubType}
        />
        <Button className="w-40" onClick={() => setOpenModalCreate(true)}>
          Create new type
        </Button>
      </div>

      <AppModal isOpen={openModalCreate} setIsOpen={setOpenModalCreate}>
        <Form layout="vertical" onFinish={onFinish}>
          <FormInput
            name="subType"
            label="Sub Type"
            placeholder="Sub Type"
            required
          />
          <FormSelect
            label="Type"
            name="type_id"
            options={typesSelectOptions}
            required
          />
          <FormSelect
            label="Attributes"
            name="attributes"
            options={typesAttributeOptions}
            mode="multiple"
            required
          />
          <FormSelect
            label="Type"
            name="type_id"
            options={typesSelectOptions}
            required
          />
          <FormUploadSingleButton
            label="Subtype thumb"
            name="thumb"
            className="xl:w-[19rem] lg:w-[10rem]"
            required
          />
           <FormTextArea
              label="Description"
              name="description"
              required
              placeholder="Enter description"
              className="w-full"
            />
          <Button type="primary" className="primary" htmlType="submit">
            Create types
          </Button>
        </Form>
      </AppModal>
    </div>
  );
};

FormSelectSubTypes.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(FormSelectSubTypes, get_all_subType);
