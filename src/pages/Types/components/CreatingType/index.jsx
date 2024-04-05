import { Button, Form } from "antd";
import FormInput from "../../../../components/FormInput";
import FormUploadButton from "../../../../components/FormUploadButton";
import useTypeManagement from "../../hooks/useTypeManagement";

const CreatingType = () => {
  const {createDraftType} = useTypeManagement();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const data = {
      ...values,
      thumb: values.thumb.file.url
    }

    createDraftType(data)
    form.resetFields();
   

  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark='optional'>
        <FormInput
          name="name"
          label="Type Name"
          placeholder="Type name"
          required
        />

        <FormUploadButton
          label="Type thumb"
          name="thumb"
          className="xl:w-[23rem] lg:w-[10rem]"
          required
        />

        <div className="flex gap-2 justify-center">
        
          <Button type="primary" className="primary" htmlType="submit">
            Create types
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatingType;
