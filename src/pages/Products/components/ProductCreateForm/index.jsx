import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Select, message } from "antd";
import axios from "axios";
import Proptypes from 'prop-types'
import { API_KEY, UPLOAD_IMG_URL } from "@config/uploadImage";


const ProductCreateForm = ({ setIsOpen }) => {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    // const listImages = values.image.fileList.map((image) => image.url);
    // console.log(listImages);
    await form.resetFields();
    form.setFieldsValue({});
    setIsOpen(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  //   const onUploadImage = async(info) => {
  //     const formData = new FormData();
  //     formData.set("key", API_KEY);
  //     formData.append("image", info.file);

  //     const response = await axios.post(UPLOAD_IMG_URL, formData);
  //     console.log(response);

  //     let newFileList = [...info.fileList];
  //     newFileList = newFileList.map((file) => {
  //       file.url = "https://vietdang.com";

  //       return file;
  //     });

  //     console.log(newFileList);
  //   };

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
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input placeholder="Product name"/>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Partner"
          name="partner"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
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
                value: "tom",
                label: "Tom",
              },
            ]}
          />
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

ProductCreateForm.propTypes = {
  setIsOpen: Proptypes.func.isRequired,
}

export default ProductCreateForm;