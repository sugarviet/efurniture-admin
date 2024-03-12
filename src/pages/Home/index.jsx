import { get_today_revenue } from "../../api/revenueApi";
import ECommerceStatusCard from "../../components/EcommerceStatusCard";
import LocationMapBox from "../../components/MostPucharsedLocation";
import StatisticCard from "../../components/StatisticCard";
import { useFetch } from "../../hooks/api-hooks";
import TotalSellByMonth from "./components/TotalSellByMonth";


const E_COMMERCE_STATUS_KEYS = ["new orders", "on hold", "out of stock"];

const Home = () => {
  const {data} = useFetch(get_today_revenue())
  console.log(data);

  return (
    <main>
    
      <div className="flex gap-4">
        {E_COMMERCE_STATUS_KEYS.map((key) => (
          <ECommerceStatusCard key={key} type={key} />
        ))}
      </div>

      <TotalSellByMonth />
      <div className="grid grid-cols-2 gap-4">
        <StatisticCard label={"Total orders"} description={"Last 7 days"} />
      </div>
      <LocationMapBox />
    </main>
  );
};

export default Home;
