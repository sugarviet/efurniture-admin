import { Form, Button } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormTextArea from "@components/FormTextArea";
import FormItem from "../../../components/FormItem";
import FormInputNumber from "../../../components/FormInputNumber";
import FurnitureSelection from "../../../components/FurnitureSelection";
import FormList from "../../../components/FormList";
import useRoom from "../../../hooks/useRoom";
import { CloseCircleFilled, DeleteOutlined } from "@ant-design/icons";

const RoomForm = () => {
  const { createRoom } = useRoom();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    createRoom(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark={'optional'}
      autoComplete="off"
    >
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <FormInput
            label="Name"
            name="name"
            placeholder="Write room name here..."
            message="Please enter the name of the room"
          />

          <FormTextArea
            label="Description"
            name="description"
            placeholder="Write description here..."
            message="Please enter the description of the room"
          />

          <FormList
            initialValues={[{ product: undefined, quantity: 1 }]}
            name="products"
          >
            {({ name, remove }) => {
              return (
                <div className="grid grid-cols-6 gap-4 items-center">
                  <FormItem className="col-span-5" name={[name, "product"]}>
                    <FurnitureSelection className="h-12" />
                  </FormItem>
                  <div className="flex gap-4">
                    <FormInputNumber
                      className="h-12"
                      name={[name, "quantity"]}
                      defaultValue={1}
                      min={0}
                      max={2}
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
        <FormUploadButton className="h-96" label="Image" name="thumb" />
      </div>

      <Button type="primary" className="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RoomForm;
