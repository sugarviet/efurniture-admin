import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";
import FormDatePicker from "@components/FormDatePicker";
import FurnitureSelection from "../FurnitureSelection";
import FormTextArea from "@components/FormTextArea";
import FormItem from "../FormItem";
import FormSelect from "../FormSelect";
import useVoucher from "../../hooks/useVoucher";

function VoucherForm() {
  const [form] = Form.useForm();

  const { createVoucher } = useVoucher();

  const onFinish = (value) => {
    createVoucher(value);
  };

  return (
    <Form
      form={form}
      requiredMark="optional"
      layout="vertical"
      onFinish={onFinish}
    >
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Code"
          name="code"
          required
          message="Please enter the code of message"
          placeholder="Enter voucher code"
          className="h-10"
        />
        <FormInput
          label="Name"
          name="name"
          required
          message="Please enter the code of message"
          placeholder="Enter voucher name"
          className="h-10"
        />
      </div>
      <FormTextArea
        label="Description"
        name="description"
        required
        placeholder="Enter voucher description"
        message="Please enter the description of the voucher"
      />
      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          label="Type"
          name="type"
          required
          placeholder="Choose the type of voucher"
          options={[
            { value: "percentage", label: "percentage" },
            { value: "fixed_amount", label: "fixed amount" },
          ]}
        />
        <FormInputNumber
          label="Value"
          required
          name="value"
          prefix="VND"
          message="Please enter the value"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormInputNumber
          label="Maximum in use (MaxIU)"
          required
          name="maximum_use"
          message="Please enter the value"
        />
        <FormInputNumber
          label="Maximum in use per user (MaxIU/U)"
          required
          name="maximum_use_per_user"
          message="Please enter the value"
        />
        <FormInputNumber
          label="Minimum order value (MinOV)"
          required
          name="minimum_order_value"
          message="Please enter the value"
          

        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormDatePicker
          label="Start date"
          name="start_date"
          required
          message="Please enter the expiration date"
          placeholder="Enter start date"
          className="w-full h-10"
        />
        <FormDatePicker
          label="End date"
          name="end_date"
          required
          message="Please enter the expiration date"
          placeholder="Enter end date"
          className="w-full h-10"
        />
      </div>
      <FormItem label="Apply to product" name="products" className="col-span-5">
        <FurnitureSelection multiple className="h-12" />
      </FormItem>

      <button onClick={onFinish} className="furniture-button">
        Create
      </button>
    </Form>
  );
}

export default VoucherForm;
