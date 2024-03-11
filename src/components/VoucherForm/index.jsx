import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";
import FormDatePicker from "@components/FormDatePicker";
import FurnitureSelection from "../FurnitureSelection";
import FormItem from "../FormItem";

function VoucherForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <section>
      <Form
        form={form}
        requiredMark="optional"
        className="grid grid-cols-2 gap-4"
        layout="vertical"
        onFinish={onFinish}
      >
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
        <FormItem
          label="Apply to product"
          required
          name="products"
          className="col-span-5"
        >
          <FurnitureSelection multiple className="h-12" />
        </FormItem>
      </Form>
    </section>
  );
}

export default VoucherForm;
