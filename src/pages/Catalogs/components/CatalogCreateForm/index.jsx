import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Select, message } from "antd";
import axios from "axios";
import { API_KEY, UPLOAD_IMG_URL } from "@config/uploadImage";

const { Option } = Select;

const CatalogCreateForm = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    await form.resetFields();
    form.setFieldsValue({});
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    console.log(file);
    const formData = new FormData();
    formData.set("key", API_KEY);
    formData.append("image", file);

    try {
      const response = await axios.post(UPLOAD_IMG_URL, formData);

      if (response.status === 200 && response.data && response.data.data) {
        // Successful upload
        const imageUrl = response.data.data.url;

        file.url = imageUrl;

        onSuccess();
        message.success(`${file.name} uploaded successfully`);
      } else {
        onError();
        message.error(`Failed to upload ${file.name}`);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }
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
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Upload
            multiple
            showUploadList
            // onChange={onUploadImage}
            customRequest={customRequest}
            action={
              "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            }
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
