import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelect from "@components/FormSelect";

const CreatingAttribute = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-4">
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
            className="h-10"
          />
        </div>

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
