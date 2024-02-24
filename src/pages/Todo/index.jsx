import { Form, Input, InputNumber, Select, Button } from 'antd';

const { Option } = Select;

const MyForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="create_data_form"
      onFinish={onFinish}
      initialValues={{
        type: 'sofa',
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input the name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Thumbnail URL"
        name="thumb"
        rules={[
          {
            required: true,
            message: 'Please input the thumbnail URL!',
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
            message: 'Please input the price!',
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[
          {
            required: true,
            message: 'Please select the type!',
          },
        ]}
      >
        <Select>
          <Option value="sofa">Sofa</Option>
          <Option value="chair">Chair</Option>
          <Option value="table">Table</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Material"
        name={['variation', 0, 'material']}
        rules={[
          {
            required: true,
            message: 'Please input the material!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Sub Price"
        name={['variation', 0, 'subPrice']}
        rules={[
          {
            required: true,
            message: 'Please input the sub price!',
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label="attribute types"
        name={['attributes', 'type']}
        rules={[
          {
            required: true,
            message: 'Please select the type!',
          },
        ]}
      >
        <Select>
          <Option value="sofa">Sofa</Option>
          <Option value="chair">Chair</Option>
          <Option value="table">Table</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Width"
        name={['attributes', 'attributeType', 'Width']}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Height"
        name={['attributes', 'attributeType', 'Height']}
      >
        <Input />
      </Form.Item>

      {/* Add more attributes as needed */}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
