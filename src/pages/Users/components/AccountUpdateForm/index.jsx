import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import Proptypes from "prop-types";

const AccountUpdateForm = ({ id }) => {
  console.log(id);

  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter the event name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter the user password!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="role"
          label="Role"
          rules={[
            { required: true, message: "Please select at least one product!" },
          ]}
        >
          <Select placeholder="Select role">
            {/* Add product options as needed */}
            <Option value="staff">Staff</Option>
            <Option value="partner">Partner</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" className="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
AccountUpdateForm.propTypes = {
  id: Proptypes.number,
};

export default AccountUpdateForm;
