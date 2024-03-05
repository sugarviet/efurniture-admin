import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelectRole from "@components/FormSelectRole";
import { useUpdate } from "../../../hooks/api-hooks";
import { create_user, get_all_system_account, update_account } from "../../../api/userApi";
import PropTypes from "prop-types";

const EdittingStaffForm = ({data}) => {
  console.log(data);
  const selectOptions = data.role.map((item) => ({
    label: `${item.role} ${item.action}`,
    value: item._id,
  }));
  const [form] = Form.useForm();
  const { mutate } = useUpdate(
    update_account(data._id),
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {},
    get_all_system_account()
  );
  const onFinish = (values) => {
    // const dataForm = {
    //   ...values,
    //   status: 1,
    // };
    console.log(values.role);
    
    mutate(values.role);
  };
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ ...data, role: selectOptions }}>
        <div className="grid grid-cols-2 gap-4">
          <FormInput name="first_name" label="First name" />
          <FormInput name="last_name" label="Last name" />
        </div>
        <FormInput name="username" label="Username" />


        <FormInput name="email" label="Email" type="email" />
        <FormSelectRole />

        <Button type="primary" className="primary" htmlType="submit">
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
