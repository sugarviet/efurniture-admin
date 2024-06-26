import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "@components/FormInputNumber";
import FormDatePicker from "@components/FormDatePicker";
import FurnitureSelection from "../FurnitureSelection";
import FormTextArea from "@components/FormTextArea";
import FormItem from "../FormItem";
import FormSelect from "../FormSelect";
import useVoucher from "../../hooks/useVoucher";
import { useState } from "react";
import { getCurrentDate } from "../../utils/getCurrentDate";

function VoucherForm() {
  const [type, setType] = useState('');
  const { createVoucher, form } = useVoucher();

  const onFinish = (value) => {
    createVoucher(value);
  };

  return (
    <Form
      form={form}
      initialValues={{ 
        max_discount: 100000,
        type: 'percentage',
        maximum_use: 1,
        maximum_use_per_user: 1,
        minimum_order_value: 100000,
        start_date: getCurrentDate(),
        end_date: getCurrentDate(),

       }}
      requiredMark="optional"
      layout="vertical"
      onFinish={onFinish}
    >
        <FormInput
          label="Name"
          name="name"
          type='text'
          message="Please enter the code of message"
          placeholder="Enter voucher name"
          className="h-10"
        />
      <FormTextArea
        label="Description"
        name="description"
        type='description'
        placeholder="Enter voucher description"
        message="Please enter the description of the voucher"
      />
      <div className="grid grid-cols-3 gap-4">
        <FormSelect
          label="Type"
          name="type"
          required
          onChange={setType}
          placeholder="Choose the type of voucher"
          options={[
            { value: "percentage", label: "percentage" },
            { value: "fixed_amount", label: "fixed amount" },
          ]}
        />
        <FormInputNumber
          label="Value"
          required
          prefix={type === 'fixed_amount' ? "VND" : "%"}
          name="value"
          message="Please enter the value"
        />
         <FormInputNumber
          label="Max discount"
          disabled={type === 'fixed_amount'}
          required={type !== 'fixed_amount'}
          name="max_discount"
          min={1}
          prefix="VND"
          message="Please enter the value"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormInputNumber
          label="Maximum in use (MaxIU)"
          required
          min={1}
          name="maximum_use"
          message="Please enter the value"
        />
        <FormInputNumber
          label="Maximum in use per user (MaxIU/U)"
          required
          min={1}
          name="maximum_use_per_user"
          message="Please enter the value"
        />
        <FormInputNumber
          label="Minimum order value (MinOV)"
          required
          min={1}
          prefix="VND"
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

      <button className="furniture-button">
        Create
      </button>
    </Form>
  );
}

export default VoucherForm;
