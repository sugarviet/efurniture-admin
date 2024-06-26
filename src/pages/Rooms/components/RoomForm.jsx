import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormTextArea from "@components/FormTextArea";
import FormInputNumber from "../../../components/FormInputNumber";
import FurnitureSelection from "../../../components/FurnitureSelection";
import FormList from "../../../components/FormList";
import useRoom from "../../../hooks/useRoom";
import { DeleteOutlined } from "@ant-design/icons";

const RoomForm = () => {
  const { createRoom, form } = useRoom();

  const handleSubmit = async (values) => {
    createRoom(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark="optional"
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <FormInput
            label="Name"
            name="name"
            type='text'
            placeholder="Write room name here..."
            message="Please enter the name of the room"
          />

          <FormTextArea
            label="Description"
            name="description"
            type='text'
            required
            placeholder="Write description here..."
            message="Please enter the description of the room"
          />

          <FormList
            initialValues={[{ product: undefined, quantity: 1 }]}
            name="products"
          >
            {({ name, remove }, index) => {
              return (
                <div className="grid grid-cols-6 gap-4 items-center">
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
                    className="col-span-5"
                    name={[name, "product"]}
                  >
                    <FurnitureSelection className="h-12" />
                  </Form.Item>
                  <div className="flex gap-4">
                    <FormInputNumber
                      min={1}
                      className="h-12"
                      name={[name, "quantity"]}
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
          <FormInput
                    label="3D model's id"
                    name="model3D"
                    value=""
                    placeholder="Write title here..."
                />
        </div>
        <FormUploadButton
          required
          maxCount={1}
          className="h-96"
          label="Image"
          name="thumb"
        />
      </div>

      <button className="furniture-button">create</button>
    </Form>
  );
};

export default RoomForm;
