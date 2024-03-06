import { Form, Button, Card, Divider, Tabs } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormList from "@components/FormList";
import FormInput from "../../components/FormInput";
import FormInputNumber from "../../components/FormInputNumber";

import FormTextArea from "../../components/FormTextArea";
import FormSelect from "../../components/FormSelect";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { useState } from "react";
import AppModal from '@components/AppModal'
import CreatingAttribute from "./components/CreatingAttribute";
import {useFetch} from '@hooks/api-hooks'
import { get_attribute } from "../../api/attributeApi";
const { TabPane } = Tabs;

const CreatingProduct = () => {
  const {data} = useFetch(get_attribute())
  console.log(data);
  const [openCreateAttribute, setOpenCreateAttribute] = useState(false);
  const [form] = Form.useForm();
  
  const admin = isAdmin();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDiscard = () => {
    form.resetFields();
  };
  return (
    <main className="px-4">
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          label: "Viet Dang",
          description: "Viet Dang",
          variants: [{ size: "lucy", color: "lucy" }],
          regularPrice: 100,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <section className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-3xl font-bold">Add Product</h1>
            <p className="text-gray-500">Orders placed across your store</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleDiscard}>Discard</Button>
            <Button htmlType="submit">Save draft</Button>
            {admin ? (
              <Button type="primary" className="primary" htmlType="submit">
                Publish
              </Button>
            ) : null}
          </div>
        </section>

        <section className="flex gap-6">
          {/* Left */}
          <div className="flex-1">
            <FormInput
              label="Product Title"
              name="label"
              placeholder="Write title here..."
            />
            <div className="flex gap-5">
              <FormInputNumber
                label="Width"
                name="width"
                className="w-full"
                placeholder="Input width"
              />
              <FormInputNumber
                label="Height"
                name="height"
                className="w-full"
                placeholder="Input height"
              />
            </div>
            <FormTextArea
              label="Product Description"
              name="description"
              placeholder="Write description here..."
            />

            <FormUploadButton label="Display images" name="image" />

            <Tabs tabPosition="left">
              <TabPane tab="Pricing" key="pricing">
                <div className="flex gap-10">
                  <FormInput
                    label="Regular Pricing"
                    name="regularPrice"
                    placeholder="$$$"
                    inputType="number"
                  />
                  <FormInput
                    label="Sale Pricing"
                    name="salePrice"
                    placeholder="$$$"
                    inputType="number"
                  />
                </div>
              </TabPane>
              <TabPane tab="Restock" key="restock">
                <FormInput
                  label="Add to stock"
                  name="quantity"
                  placeholder="Quantity"
                  inputType="number"
                />

                <div className="w-64 mt-11">
                  <div className="flex justify-between">
                    <p className="font-bold">Product in stock now:</p>
                    <p>1,090</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Product in transit:</p>
                    <p>5000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Last time restocked:</p>
                    <p>30th June, 2021</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Total stock over lifetime:</p>
                    <p>20,000</p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Attributes" key="attributes">
                <p>Attributes</p>

                <Button onClick={() => setOpenCreateAttribute(true)}>Create attributes</Button>
                <FormSelect
                  label="Type"
                  // name="category"
                  name={["attributes", "type"]}
                  defaultValue="lucy"
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
                <FormInput
                  label="height"
                  name={["attributes", "attributeType", "height"]}
                />
                <FormInput
                  label="width"
                  name={["attributes", "attributeType", "width"]}
                />
              </TabPane>
            </Tabs>

            <div className="mt-8">
              <p className="text-3xl font-bold mb-2">Create 3D model</p>
              <FormInput
                label="3D model's id"
                name="model3D"
                placeholder="Write title here..."
              />
              <iframe
                src="https://admin.roomle.com/login"
                title="W3Schools Free Online Web Tutorials"
                height={600}
                width={900}
              ></iframe>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-4">
            <Card>
              <p className="text-2xl font-bold mb-4">Organize</p>

              <FormSelect
                label="Category"
                name="category"
                defaultValue="lucy"
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
              <FormSelect
                label="Vendor"
                name="vendor"
                defaultValue="lucy"
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

              <FormSelect
                label="Category"
                name="category"
                defaultValue="lucy"
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
              <FormSelect
                label="Rooms"
                name="room"
                defaultValue="living room"
                options={[
                  {
                    value: "living room",
                    label: "Living Room",
                  },
                  {
                    value: "kitchen",
                    label: "Kitchen",
                  },
                  {
                    value: "bedroom",
                    label: "Bedroom",
                  },
                ]}
              />
              <FormSelect
                label="Tags"
                name="tags"
                defaultValue="lucy"
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
            </Card>

            <Card>
              <p className="text-2xl font-bold mb-4">Variants</p>
              <FormList
                name="variants"
                initialValues={[{ size: "lucy", name: "lucy" }]}
              >
                {({ name, restField, remove }, index) => (
                  <div className="w-full">
                    <div className="flex justify-between my-2">
                      <p className="text-base">Option {index + 1}</p>
                      <p
                        onClick={() => remove(name)}
                        className="cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <FormSelect
                      name={[name, "material"]}
                      className="w-full"
                      label="Material"
                      defaultValue="lucy"
                      {...restField}
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
                    <FormInputNumber
                      label="Sub price"
                      name={[name, "subPrice"]}
                      className="w-full"
                      placeholder="$$$"
                    />

                    <Divider dashed />
                  </div>
                )}
              </FormList>
            </Card>
          </div>
        </section>
      </Form>


      <AppModal isOpen={openCreateAttribute} setIsOpen={setOpenCreateAttribute}>
        <CreatingAttribute />
      </AppModal>
    </main>
  );
};

export default CreatingProduct;
