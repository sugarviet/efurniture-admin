import { useEffect, useState } from "react";
import { useUpdate } from "../../hooks/api-hooks";
import { InputNumber } from "antd";
import PropTypes from "prop-types";
import useNotification from "../../hooks/useNotification";

const EditableInputNumber = ({
  defaultValue,
  url,
  record,
  name,
  refreshKey,
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
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>+-]/;
    if (specialCharacters.test(e.target.value)) return setEditedValue(defaultValue)
  
    const data = {
      ...record,
      [name]: +e.target.value,
    };
    edit(data);
  };

  return (
    <InputNumber
      className="border-transparent hover:border-black border-[1px] rounded-none"
      {...others}
      value={editedValue}
      // min={0}
      onChange={(e) => setEditedValue(e)}
      onBlur={(e) => handleSave(e)}
      
    />
  );
};

export default EditableInputNumber;

EditableInputNumber.propTypes = {
  defaultValue: PropTypes.string,
  url: PropTypes.string,
  record: PropTypes.object,
  name: PropTypes.string,
  refreshKey: PropTypes.func,
  type: PropTypes.string,
  notiType: PropTypes.string,
  notiAction: PropTypes.string,
};
