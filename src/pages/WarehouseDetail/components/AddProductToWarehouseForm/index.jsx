import { Card, Form } from "antd";
import React from "react";
import FormList from "../../../../components/FormList";
import { DeleteOutlined } from "@ant-design/icons";
import FurnitureSelection from "../../../../components/FurnitureSelection";
import FurnitureSelectionWarehouse from "../../../../components/FurnitureSelectionWarehouse";

import FormInputNumber from "../../../../components/FormInputNumber";
import useWarehouse from "../../../../hooks/useWarehouse";

const AddProductToWarehouseForm = ({ id }) => {
  const { addProductToWarehouse } = useWarehouse(id);
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
    const body = {
      products: values.products.map((item) => ({
        product: item.product._id,
        variation: [{
          variation_id: item.product.variation[0]._id,
          property_id: item.product.selectedVariation._id,

        }],
        stock: item.stock,
      })),
    };
    console.log(body);
    addProductToWarehouse([...body.products])
  };
  return (
    <Card>
      <Form
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <FormList
          initialValues={[{ product: undefined, stock: 1 }]}
          name="products"
        >
          {({ name, remove }) => {
            return (
              <div className="grid grid-cols-6 gap-4 items-center">
                <Form.Item
                  required
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        const products = [...getFieldValue(["products"])] || [];

                        const isDuplicate =
                          products.filter(
                            (item) => item.product._id === value._id && item.product.
                            selectedVariation.value === value.selectedVariation.value
                            
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
                  <FurnitureSelectionWarehouse className="h-12" />
                </Form.Item>
                <div className="flex gap-4 col-span-2">
                  <FormInputNumber
                    min={1}
                    className="h-12"
                    name={[name, "stock"]}
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

        <button className="furniture-button mx-auto flex">
          Add to warehouse
        </button>
      </Form>
    </Card>
  );
};

export default AddProductToWarehouseForm;
