import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelectRole from "@components/FormSelectRole";
import useAccountManagement from "../hooks/useAccountManagement";

const CreatingStaffForm = () => {
  const { addAccount } = useAccountManagement();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const data = {
      ...values,
      status: 1,
    };
    console.log(values);
    addAccount(data);
  };
  return (
    <div className="p-2">
      <p className="font-semibold text-3xl mb-4">
        eFurniture creating staff form
      </p>
      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark='optional'>
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            name="first_name"
            label="First name"
            required
            placeholder="Enter first name"
          />
          <FormInput
            name="last_name"
            label="Last name"
            required
            placeholder="Enter last name"
          />
        </div>
        <FormInput
          name="username"
          label="Username"
          required
          placeholder="Enter username"
        />
        <FormInput
          name="password"
          label="Password"
          inputType="password"
          type="password"
          placeholder="Enter password"
        />
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter email"
        />
        <FormSelectRole />

        <Button
          type="primary"
          className="primary py-5 px-10 text-center flex justify-center items-center font-bold mx-auto"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatingStaffForm;
