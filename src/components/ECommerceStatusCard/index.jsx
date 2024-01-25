import PropTypes from "prop-types";

function ECommerceStatusCard({ icon, title, status }) {
  return (
    <section className="flex">
      <img src={icon} className="w-12 h-12 mr-2" />
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-lg leading-6">{title}</h3>
        <span className="text-xs leading-3">{status}</span>
      </div>
    </section>
  );
}

export default ECommerceStatusCard;

ECommerceStatusCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
