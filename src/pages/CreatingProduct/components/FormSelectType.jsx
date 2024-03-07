import FormSelect from "@components/FormSelect";
import PropTypes from "prop-types";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_types } from "../../../api/typesApi";
import { useCreatingProductValues } from "../CreatingProductContext";
import { useState } from "react";
import { Button } from "antd";
import AppModal from "@components/AppModal";
import CreatingType from "../../Types/components/CreatingType";

function FormSelectType({ data }) {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { handleSelectType } = useCreatingProductValues();
  const typesSelectOptions = data.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-52">
        <FormSelect
          label="Type"
          name="type"
          className="col-span-1"
          options={typesSelectOptions}
          onChange={handleSelectType}
        />
        <Button className="w-40" onClick={() => setOpenModalCreate(true)}>
          Create new type
        </Button>
      </div>
      <AppModal isOpen={openModalCreate} setIsOpen={setOpenModalCreate}>
        <CreatingType />
      </AppModal>
    </div>
  );
}

FormSelectType.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(FormSelectType, get_all_types);
