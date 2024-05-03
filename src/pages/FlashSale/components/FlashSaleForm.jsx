import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormInputNumber from "../../../components/FormInputNumber";
import FormList from "../../../components/FormList";
import { DeleteOutlined } from "@ant-design/icons";
import FormDatePickerWithTime from "../../../components/FormDatePickerWithTime";
import useFlashSale from "../../../hooks/useFlashSale";
import FurnitureSelectionFlashsale from "../../CreatingFlashSale/components/FurnitureSelectionFlashsale";
import { useState } from "react";
import { formatDateByDateAndTime } from "../../../utils/formatDate";
import FormUploadButton from "@components/FormUploadButton";
import Note from "../../../components/Note";

const FlashSaleForm = () => {
  const { form, handleCreateFlashsale } = useFlashSale();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const hasStartDayAndEndDay = !!startDay && !!endDay

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
      <div className="flex gap-5">
        <div className="w-[60rem]">
          <FormInput
            label="Name"
            name="name"
            type="text"
            placeholder="Write room name here..."
            message="Please enter the name of the room"
          />
          <div className="grid grid-cols-2 gap-4">
            <FormDatePickerWithTime
              label="Start date"
              name="startDay"
              required
              onChange={setStartDay}
              message="Please enter the expiration date"
              placeholder="Enter end date"
              className="w-full h-10"
            />
            <FormDatePickerWithTime
              label="End date"
              name="endDay"
              required
              onChange={setEndDay}
              message="Please enter the expiration date"
              placeholder="Enter end date"
              className="w-full h-10"
            />
          </div>
          <Note type="flashsale" />

          <div className="relative mt-2 p-1">
            {!hasStartDayAndEndDay ?
              <div className="w-full h-full absolute z-50 -top-3 hover:cursor-not-allowed">
              </div> : null

            }
            <FormList

              initialValues={[{ product: undefined, salePrice: 100000 }]}
              name="products"
            >
              {({ name, remove, restField }, index) => {
                return (
                  <div className="grid grid-cols-6 items-center gap-4 flex items-center">
                
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
                      {/* <FurnitureSelection className="h-12" /> */}
                      <FurnitureSelectionFlashsale
                        data={{ startDay, endDay }}

                        className='h-12' />
                    </Form.Item>
                    <div className="flex gap-4 col-span-2 items-center">
                      {/* <FormInputNumber
                      required
                        min={1}
                        className="h-12"
                        name={[name, "count"]}
                      /> */}
                      <FormInputNumber
                      required
                        prefix="VND"
                        min={1000}
                       
                        className="h-12"
                        name={[name, "salePrice"]}
                        placeholder="Sale price"
                      />
                    {index === 0 ? null :

                      <DeleteOutlined
                        onClick={() => remove(name)}
                        className="h-12 text-xl mx-auto text-rose-500"
                      />
                    }

                    </div>
                  </div>
                );
              }}
            </FormList>
          </div>
        </div>
        <div>
        </div>

        <div className="flex-1">
          <FormUploadButton
            required
            maxCount={1}
            label="Thumb"
            name="thumb"
          />
          <FormUploadButton
            required
            maxCount={1}
            label="Background"
            name="background"
          />
        </div>

      </div>

      <button className="furniture-button">create</button>
    </Form>
  );
};

export default FlashSaleForm;
