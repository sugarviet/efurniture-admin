import { Button } from "antd";
import { useUpdate } from "../../hooks/api-hooks";
import useNotification from "../../hooks/useNotification";
import { useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const ChangeStatusButton = ({
  url,
  resetPublishkey,
  resetDraftKey,
  type,
  action,
  children,
  published,
}) => {
  const { success_message, error_message } = useNotification();
  const queryClient = useQueryClient();
  const { mutate: changeStatus } = useUpdate(
    url,
    undefined,
    () => {
      queryClient.invalidateQueries(resetPublishkey);
      queryClient.invalidateQueries(resetDraftKey);

      success_message(type, action);
    },
    () => {
      error_message(type, action);
    }
  );
  return (
    <Button
      className={classNames(
        "border-none uppercase font-bold text-md",
        published ? "text-rose-600" : "text-green-600"
      )}
      onClick={() => {
        changeStatus({});
      }}
    >
      {children}
    </Button>
  );
};

ChangeStatusButton.propTypes = {
  url: PropTypes.string,
  resetPublishkey: PropTypes.string,
  resetDraftKey: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.node,
};

export default ChangeStatusButton;
