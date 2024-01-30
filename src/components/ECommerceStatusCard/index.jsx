import PropTypes from "prop-types";
import { E_COMMERCE_STATUS } from "../../constants/enums";

function ECommerceStatusCard({ type }) {
  const { icon, title, status } = E_COMMERCE_STATUS.get(type);

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
  type: PropTypes.string.isRequired,
};
