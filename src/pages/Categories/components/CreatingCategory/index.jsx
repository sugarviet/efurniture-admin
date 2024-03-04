import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const CreatingCategory = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
      
          <Form.Item
            name="name"
            label="Category Name"
            rules={[
              { required: true, message: "Please enter the Category name!" },
            ]}
          >
            <Input placeholder="Category name" />
          </Form.Item>
       
        <Form.Item
          name="products"
          label="Products"
          rules={[
            { required: true, message: "Please select at least one product!" },
          ]}
        >
          <Select mode="multiple" placeholder="Select products">
            <Option value="Product A">Product A</Option>
            <Option value="Product B">Product B</Option>
            <Option value="Product C">Product C</Option>
            <Option value="Product D">Product D</Option>
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

export default CreatingCategory;
