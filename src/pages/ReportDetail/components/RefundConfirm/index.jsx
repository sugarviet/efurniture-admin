import { Card, Form, Button } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormInputNumber from "../../../../components/FormInputNumber";
import { usePost } from "../../../../hooks/api-hooks";
import { confirm_request_refund, get_all_reports } from "../../../../api/reportApi";
import useNotification from "../../../../hooks/useNotification";

const RefundConfirm = () => {
  const {error_message, success_message} = useNotification();
  const { mutate } = usePost(confirm_request_refund(), undefined, () => {
    success_message('report', 'confirm')
   }, () => { 
    error_message('report', 'confirm')
   }, get_all_reports());
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Card>
      <Form layout="vertical" onFinish={onFinish} requiredMark='optional'>
        <FormInputNumber
          label="Amount"
          required
          name="amount"
          prefix="VND"
          message="Please enter the value"
        />
        <FormUploadButton
          className="xl:w-[21rem] lg:w-full"
          label="Refund Amount"
          name="refund"
          maxCount={1}
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
