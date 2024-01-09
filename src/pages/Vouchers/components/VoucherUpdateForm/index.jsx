import { Button, Form, Input, DatePicker, Select } from "antd";
import Loading from "@components/loading";
import { formateDate } from "@utils/formateDate";
import Proptypes from "prop-types";
import useVoucherDetail from "../../hooks/useVoucherDetail";
import { formateDateByDMY } from "@utils/formateDateByDMY";
import { useUpdateVoucher } from "@services/Vouchers/services";

const { Option } = Select;
const VoucherUpdateForm = ({ id }) => {
  const { voucher, isLoading } = useVoucherDetail(id);
  const [form] = Form.useForm();
  const {mutate} = useUpdateVoucher();
  console.log(voucher);


  if (isLoading) return <Loading />;

  const initialValue = {
    ...voucher,
    startDate: formateDate(voucher.startDate),
    endDate: formateDate(voucher.endDate),
  };

  const onFinish = (values) => {
    const data = {
      ...values,
      id: id,
      startDate: formateDateByDMY(values.startDate),
      endDate: formateDateByDMY(values.endDate),
    }
    mutate(data);
  };


  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValue}
      >
        <Form.Item
          name="name"
          label="Event Name"
          rules={[{ required: true, message: "Please enter the event name!" }]}
        >
          <Input />
        </Form.Item>
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

VoucherUpdateForm.propTypes = {
  id: Proptypes.number,
};

export default VoucherUpdateForm;
