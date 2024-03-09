import { Form, Button, Card, Tabs } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormInput from "@components/FormInput";
import FormTextArea from "@components/FormTextArea";
import { isAdmin } from "@utils/getCurrentUserRole";
import { useState } from "react";
import AppModal from "@components/AppModal";
import CreatingAttribute from "./CreatingAttribute";
import FormSelectType from "./FormSelectType";
import FormSelectSubTypes from "./FormSelectSubTypes";
import CreatingType from "../../Types/components/CreatingType";
import CreatingSubTypesForm from "./CreatingSubTypesForm";
import useCreatingProductManagement from "../hooks/useCreatingProductManagement";
import FormMeasurementInput from "../../../components/FormMeasurementInput";

const { TabPane } = Tabs;

const CreatingProductForm = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalSubtypeCreate, setOpenModalSubtypeCreate] = useState(false);
  const [form] = Form.useForm();
  const { listAttribute } = useCreatingProductManagement();

  const admin = isAdmin();

  const onFinish = (values) => {
    const listImages = values.thumb.fileList.map((image) => image.url);

    const data = {
      ...values,
      thumbs: listImages
    }

    console.log("Success:", data);
  };

  return (
    <main className="px-4">
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          label: "Viet Dang",
          description: "Viet Dang",
          regularPrice: 100,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <section className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-3xl font-bold">Add Product</h1>
            <p className="text-gray-500">Orders placed across your store</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                form.resetFields();
              }}
            >
              Discard
            </Button>
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

            <Card>
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

                  <div>
                    {listAttribute?.map((attribute) => (
                      <FormMeasurementInput
                        label={attribute.name}
                        name={["attributes", "attributeType", attribute.name]}
                        key={attribute._id}
                      />
                    ))}
                  </div>
                </TabPane>
              </Tabs>
            </Card>

            <Card className="mt-4">
              <FormUploadButton label="Display images" name="thumbs" />
            </Card>
            <Card className="mt-8">
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
            </Card>
          </div>

          {/* Right */}

          <div className="flex-1 flex flex-col gap-4">
            <Card>
              <p className="text-2xl font-bold mb-4">Create attributes</p>
              <CreatingAttribute />
            </Card>
          </div>
        </section>
      </Form>
    </main>
  );
};

export default CreatingProductForm;
