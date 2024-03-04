import { Form, Button } from "antd";
import FormInput from "@components/FormInput";
import FormUploadButton from "@components/FormUploadButton";
import FormTextArea from "@components/FormTextArea";
import { useCreateRoom } from "@services/Rooms/services";

const CreatingRooms = () => {
  const { mutate } = useCreateRoom();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    const data = {
      ...values,
      status: 1,
    };
    mutate(data);
  };

  return (
    <div className="px-4 py-2">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <FormInput
          label="Room name"
          name="name"
          placeholder="Write room name here..."
          required
          message="Please enter the name of the room"
        />

        <FormUploadButton
          label="Display images"
          name="thumb"
          className="xl:w-[20rem] lg:w-[20rem]"
        />

        <FormTextArea
          label="Room Description"
          name="description"
          placeholder="Write description here..."
          required
          message="Please enter the description of the room"
        />

        <Button type="primary" className="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatingRooms;
