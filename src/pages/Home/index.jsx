import ECommerceStatusCard from "../../components/EcommerceStatusCard";
import StatisticCard from "../../components/StatisticCard";
import { ICONS } from "../../constants/icons";
import TotalSellByMonth from "./components/TotalSellByMonth";

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

const Home = () => {
  return (
    <main>
      <div className="flex gap-4">
        <ECommerceStatusCard
          icon={ICONS.onProcessing}
          title={"57 new orders"}
          status={"Awaiting processing"}
        />
        <ECommerceStatusCard
          icon={ICONS.onHold}
          title={"5 orders"}
          status={"On hold"}
        />
        <ECommerceStatusCard
          icon={ICONS.outOfStock}
          title={"15 products"}
          status={"Out of stock"}
        />
      </div>

      <TotalSellByMonth />
      <div className="grid grid-cols-2 gap-4">
        <StatisticCard
          data={data}
          label={"Total orders"}
          description={"Last 7 days"}
          statisticValue={16247}
        />
      </div>
    </main>
  );
};

export default Home;
