import { Form, Button, Input, Card, Select, Divider, Tabs } from "antd";
import FormItem from "../../components/FormItem";
import UploadButton from "@components/UploadButton";
import FormList from "@components/FormList";

const { TextArea } = Input;
const { TabPane } = Tabs;

const CreatingProduct = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <main className="px-4">
      <Form
          form={form}
          layout="vertical"
          initialValues={{
            label: "Viet Dang",
            description: "Viet Dang",
            variants: [
              {size: 'lucy', color: 'lucy'},
              {size: 'lucy', color: 'lucy'},
              {size: 'lucy', color: 'lucy'},
              {size: 'lucy', color: 'lucy'},
            ],
            regularPrice: 100
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
          <Button>Discard</Button>
          <Button>Save draft</Button>
          <Button type="primary" className="primary" htmlType="submit">
            Publish
          </Button>
        </div>
      </section>

      <section className="flex gap-6">
          {/* Left */}
          <div className="flex-1">
            <FormItem label="Product Title" name="label">
              <Input placeholder="Write title here..." />
            </FormItem>
            <FormItem label="Product Description" name="description">
              <TextArea
                placeholder="Write description here..."
                allowClear
                size="large"
              />
            </FormItem>
            <FormItem label="Display images" name="image">
              <UploadButton />
            </FormItem>

            <Tabs tabPosition="left">
              <TabPane tab="Pricing" key="pricing">
                <div className="flex gap-10">
                  <FormItem name="regularPrice" label="Regular Pricing">
                    <Input placeholder="$$$" />
                  </FormItem>
                  <FormItem name="salePrice" label="Sale Pricing">
                    <Input placeholder="$$$" />
                  </FormItem>
                </div>
              </TabPane>
              <TabPane tab="Restock" key="restock">
                <FormItem name="quantity" label="Add to stock">
                  <Input placeholder="Quantity" />
                </FormItem>

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
              </TabPane>
            </Tabs>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-4">
            <Card>
              <p className="text-2xl font-bold mb-4">Organize</p>
              <FormItem label="Category" name="category">
                <Select
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
              </FormItem>
              <FormItem label="Vendor" name="vendor">
                <Select
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
              </FormItem>
              <FormItem label="Collection" name="collection">
                <Select
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
              </FormItem>
              <FormItem label="Tas" name="tags">
                <Select
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
              </FormItem>
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

                    <FormItem
                      name={[name, "size"]}
                      className="w-full"
                      {...restField}
                    >
                      <Select
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
                    </FormItem>

                    <Divider dashed />
                  </div>
                )}
              </FormList>
            </Card>
          </div>
      </section>
      </Form>
    </main>
  );
};

export default CreatingProduct;
