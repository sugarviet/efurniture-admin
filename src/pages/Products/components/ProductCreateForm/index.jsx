import { DeleteOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, Flex, InputNumber, Card, Divider } from "antd";
import Proptypes from "prop-types";
import { useState } from "react";
import UploadButton from "@components/UploadButton";
import FormItem from "@components/FormItem";
import FormList from "@components/FormList";

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
        layout="vertical"
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

        {/* <Form.List
          name="colorQuantity"
          initialValue={[{ color: "", quantity: "" }]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
              

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
                    
                    <Select
                      placeholder="Select color"
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
        </Form.List> */}

        <FormList name="myForm">
          {({ name, restField, remove }) => (
            <>
              <Flex gap={8} justify="space-between" align="middle">
                <FormItem
                  {...restField}
                  label="myForm"
                  name={[name, "quantity"]}
                >
                  <InputNumber placeholder="Quantity" />
                </FormItem>
                <Button
                  style={{ width: 70 }}
                  onClick={() => remove(name)}
                  icon={<DeleteOutlined />}
                />
              </Flex>
            </>
          )}
        </FormList>

        <Card className="w-1/2 flex justify-center flex-col">
          <p className="text-2xl font-bold mb-4">Variants</p>
          <FormList name="variants" initialValues={[
            {size: "lucy", name: "lucy"},
          ]}>   
            {({ name, restField, remove }, index) => (
              <div className="w-full">
              <div className="flex justify-between">
              <p>Option {index + 1}</p>
              <p onClick={() => remove(name)} className="cursor-pointer">Remove</p>
              </div>
          
                <FormItem name={[name, "size"]} className="w-full" {...restField}>
                  <Select
                    defaultValue="lucy"
                    className="translate-x-1/4"
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
                </FormItem>
                
               
              
              <Divider dashed/>
              </div>
            )}
            
          </FormList>
        </Card>

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
