import { Button, Form, Input, DatePicker, Select } from "antd";

import { formateDateByDMY } from "@utils/formateDateByDMY";
import { useCreateVoucher } from "@services/Vouchers/services";

const { Option } = Select;
const VoucherCreateForm = () => {
  const {mutate:createVoucher} = useCreateVoucher();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const data = {
      ...values,
      startDate: formateDateByDMY(values.startDate),
      endDate: formateDateByDMY(values.endDate),
    }
    createVoucher(data);

    console.log(data);
  };
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Voucher Name"
          rules={[{ required: true, message: "Please enter the event name!" }]}
        >
          <Input placeholder="Voucher name"/>
        </Form.Item>
       
        <Form.Item
          name="quantity"
          label="Quantity"

          rules={[{ required: true, message: "Please enter the voucher quantity!" }]}
        >
          <Input placeholder="Voucher quantity" inputMode="numeric" type="number"/>
        </Form.Item>
        <Form.Item
          name="discount"
          label="Discount"

          rules={[{ required: true, message: "Please enter the voucher discount %!" }]}
        >
          <Input placeholder="Voucher discount %" type="number"/>
        </Form.Item>
        <div className="flex justify-between">
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Please select the start date!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="End Date"
          rules={[{ required: true, message: "Please select the end date!" }]}
        >
          <DatePicker />
        </Form.Item>
        </div>

        <Form.Item
          name="products"
          label="Products"
          rules={[
            { required: true, message: "Please select at least one product!" },
          ]}
        >
          <Select mode="multiple" placeholder="Select products">
            {/* Add product options as needed */}
            <Option value="Product A">Product A</Option>
            <Option value="Product B">Product B</Option>
            <Option value="Product C">Product C</Option>
            <Option value="Product D">Product D</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" className="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VoucherCreateForm;
