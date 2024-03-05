import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelectRole from "@components/FormSelectRole";
import { usePost } from "../../../hooks/api-hooks";
import { create_user, get_all_system_account } from "../../../api/userApi";

const CreatingStaffForm = () => {
  const [form] = Form.useForm();
  const { mutate } = usePost(
    create_user(),
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {},
    get_all_system_account()
  );
  const onFinish = (values) => {
    const data = {
      ...values,
      status: 1,
    };
    console.log(values);
    mutate(data);
  };
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

        <FormInput name="email" label="Email" type="email" />
        <FormSelectRole />

        <Button type="primary" className="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatingStaffForm;
