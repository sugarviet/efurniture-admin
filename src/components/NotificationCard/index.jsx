import { StockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import calcTimeFrom from "../../utils/calcTimeFrom";

function NotificationCard({data}) {
  return (
    <section className="flex gap-2">
      <div className="bg-zinc-700 p-2 flex items-center justify-center rounded-md">
        <StockOutlined color="white" style={{ color: 'white' }}/>
      </div>
      <div className="relative">
        <span className="text-black text-xs line-clamp-2">
          {data.message}
        </span>
        <span className="text-gray-500 text-[10px] absolute">{calcTimeFrom(data.updatedAt)}</span>
      </div>
    </section>
  );
}

NotificationCard.propTypes = {
  data: PropTypes.object,
};


export default NotificationCard;
