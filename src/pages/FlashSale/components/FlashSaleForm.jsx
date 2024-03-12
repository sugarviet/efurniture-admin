import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "../../../components/FormInputNumber";
import FurnitureSelection from "../../../components/FurnitureSelection";
import FormList from "../../../components/FormList";
import { DeleteOutlined } from "@ant-design/icons";
import FormDatePickerWithTime from "../../../components/FormDatePickerWithTime";
import useFlashSale from "../../../hooks/useFlashSale";
const FlashSaleForm = () => {
  const { form, handleCreateFlashsale } = useFlashSale();

  const handleSubmit = async (values) => {
    handleCreateFlashsale(values);
  };

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
            initialValues={[{ product: undefined, salePrice: 10000, count: 1 }]}
            name="products"
          >
            {({ name, remove, restField }) => {
              return (
                <div className="grid grid-cols-6 items-center gap-4">
                  <Form.Item
                    {...restField}
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
                    <FurnitureSelection className="h-12" />
                  </Form.Item>
                  <div className="flex gap-4 col-span-2">
                    <FormInputNumber
                      min={1}
                      className="h-12"
                      name={[name, "count"]}
                    />
                    <FormInputNumber
                      prefix="VND"
                      min={1}
                      className="h-12"
                      name={[name, "salePrice"]}
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
