import PropTypes from "prop-types";

function TableCard({ label, children, addMoreButton }) {
  return (
    <section className="flex flex-col bg-white rounded-xl shadow-xl p-4 my-4">
      <div className="flex justify-between">
        <span className="font-semibold tracking-wider text-xl mb-4">
          {label}
        </span>
        {addMoreButton}
      </div>
      {children}
    </section>
  );
}

TableCard.propTypes = {
  label: PropTypes.string,
  addMoreButton: PropTypes.node,
  children: PropTypes.node,
};


export default TableCard;
