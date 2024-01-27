import { Statistic } from "antd";
import CountUp from "react-countup";
import FurnitureBarChart from "../FurnitureBarChart";
import PropTypes from "prop-types";

const formatter = (value) => <CountUp end={value} separator="," />;

function StatisticCard({ data, label, description, statisticValue }) {
  return (
    <section className="flex flex-col items-center justify-between w-full border bg-white rounded-md p-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <span className="font-bold text-base">{label}</span>
          <span className="text-sm">{description}</span>
        </div>
        <Statistic
          className="text-xl font-semibold"
          value={statisticValue}
          formatter={formatter}
        />
      </div>
      <FurnitureBarChart data={data} />
    </section>
  );
}

export default StatisticCard;

StatisticCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  statisticValue: PropTypes.string.isRequired,
};
