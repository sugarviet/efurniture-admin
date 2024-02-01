import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Upload,
  Select,
  Flex,
  InputNumber,
} from "antd";

import Proptypes from "prop-types";
import { useState } from "react";

const dynamicSelect = {
  sofa: [
    {
      value: "sofa 1",
      label: "Sofa 1",
    },
    {
      value: "sofa 2",
      label: "Sofa 2",
    },
    {
      value: "sofa 3",
      label: "Sofa 3",
    },
    {
      value: "sofa 4",
      label: "Sofa 4",
    },
  ],
  table: [
    {
      value: "table 1",
      label: "Table 1",
    },
    {
      value: "table 2",
      label: "Table 2",
    },
    {
      value: "table 3",
      label: "Table 3",
    },
    {
      value: "table 4",
      label: "Table 4",
    },
  ],
  chair: [
    {
      value: "chair 1",
      label: "Chair 1",
    },
    {
      value: "chair 2",
      label: "Chair 2",
    },
    {
      value: "chair 3",
      label: "Chair 3",
    },
    {
      value: "chair 4",
      label: "Chair 4",
    },
  ],
};

const colorOptions = [
  { value: "red", label: "Red", color: "#FF0000" },
  { value: "blue", label: "Blue", color: "#0000FF" },
  { value: "green", label: "Green", color: "#008000" },
  // Add more color options as needed
];

const ProductEditForm = ({ id }) => {
  const [typeOptions, setTypeOptions] = useState([]);

  console.log(id);

  const initialValues = {
    name: "Viet",
    products: ["Product A", "Product B", "Product C"],
    price: "10",
    quantity: 100,
    partner: "jack",
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
  const handleSubmit = async (values) => {
    console.log(values);
    // const listImages = values.image.fileList.map((image) => image.url);
    // console.log(listImages);
    await form.resetFields();
    form.setFieldsValue({});
  };

  const onChangeTypeProductSelect = (value) => {
    console.log(`selected ${value}`);
    form.setFieldValue("typeDetail", []);
    setTypeOptions(dynamicSelect[value]);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

 
  return (
    <div className="px-4 py-2">
      <Form
        initialValues={initialValues}
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
          <Input />
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
            onChange={onChangeTypeProductSelect}
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
            defaultFileList={initialValues.image}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a product type"
            optionFilterProp="children"
            onChange={onChangeTypeProductSelect}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "chair",
                label: "Chair",
              },
              {
                value: "table",
                label: "Table",
              },
              {
                value: "sofa",
                label: "Sofa",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Type Detail"
          name="typeDetail"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a product type detail"
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={filterOption}
            options={typeOptions}
          />
        </Form.Item>

        <Form.List
          name="colorQuantity"
          initialValue={[{ color: "", quantity: "" }]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                // <Space key={key} classNames="mb-4" align="center" className="bg-red-200">

                <Flex
                  key={key}
                  gap={8}
                  justify="space-between"
                  align="middle"
                >
                  <Form.Item
                    {...restField}
                    className="w-3/4"
                    name={[name, "color"]}
                    fieldKey={[fieldKey, "color"]}
                    label="Color"
                    rules={[
                      {
                        required: false,
                        message: "Please input color!",
                      },
                    ]}
                  >
                    {/* <Input placeholder="Color" /> */}
                    <Select
                      placeholder="Select color"
                      // options={colorOptions}
                      showSearch
                      filterOption={(input, option) =>
                        option.label
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      optionLabelProp="label"
                    >
                      {colorOptions.map((option) => (
                        <Select.Option
                          key={option.value}
                          value={option.value}
                          label={
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginRight: "8px",
                                  backgroundColor: option.color,
                                }}
                              />
                              <p>
                                {option.label}
                              
                              </p>
                            </div>
                          }
                        />
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    className="w-full"
                    name={[name, "quantity"]}
                    fieldKey={[fieldKey, "quantity"]}
                    label="Quantity"
                    rules={[
                      {
                        required: false,
                        message: "Please input quantity!",
                      },
                    ]}
                  >
                    <InputNumber placeholder="Quantity" />
                  </Form.Item>
                  <Button
                  style={{width: 70}}
                    onClick={() => remove(name)}
                    icon={<DeleteOutlined />}
                  />
                  {/* </Space> */}
                </Flex>
              ))}
              <Form.Item className="mx-auto flex justify-center">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Color & Quantity
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

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

ProductEditForm.propTypes = {
  id: Proptypes.number,
};

export default ProductEditForm;
