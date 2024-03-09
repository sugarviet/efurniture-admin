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
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <FormInput
          name="name"
          label="Attribute Name"
          required
          placeholder="Enter attribute Name"
        />
        <FormSelect
          label="Type"
          name="type"
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

        <Button
          type="primary"
          className="primary py-5 px-10 text-center flex justify-center items-center font-bold"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatingAttribute;
