import { Button, Form } from "antd";
import FormInput from "@components/FormInput";
import FormSelect from "@components/FormSelect";

const EdittingStaffForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
        <FormInput
          label="Usename"
          name="username"
          placeholder="Enter the username of the staff"
          className="h-10"
        />
        <FormInput
          label="Password"
          name="password"
          placeholder="Enter the password of the staff"
          className="h-10"
        />
        <FormSelect
          name={"roleTitle"}
          className="w-full"
          label="Role Title"
          defaultValue="staff"
          placeholder="Staff"
          value="staff"
          mode="multiple"
          allowClear
          options={[
            {
              value: "admin",
              label: "Admin",
            },
            {
              value: "staff",
              label: "Staff",
            },
          ]}
        />
        <FormSelect
          name={"size"}
          className="w-full"
          label="Collection"
          defaultValue="lucy"
          value="lucy"
          mode="multiple"
          allowClear
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />

        <Button type="primary" className="flex justify-center mx-auto">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EdittingStaffForm;
