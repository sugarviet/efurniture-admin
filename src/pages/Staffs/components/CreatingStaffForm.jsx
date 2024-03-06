import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelectRole from "@components/FormSelectRole";
import { usePost } from "../../../hooks/api-hooks";
import { create_user, get_all_system_account } from "@api/userApi";
import useNotification from "@hooks/useNotification";

const CreatingStaffForm = () => {
  const { success_message, error_message } = useNotification();
  const [form] = Form.useForm();
  const { mutate } = usePost(
    create_user(),
    undefined,
    () => {
      success_message("staffs", "add");
    },
    () => {
      error_message("staffs", "add");
    },
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
    <div className="p-2">
      <p className="font-semibold text-3xl mb-4">
        eFurniture creating staff form
      </p>
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
          className="primary py-5 px-10 text-center flex justify-center items-center font-bold"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatingStaffForm;
