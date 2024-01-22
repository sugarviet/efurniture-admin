import { Form, Input, Button, Select, Upload } from "antd";
import useUploadImage from "@hooks/useUploadImage";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const CatalogCreateForm = () => {
  const { handleUploadImage } = useUploadImage();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    // await form.resetFields();
    // form.setFieldsValue({});
  };

  

  return (
    <div className="px-4 py-2">
      <Form
        form={form}
        labelAlign="left"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Catelogs name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input placeholder="Catelogs name" />
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
          name="place"
          label="Place"
          rules={[{ required: true, message: "Please select place" }]}
        >
          <Select placeholder="Select place">
            {/* Add product options as needed */}
            <Option value="Living room">Living room</Option>
            <Option value="Kitchen">Kitchen</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Catelog Images"
          name="image"
          rules={[
            {
              required: true,
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

export default CatalogCreateForm;
