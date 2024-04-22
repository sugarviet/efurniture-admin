import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelect from "@components/FormSelect";
import useNotification from "@hooks/useNotification";
import { usePost } from "@hooks/api-hooks";
import { create_attribute, get_attribute } from "@api/attributeApi";

const CreatingAttribute = () => {
  const { success_message, error_message } = useNotification();
  const [form] = Form.useForm();
  const { mutate: createAttribute } = usePost(
    create_attribute(),
    undefined,
    () => {
      success_message("attribute", "add");
    },
    () => {
      error_message("attribute", "add");
    },
    get_attribute()
  );

  const onFinish = (values) => {
    const data = {
      ...values,
      status: 1,
    };
    createAttribute(data);
    form.resetFields();
  };
  return (
    <div>
      <Form
        form={form}
        requiredMark="optional"
        layout="vertical"
        onFinish={onFinish}
      >
        <FormInput
          name="name"
          label="Attribute Name"
          type="text"
          placeholder="Enter attribute Name"
        />
        <FormSelect
          label="Type"
          name="type"
          required
          defaultValue="string"
          placeholder="Enter type"
          options={[
            {
              value: "string",
              label: "string",
            },
            {
              value: "number",
              label: "number",
            },
          ]}
        />

        <button className="furniture-button mx-auto flex justify-center">
          Create attributes
        </button>
      </Form>
    </div>
  );
};

export default CreatingAttribute;
