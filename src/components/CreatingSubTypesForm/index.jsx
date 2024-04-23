import { Form, Button } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormSelect from "@components/FormSelect";
import FormTextArea from "@components/FormTextArea";

import { useFetch } from "@hooks/api-hooks";
import { get_all_subType } from "@api/subtypeApi";
import { get_attribute } from "@api/attributeApi";
import { get_sub_type_group } from "@api/subTypeGroup";
import { usePost } from "@hooks/api-hooks";
import { create_subtype } from "@api/subtypeApi";
import FormSelectType from "../FormSelectType";
import { transferSelectOption } from "@utils/transferSelectOption";
import useNotification from "../../hooks/useNotification";
import { get_all_draft_subType } from "../../api/subtypeApi";

const CreatingSubTypesForm = () => {
  const { error_message, success_message } = useNotification();
  const [form] = Form.useForm();
  const { data: allAtrributes, isLoading: loadingAtrribute } = useFetch(get_attribute());
  const { data: allSubtypesGroup, isLoading: loadingSubtypegroup } = useFetch(get_sub_type_group());
  const { mutate: createSubtype } = usePost(
    create_subtype(),
    undefined,
    () => {
      success_message('subtypes', 'add_draft')
      form.resetFields();
    },
    (error) => {
      error_message('subtypes', 'add_draft', error)

    },
    get_all_draft_subType()
  );

  if (loadingAtrribute) return;
  if (loadingSubtypegroup) return;


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
    form.resetFields();

  };
  return (
    <Form layout="vertical" onFinish={onFinish} requiredMark='optional'>
      <FormInput
        name="subType"
        label="Sub Type"
        placeholder="Sub Type"
        required
      />

      <FormSelectType label="Type" name="type_id" receiveValue='_id' />
      <FormSelect
        label="Attributes"
        name="attributes"
        placeholder="Select Attributes"
        options={typesAttributeOptions}
        mode="multiple"
        required
      />
      <FormSelect
        label="Group attributes"
        name="group"
        placeholder="Select Group Attributes"
        options={allSubtypesGroupOptions}
        required
      />
      <FormUploadButton
        maxCount={1}
        label="Subtype thumb"
        name="thumb"
        className="xl:w-96 lg:w-96 md:w-[8rem]"
        required
      />
      <FormTextArea
        label="Description"
        name="description"
        type='description'
        placeholder="Enter description"
        className="w-full"
      />
      <button className="furniture-button mx-auto flex justify-center">Create Types</button>

    </Form>
  );
};

export default CreatingSubTypesForm;
