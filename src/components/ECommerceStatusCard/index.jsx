import PropTypes from "prop-types";
import { E_COMMERCE_STATUS } from "../../constants/enums";

function ECommerceStatusCard({ type, data }) {
  const { icon, title, status } = E_COMMERCE_STATUS.get(type);

  return (
    <section className="flex gap-3 mr-4">
      <img src={icon} className="w-14 h-14" />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="font-semibold text-lg leading-6">{title}</h3>
        <h4 className='font-bold text-ce'>{data}</h4>

        <span className="text-xs leading-3">{status}</span>
      </div>
    </section>
  );
}

export default ECommerceStatusCard;

ECommerceStatusCard.propTypes = {
  type: PropTypes.string.isRequired,
};
