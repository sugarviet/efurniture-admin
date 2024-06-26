import PropTypes from "prop-types";
import AppModal from "@components/AppModal";
import { useState } from "react";

function EditButton({ onClick, children, title = 'Edit', modalWidth = 600 }) {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  return (
    <>
    <button className="uppercase text-blue-600 font-semibold" onClick={() => setOpenModalEdit(true)}>
      {title}
    </button>
    <AppModal isOpen={openModalEdit} setIsOpen={setOpenModalEdit} width={modalWidth}>
        {openModalEdit ?
            children
          : null}
      </AppModal>
    </>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  modalWidth: PropTypes.number,
};

export default EditButton;
