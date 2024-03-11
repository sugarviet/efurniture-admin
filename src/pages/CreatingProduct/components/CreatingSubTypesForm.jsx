import { Form, Button } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormSelect from "@components/FormSelect";
import FormTextArea from "@components/FormTextArea";

import { useFetch } from "@hooks/api-hooks";
import { get_all_subType } from "@api/subtypeApi";
import { get_attribute } from "@api/attributeApi";
import { get_sub_type_group } from "@api/subTypeGroup";
import { usePost } from "../../../hooks/api-hooks";
import { create_subtype } from "../../../api/subtypeApi";
import FormSelectType from "./FormSelectType";
import { transferSelectOption } from "@utils/transferSelectOption";

const CreatingSubTypesForm = () => {
  const { data: allAtrributes } = useFetch(get_attribute());
  const { data: allSubtypesGroup } = useFetch(get_sub_type_group());
  const { mutate: createSubtype } = usePost(
    create_subtype(),
    undefined,
    () => {},
    () => {},
    get_all_subType()
  );
  
  const typesAttributeOptions = transferSelectOption(
    allAtrributes,
    "name",
    "_id"
  );
  const allSubtypesGroupOptions = transferSelectOption(
    allSubtypesGroup,
    "label",
    "_id"
  );
  const onFinish = (values) => {
    const data = {
      ...values,
      thumb: values.thumb.file.url,
    };
    createSubtype(data);
  };
  return (
    <Form layout="vertical" onFinish={onFinish} requiredMark='optional'>
      <FormInput
        name="subType"
        label="Sub Type"
        placeholder="Sub Type"
        required
      />

      <FormSelectType label="Type" name="type_id" />
      <FormSelect
        label="Attributes"
        name="attributes"
        options={typesAttributeOptions}
        mode="multiple"
        required
      />
      <FormSelect
        label="Group attributes"
        name="group"
        options={allSubtypesGroupOptions}
        required
      />
      <FormUploadButton
        label="Subtype thumb"
        name="thumb"
        className="xl:w-96 lg:w-96 md:w-[8rem]"
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
  );
};

export default CreatingSubTypesForm;
