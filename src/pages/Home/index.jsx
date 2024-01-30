import ECommerceStatusCard from "../../components/EcommerceStatusCard";
import StatisticCard from "../../components/StatisticCard";
import { ECommerceStatus } from "../../constants/enums";
import TotalSellByMonth from "./components/TotalSellByMonth";

const Home = () => {
  return (
    <main>
      <div className="flex gap-4">
        {[...ECommerceStatus].map(([key]) => (
          <ECommerceStatusCard key={key} type={key} />
        ))}
      </div>

      <TotalSellByMonth />
      <div className="grid grid-cols-2 gap-4">
        <StatisticCard label={"Total orders"} description={"Last 7 days"} />
      </div>
    </main>
  );
};

export default Home;
