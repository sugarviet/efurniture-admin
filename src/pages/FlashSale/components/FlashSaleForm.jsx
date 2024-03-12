import { Form, Button, DatePicker } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormTextArea from "@components/FormTextArea";
import FormInputNumber from "../../../components/FormInputNumber";
import FurnitureSelection from "../../../components/FurnitureSelection";
import FormList from "../../../components/FormList";
import { DeleteOutlined } from "@ant-design/icons";
import FormDatePickerWithTime from "../../../components/FormDatePickerWithTime";
import dayjs from "dayjs";
const FlashSaleForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const startDay = dayjs(values.startDay).format("YYYY-MM-DD:HH:mm");
    const endDay = dayjs(values.endDay).format("YYYY-MM-DD:HH:mm");
    const data = {
      ...values,
      startDay,
      endDay,
    };
    console.log(data);
  };

  const handleSelect = (value) => {
    console.log(value);
  }
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark="optional"
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <div>
        <div className="col-span-3">
          <FormInput
            label="Name"
            name="name"
            required
            placeholder="Write room name here..."
            message="Please enter the name of the room"
          />
          <div className="grid grid-cols-2 gap-4">
            <FormDatePickerWithTime
              label="Start date"
              name="startDay"
              required
              message="Please enter the expiration date"
              placeholder="Enter end date"
              className="w-full h-10"
            />
            <FormDatePickerWithTime
              label="End date"
              name="endDay"
              required
              message="Please enter the expiration date"
              placeholder="Enter end date"
              className="w-full h-10"
            />
          </div>

          <FormList
        
            name="products"
          >
            {({ name, remove }) => {
              return (
                <div className="grid grid-cols-6 items-center gap-4">
                  <Form.Item
                    required
                    rules={[
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          const products =
                            [...getFieldValue(["products"])] || [];

                          const isDuplicate =
                            products.filter(
                              (item) => item.product._id === value._id
                            ).length >= 2;

                          if (isDuplicate) {
                            return Promise.reject([
                              "Furniture has been already exists",
                            ]);
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                    className="col-span-4"
                    name={[name, "product"]}
                  >
                    <FurnitureSelection className="h-12" onChange={handleSelect} />
                  </Form.Item>
                  <div className="flex gap-4 col-span-2">
                    <FormInputNumber
                      min={1}
                      className="h-12"
                      name={[name, "count"]}
                      defaultValue={1}
                    />
                    <FormInputNumber
                    prefix="VND"
                      min={1}
                      className="h-12"
                      name={[name, "salePrice"]}
                      defaultValue={100}
                      placeholder="Sale price"
                    />
                    <DeleteOutlined
                      onClick={() => remove(name)}
                      className="h-12 text-xl mx-auto text-rose-500"
                    />
                  </div>
                </div>
              );
            }}
          </FormList>
        </div>
      </div>

      <button className="furniture-button">create</button>
    </Form>
  );
};

export default FlashSaleForm;
