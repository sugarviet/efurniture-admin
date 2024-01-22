import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, DatePicker, Select, Upload } from "antd";

import useUploadImage from "@hooks/useUploadImage";
const { Option } = Select;


const EventCreateForm = () => {
  const { handleUploadImage } = useUploadImage();
  const [form] = Form.useForm();
  const onFinish = () => {};
 
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        
        <Form.Item
          name="name"
          label="Event Name"
          rules={[{ required: true, message: "Please enter the event name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Please select the start date!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="End Date"
          rules={[{ required: true, message: "Please select the end date!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="products"
          label="Products"
          rules={[
            { required: true, message: "Please select at least one product!" },
          ]}
        >
          <Select mode="multiple" placeholder="Select products">
            {/* Add product options as needed */}
            <Option value="Product A">Product A</Option>
            <Option value="Product B">Product B</Option>
            <Option value="Product C">Product C</Option>
            <Option value="Product D">Product D</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Product Images"
          name="image"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Upload
            multiple
            showUploadList
            customRequest={handleUploadImage}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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

export default EventCreateForm;
