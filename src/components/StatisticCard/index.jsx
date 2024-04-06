import { Statistic } from "antd";
import CountUp from "react-countup";
import FurnitureBarChart from "../FurnitureBarChart";
import PropTypes from "prop-types";
import { withFetchData } from "@hocs/withFetchData";
import { get_7_days_last_order } from "../../api/statisticApi";

const data = [
  {
    completed: 50,
    pendingPayment: 50,
  },
  {
    completed: 50,
    pendingPayment: 50,
  },
  {
    completed: 12,
    pendingPayment: 88,
  },
  {
    completed: 15,
    pendingPayment: 85,
  },
  {
    completed: 20,
    pendingPayment: 80,
  },
  {
    completed: 60,
    pendingPayment: 40,
  },
  {
    completed: 80,
    pendingPayment: 20,
  },
];

const formatter = (value) => <CountUp end={value} separator="," />;
function StatisticCard({ label, description, data }) {
  console.log('statis', data);
  return (
    <section className="flex flex-col items-center justify-between w-full border bg-white rounded-md p-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <span className="font-bold text-base">{label}</span>
          <span className="text-sm">{description}</span>
        </div>
        <Statistic
          className="text-xl font-semibold"
          value={12651}
          formatter={formatter}
        />
      </div>
      <FurnitureBarChart data={data} />
    </section>
  );
}

export default withFetchData(StatisticCard, get_7_days_last_order);

StatisticCard.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
