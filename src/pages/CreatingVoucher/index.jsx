import { Form, Button } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";
import FormDatePicker from "@components/FormDatePicker";
import FormSelect from "@components/FormSelect";

import { formateDateByDMY } from "@utils/formateDateByDMY";

const CreatingVoucer = () => {
  const onFinish = (values) => {
    console.log(formateDateByDMY(values.expireDate));
  };

  return (
    <main className="space-y-8">
      <Form layout="vertical" onFinish={onFinish}>
        <section className="space-y-2 flex justify-between my-3">
          <div>
            <h2 className="text-3xl font-bold">Voucher Management</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Enter the details of the voucher to be created.
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
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Voucher code"
              name="name"
              required
              message="Please enter the code of message"
              placeholder="Enter vocher code"
              className="h-10"
            />
            <FormDatePicker
              label="Expiration date"
              name="expireDate"
              required
              message="Please enter the expiration date"
              placeholder="Enter vocher code"
              className="w-full h-10"
            />
            <FormInputNumber
              label="Discount amount"
              name="discountAmount"
              required
              message="Please enter the discount of ammount"
              placeholder="Enter discount ammount"
              className="h-10 w-full"
            />
            <FormInputNumber
              label="Number of voucher"
              name="numberOfVoucher"
              required
              message="Please enter the number of voucher"
              placeholder="Enter the number of voucher"
              className="h-10 w-full"
            />
            <FormSelect
              allowClear
              mode="multiple"
              label="Apply to product"
              name="products"
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

export default CreatingVoucer;
