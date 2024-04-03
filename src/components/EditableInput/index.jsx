import { useEffect, useState } from "react";
import { useUpdate } from "../../hooks/api-hooks";
import { Input } from "antd";
import PropTypes from "prop-types";
import useNotification from "../../hooks/useNotification";

const EditableInput = ({
  defaultValue,
  url,
  record,
  name,
  refreshKey,
  type = "text",
  notiType,
  notiAction,
  ...others
}) => {
  const {error_message, success_message} = useNotification();
  const { mutate: edit } = useUpdate(
    url,
    undefined,
    () => {
      success_message(notiType, notiAction)
    },
    () => {
      error_message(notiType, notiAction)

    },
    refreshKey()
  );
  const [editedValue, setEditedValue] = useState(defaultValue);

  useEffect(() => {
    setEditedValue(defaultValue)
  }, [defaultValue])

  const handleSave = (e) => {
    const data = {
      ...record,
      [name]: type === "number" ? +e.target.value : e.target.value,
    };
    edit(data);
  };

  return (
    <Input
      className="border-transparent hover:border-black border-[1px] rounded-none"
      type={type}
      {...others}
      value={editedValue}
      onChange={(e) => setEditedValue(e.target.value)}
      onBlur={handleSave}
      
    />
  );
};

export default EditableInput;

EditableInput.propTypes = {
  defaultValue: PropTypes.string,
  url: PropTypes.string,
  record: PropTypes.object,
  name: PropTypes.string,
  refreshKey: PropTypes.func,
  type: PropTypes.string,
  notiType: PropTypes.string,
  notiAction: PropTypes.string,
};
