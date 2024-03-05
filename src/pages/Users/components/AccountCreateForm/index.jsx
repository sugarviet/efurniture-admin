import { Button, Form} from "antd";
import FormInput from "../../../../components/FormInput";

const AccountCreateForm = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-4">
          <FormInput name="first_name" label="First name" />
          <FormInput name="last_name" label="Last name" />
        </div>
        <FormInput name="username" label="Username" />
        <FormInput
          name="password"
          label="Password"
          inputType="password"
          type="password"
        />

        <FormInput name="email" label="Email" type="email"/>

        <Button type="primary" className="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AccountCreateForm;
