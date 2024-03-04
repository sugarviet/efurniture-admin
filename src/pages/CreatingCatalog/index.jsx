import { Form, Button } from "antd";
import FormInputNumber from "@components/FormInputNumber";
import FormTextArea from "@components/FormTextArea";
import FormSelect from "@components/FormSelect";
import FormUploadButton from "@components/FormUploadButton";

const CreatingCatalog = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <main className="space-y-8">
      <Form layout="vertical" onFinish={onFinish}>
        <section className="space-y-2 flex justify-between my-3">
          <div>
            <h2 className="text-3xl font-bold">Catalog Management</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Enter the details of the catalog to be created.
            </p>
          </div>
          <div className="flex gap-3">
            <Button>Discard</Button>
            <Button>Save draft</Button>
            <Button type="primary" className="primary" htmlType="submit">
              Publish
            </Button>
          </div>
        </section>
        <section>
          <FormSelect
            label="Room"
            name="rooms"
            defaultValue="living room"
            placeholder="Living room"
            options={[
              {
                value: "living room",
                label: "Living room",
              },
              {
                value: "kitchen",
                label: "Kitchen",
              },
            ]}
            className="h-10"
          />
          <FormTextArea
              label="Description"
              name="description"
              required
              message="Please enter the discount of ammount"
              placeholder="Enter discount ammount"
              className="w-full"
            />

          <div className="grid grid-cols-2 gap-4">
            <FormInputNumber
              label="Regular Price"
              name="regularPrice"
              required
              message="Please enter the discount of ammount"
              placeholder="Enter discount ammount"
              className="h-10 w-full"
              min="0"
            />
            <FormInputNumber
              label="Discount Price"
              name="discountPrice"
              required
              message="Please enter the number of voucher"
              placeholder="Enter the number of voucher"
              className="h-10 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormUploadButton label="Catalog cover" name="image" className="xl:w-[40rem]"/>
            <FormSelect
              allowClear
              mode="multiple"
              label="Apply to product"
              name="products"
              placeholder="Product A"
              defaultValue="productA"
              options={[
                {
                  value: "productA",
                  label: "Product A",
                },
                {
                  value: "productB",
                  label: "Product B",
                },
                {
                  value: "productC",
                  label: "Product C",
                },
              ]}
              className="h-10"
            />
          </div>
        </section>
      </Form>
    </main>
  );
};

export default CreatingCatalog;
