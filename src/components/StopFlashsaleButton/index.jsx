import { Button, message, Popconfirm } from "antd";
import { useUpdate } from "../../hooks/api-hooks";
import { get_all_flash_sale, stop_flashsale } from "../../api/flashsaleApi";

const StopFlashsaleButton = ({ flashsaleId }) => {
  const { mutate } = useUpdate(
    stop_flashsale(flashsaleId),
    undefined,
    () => {
        message.success("Flashsale has been stopped");
    },
    (error) => {
        message.error(error.response.data.error.message)
    },
    get_all_flash_sale()
  );
  const confirm = (e) => {
    mutate();
  };
  const cancel = () => {};
  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      okType="link"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger type="text" className="font-bold uppercase">
        Stop
      </Button>
    </Popconfirm>
  );
};

export default StopFlashsaleButton;
