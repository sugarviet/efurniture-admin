import { Card, Form, Button } from "antd";
import FormUploadButton from "@components/FormUploadButton";

const RefundConfirm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Card>
      <Form layout="vertical" onFinish={onFinish} requiredMark='optional'>
        <FormUploadButton
          className="xl:w-[21rem] lg:w-full"
          label="Refund Amount"
          name="refund"
        />
        <Button
          htmlType="submit"
          className="primary mx-auto flex justify-center"
          type="primary"
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default RefundConfirm;
