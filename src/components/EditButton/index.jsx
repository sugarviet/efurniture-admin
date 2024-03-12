import PropTypes from "prop-types";

function EditButton({ onClick }) {
  return (
    <button className="uppercase text-blue-600 font-semibold" onClick={onClick}>
      edit
    </button>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
