import { Form, Button, Input, Card, Select, Divider } from "antd";
import FormItem from "../../components/FormItem";
import RichTextInput from "../../components/RichTextInput";
import UploadButton from "@components/UploadButton";
import FormList from "@components/FormList";


const CreatingProduct = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <main>
      <section className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold">Add Product</h1>
          <p className="text-gray-500">Orders placed across your store</p>
        </div>
        <div className="flex gap-2">
          <Button>Discard</Button>
          <Button>Save draft</Button>
          <Button>Publish</Button>
        </div>
      </section>

      <section>
        <Form
          className="flex gap-6"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex-1">
          <FormItem label="Product Title" name="label">
            <Input placeholder="Write title here..."/>
          </FormItem>
          <FormItem label="Product Description" name="description">
            <RichTextInput placeholder="Write description here..."/>
          </FormItem>
          <FormItem label="Display images" name="image">
            <UploadButton />
          </FormItem>
          </div>
          
          <div className="flex-1">
          <Card>
          <p className="text-2xl font-bold mb-4">Variants</p>
          <FormList name="variants" initialValues={[
            {size: "lucy", name: "lucy"},
          ]}>   
            {({ name, restField, remove }, index) => (
              <div className="w-full">
              <div className="flex justify-between bg-red-300">
              <p>Option {index + 1}</p>
              <p onClick={() => remove(name)} className="cursor-pointer">Remove</p>
              </div>
          
                <FormItem name={[name, "size"]} className="w-full" {...restField}>
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
                
              
              <Divider dashed/>
              </div>
            )}
            
          </FormList>
        </Card>
          </div>

        </Form>
      </section>
    </main>
  );
};

export default CreatingProduct;
