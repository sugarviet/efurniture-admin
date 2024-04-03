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
import FormInputNumber from "../../../components/FormInputNumber";
import CreatingVariation from "./CreatingVariation";

const { TabPane } = Tabs;

const CreatingProductForm = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalSubtypeCreate, setOpenModalSubtypeCreate] = useState(false);
  const { listAttribute, form, create_draft_product } = useCreatingProductManagement();

  const admin = isAdmin();

  const colorOptions = [
    { value: "red", label: "Red", color: "#FF0000" },
    { value: "blue", label: "Blue", color: "#0000FF" },
    { value: "green", label: "Green", color: "#008000" },
  ];

  const onFinish = (values) => {
    console.log(values)
    const listImages = values.thumbs.fileList.map((image) => image.url);

    const data = {
      ...values,
      thumbs: listImages
    }
    console.log("Success:", data);

    create_draft_product(data);

  };

  return (
    <main className="px-4">
      <Form
        form={form}
        layout="vertical"
        requiredMark='optional'
        initialValues={{
          regular_price: 100,
          sale_price: 0,
          model3D: ""
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
            required
              label="Product Title"
              name="name"
              placeholder="Write title here..."
            />

            <FormTextArea
            required

              label="Product Description"
              name="description"
              placeholder="Write description here..."
            />

            <Card>
              <Tabs tabPosition="left" className="mb-4">
                <TabPane tab="Pricing" key="pricing">
                  <div className="flex gap-10">
               
                    <FormInputNumber label="Regular Pricing"
            required

                      name="regular_price"
                      placeholder="$$$" />
                       <FormInputNumber   label="Sale Pricing"
            required

                      name="sale_price"
                      placeholder="$$$"  />
                  
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
                        // required
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
                value=""
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

            <Card>
              <p className="text-2xl font-bold mb-4">Create Variations</p>
              <CreatingVariation />
            </Card>
          </div>
        </section>
      </Form>
    </main>
  );
};

export default CreatingProductForm;
