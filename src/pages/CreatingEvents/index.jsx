import { Form, Button, Card, Divider } from "antd";
import FormInputNumber from "@components/FormInputNumber";
import FormInput from "@components/FormInput";
import FormTextArea from "@components/FormTextArea";
import FormSelect from "@components/FormSelect";
import FormUploadButton from "@components/FormUploadButton";
import FormList from "@components/FormList";

const CreatingEvent = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <main className="space-y-8">
      <Form layout="vertical" onFinish={onFinish}>
        <section className="space-y-2 flex justify-between my-3">
          <div>
            <h1 className="text-3xl font-bold">Events Management</h1>
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

        <div className="flex gap-6">
          <section className="flex-1">
            <FormInput
              label="Events name"
              name="name"
              placeholder="Enter the name of the event"
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
            <FormUploadButton
              label="Event image"
              name="image"
              className="xl:w-[40rem]"
            />
          </section>
          <section className="w-96">
            <Card>
              <p className="text-2xl font-bold mb-4">List Products</p>
              <FormList
                name="variants"
                initialValues={[{ size: "lucy", name: "lucy" }]}
              >
                {({ name, restField, remove }, index) => (
                  <div className="w-full">
                    <div className="flex justify-between my-2">
                      <p className="text-base">Product {index + 1}</p>
                      <p
                        onClick={() => remove(name)}
                        className="cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <FormSelect
                      name={[name, "size"]}
                      className="w-full"
                      label="Collection"
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
                    <div className="flex gap-4">
                      <FormInputNumber
                        label="Regular Price"
                        name={[name, "regularPrice"]}
                        required
                        message="Please enter the discount of ammount"
                        placeholder="Enter discount ammount"
                        className="w-full"
                        min="0"
                      />
                      <FormInputNumber
                        label="Discount Price"
                        name={[name, "Price"]}
                        required
                        message="Please enter the number of voucher"
                        placeholder="Enter the number of voucher"
                        className="w-full"
                      />
                    </div>

                    <Divider dashed />
                  </div>
                )}
              </FormList>
            </Card>
          </section>
        </div>
      </Form>
    </main>
  );
};

export default CreatingEvent;
