import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, Flex, InputNumber } from "antd";
import Proptypes from "prop-types";
import { useState } from "react";
import UploadButton from "@components/UploadButton";
import FormItem from "../../../../components/FormItem";

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

const ProductCreateForm = ({ setIsOpen }) => {
  const [form] = Form.useForm();
  const [typeOptions, setTypeOptions] = useState([]);

  const onChangeTypeProductSelect = (value) => {
    console.log(`selected ${value}`);
    form.setFieldValue("typeDetail", []);
    setTypeOptions(dynamicSelect[value]);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    // const listImages = values.image.fileList.map((image) => image.url);
    // console.log(listImages);
    await form.resetFields();
    form.setFieldsValue({});
    setIsOpen(false);
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
        <FormItem
          name="name"
          label="Product name"
          required
          message="Please enter a product name"
        >
          <Input placeholder="Product name" />
        </FormItem>

        <FormItem name="password" label="Password" type="password">
          <Input placeholder="Password" />
        </FormItem>

        <FormItem
          name="confirmPassword"
          label="Confirm Password"
          type="confirmPassword"
        >
          <Input placeholder="Confirm" />
        </FormItem>

        {/* <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input placeholder="Product name" />
        </Form.Item> */}

        {/* <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input placeholder="Product quantity" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input type="number" placeholder="Product price" />
        </Form.Item>

        <Form.Item
          label="Partner"
          name="partner"
          rules={[
            {
              required: false,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
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
        </Form.Item> */}

        <FormItem label="Product Images" name="image">
          <UploadButton />
        </FormItem>

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

                <Flex key={key} gap={8} justify="space-between" align="middle">
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
                              <p>{option.label}</p>
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
                    style={{ width: 70 }}
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

ProductCreateForm.propTypes = {
  setIsOpen: Proptypes.func,
};

export default ProductCreateForm;
