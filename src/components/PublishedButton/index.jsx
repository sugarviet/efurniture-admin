import { Button } from "antd";
import { useUpdate } from "../../hooks/api-hooks";
import useNotification from "../../hooks/useNotification";

const PublishedButton = ({ param, callbackFn }) => {
  const handleClick = () => {
    callbackFn(param);
  };

  return <Button onClick={handleClick}>Publish</Button>;
};

export default PublishedButton;
