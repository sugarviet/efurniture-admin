import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelectRole from "@components/FormSelectRole";
import PropTypes from "prop-types";
import useAccountManagement from "../hooks/useAccountManagement";
const EdittingStaffForm = ({ data }) => {
  const { updateRole } = useAccountManagement(data._id);


  const selectOptions = data.role.map((item) => ({
    label: `${item.role} ${item.action}`,
    value: item._id,
  }));
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updateRole({ role: values.role });
  };
  return (
    <div>
      <p className="font-semibold text-3xl mb-4">
        Editting staff {data.first_name} {data.last_name}
      </p>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ ...data, role: selectOptions }}
      >
        <div className="grid grid-cols-2 gap-4">
          <FormInput name="first_name" label="First name" />
          <FormInput name="last_name" label="Last name" />
        </div>
        <FormInput name="username" label="Username" />

        <FormInput name="email" label="Email" type="email" />
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

EdittingStaffForm.propTypes = {
  data: PropTypes.object,
};

export default EdittingStaffForm;
