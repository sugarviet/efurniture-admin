import { useState } from "react";
import { useUpdate } from "../../hooks/api-hooks";
import { Input } from "antd";
import PropTypes from "prop-types";

const EditableInput = ({
  defaultValue,
  url,
  record,
  name,
  refreshKey,
  type = "text",
}) => {
  const { mutate: edit } = useUpdate(
    url,
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {},
    refreshKey()
  );
  const [editedValue, setEditedValue] = useState(defaultValue);

  const handleSave = (e) => {
    const data = {
      ...record,
      [name]: type === "number" ? +e.target.value : e.target.value,
    };
    edit(data);
  };

  return (
    <Input
      type={type}
      className="border-transparent hover:border-black border-[1px]"
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
};
