import { Form, Button, Card, Divider, Tabs } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormList from "@components/FormList";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";

import FormTextArea from "@components/FormTextArea";
import FormSelect from "@components/FormSelect";
import { isAdmin } from "@utils/getCurrentUserRole";
import { useState, useEffect } from "react";
import AppModal from "@components/AppModal";
import CreatingAttribute from "./CreatingAttribute";
import FormSelectType from "./FormSelectType";
import { useCreatingProductValues } from "../CreatingProductContext";
import FormSelectSubTypes from "./FormSelectSubTypes";
import { usePost } from "../../../hooks/api-hooks";
import { get_attribute_by_list_subtype } from "../../../api/attributeApi";
import CreatingType from "../../Types/components/CreatingType";
import CreatingSubTypesForm from "./CreatingSubTypesForm";
import FormInputMeasurement from "../../../components/FormInputMeasurement";

const { TabPane } = Tabs;

const CreatingProductForm = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalSubtypeCreate, setOpenModalSubtypeCreate] = useState(false);
  const [openCreateAttribute, setOpenCreateAttribute] = useState(false);
  const [form] = Form.useForm();
  const { productType, productSubType } = useCreatingProductValues();
  const { mutate: get_product_by_subtype, data: listAttribute } = usePost(
    get_attribute_by_list_subtype(),
    undefined,
    () => {},
    () => {}
  );

  console.log(listAttribute);
  useEffect(() => {
    if (productType && productSubType) {
      get_product_by_subtype({
        type: productType,
        listAttribute: productSubType,
      });
    }
  }, [productType, productSubType, get_product_by_subtype]);

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
            <FormInputMeasurement />
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

            <FormTextArea
              label="Product Description"
              name="description"
              placeholder="Write description here..."
            />

            <Tabs tabPosition="left" className="mb-4">
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

              <TabPane tab="Attributes" key="attributes">
                <div className="grid grid-cols-2 items-center gap-52">
                  <FormSelectType />
                  <Button
                    className="w-40"
                    onClick={() => setOpenModalCreate(true)}
                  >
                    Create new type
                  </Button>
                  <AppModal
                    isOpen={openModalCreate}
                    setIsOpen={setOpenModalCreate}
                  >
                    {openModalCreate ? <CreatingType /> : null}
                  </AppModal>
                </div>
                <div className="grid grid-cols-2 items-center gap-52">
                  <FormSelectSubTypes />
                  <Button
                    className="w-40"
                    onClick={() => setOpenModalSubtypeCreate(true)}
                  >
                    Create new subtype
                  </Button>
                  <AppModal
                    isOpen={openModalSubtypeCreate}
                    setIsOpen={setOpenModalSubtypeCreate}
                  >
                    <CreatingSubTypesForm />
                  </AppModal>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <FormSelect
                    label="Attributes"
                    name="attributes"
                    className="w-[22rem]"
                  />
                  <Button onClick={() => setOpenCreateAttribute(true)}>
                    Create attributes
                  </Button>
                </div>
                <div className="grid">
                  <FormSelect
                    className="w-60"
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
                </div>
                <div>
                  {listAttribute?.map((attribute) => (
                    <FormInput
                      key={attribute._id}
                    name={["attributes", "attributeType", attribute.name]}

                      // name={attribute.name}
                      label={attribute.name}
                    />
                  ))}
                </div>
              </TabPane>
            </Tabs>

            <FormUploadButton label="Display images" name="image" />
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
          {/* <div className="flex-1 flex flex-col gap-4">
           

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
          </div> */}
        </section>
      </Form>

      <AppModal isOpen={openCreateAttribute} setIsOpen={setOpenCreateAttribute}>
        <CreatingAttribute />
      </AppModal>
    </main>
  );
};

export default CreatingProductForm;
