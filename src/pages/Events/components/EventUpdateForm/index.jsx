import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, DatePicker, Select, Upload } from "antd";

import dayjs from "dayjs";
import { formateDate } from "@utils/formateDate";
import useUploadImage from "@hooks/useUploadImage";

import Proptypes from "prop-types";

const { Option } = Select;
const EventUpdateForm = ({ id }) => {
  const { handleUploadImage } = useUploadImage();

  console.log(id);
  const initialValue = {
    name: "Viet",
    products: ["Product A", "Product B", "Product C"],
    startDate: formateDate("20/11/2023"),
    endDate: formateDate("20/11/2023"),
    image: [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-2",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const final = {
      ...values,
      startDate: dayjs(values.startDate).format("DD/MM/YYYY"),
      endDate: formateDate(values.endDate),
    };
    console.log(final);
  };
 

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValue}
        onFinish={onFinish}
      >
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
          label="Events Images"
          name="image"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Upload
            defaultFileList={initialValue.image}
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

EventUpdateForm.propTypes = {
  id: Proptypes.number,
};

export default EventUpdateForm;
