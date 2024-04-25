import { Form, Button, Card, Tabs } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormInput from "@components/FormInput";
import FormTextArea from "@components/FormTextArea";
import { isAdmin } from "@utils/getCurrentUserRole";
import FormSelectType from "./FormSelectType";
import FormSelectSubTypes from "./FormSelectSubTypes";
import useCreatingProductManagement from "../hooks/useCreatingProductManagement";
import FormMeasurementInput from "../../../components/FormMeasurementInput";
import FormInputNumber from "../../../components/FormInputNumber";
import CreatingVariation from "./CreatingVariation";
import Note from "../../../components/Note";

const { TabPane } = Tabs;

const CreatingProductForm = () => {
  const { listAttribute, form, create_draft_product } = useCreatingProductManagement();

  const admin = isAdmin();

  const onFinish = (values) => {
    console.log(values)
    const listImages = values.thumbs.fileList.map((image) => image.url);

    const data = {
      ...values,
      thumbs: listImages
    }

    create_draft_product(data);

  };

  return (
    <main className="px-4">
      <Form
        form={form}
        layout="vertical"
        requiredMark='optional'
        initialValues={{
          regular_price: 1000000,
          sale_price: 1000000,
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
            <button className="furniture-button rounded-md">Save draft</button>
            <Button
              className="px-5 py-1"
              onClick={() => {
                form.resetFields();
              }}
            >
              Discard
            </Button>


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
              type="text"
              label="Product Title"
              name="name"
              placeholder="Write title here..."
            />

            <FormTextArea
              type="description"
              label="Product Description"
              name="description"
              placeholder="Write description here..."
            />

            <Note type="product_shipping_fee" />

            <Card>
              <Tabs tabPosition="left" className="mb-4">
                <TabPane tab="Pricing" key="pricing">
                  <div className="flex gap-10">

                    <FormInputNumber label="Regular Pricing"
                      required
                      prefix="VND"
                      name="regular_price"
                      min={1000}
                      placeholder="$$$" />
                    <FormInputNumber label="Sell Pricing"
                      required
                      prefix="VND"
                      min={1000}
                      name="sale_price"
                      placeholder="$$$" />

                  </div>
                </TabPane>

                <TabPane tab="Attributes" key="attributes">
                  <div className="grid grid-cols-2 items-center gap-52">
                    <FormSelectType />

                  </div>
                  <div className="grid grid-cols-2 items-center gap-52">
                    <FormSelectSubTypes />

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
              <FormUploadButton label="Display images" name="thumbs"/>
            </Card>
            <Card className="mt-8">
              <p className="text-3xl font-bold mb-2">Create 3D model</p>
              <FormInput
                label="3D model's id"
                name="model3D"
                value=""
                placeholder="Write title here..."
              />

            </Card>
          </div>

          {/* Right */}

          <div className="flex-1 flex flex-col gap-4">
            {/* <Card>
              <p className="text-2xl font-bold mb-4">Create attributes</p>
              <CreatingAttribute />
            </Card> */}

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
