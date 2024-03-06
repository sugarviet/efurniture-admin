import { Button, Form } from "antd";
import FormInput from "../../../../components/FormInput";
import FormUploadSingleButton from "@components/FormUploadSingleButton";
import useTypeManagement from "../../hooks/useTypeManagement";

const CreatingType = () => {
  const {createDraftType} = useTypeManagement();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const data = {
      ...values,
      thumb: values.thumb.file.url
    }
    console.log(values);
    createDraftType(data)
   

  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <FormInput
          name="name"
          label="Type Name"
          placeholder="Type name"
          required
        />

        <FormUploadSingleButton
          label="Type thumb"
          name="thumb"
          className="xl:w-[28rem] lg:w-[20rem]"
          required
        />

        <div className="flex gap-2">
        
          <Button type="primary" className="primary" htmlType="submit">
            Create draft types
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatingType;
