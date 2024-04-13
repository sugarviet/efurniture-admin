import { Card } from "antd";
import ECommerceStatusCard from "../../components/ECommerceStatusCard";
import LocationMapBox from "../../components/MostPucharsedLocation";
// import StatisticCard from "../../components/StatisticCard";
import TotalSellByMonth from "./components/TotalSellByMonth";
import ECommerceStatusCardList from "../../components/ECommerceStatusCardList";

const E_COMMERCE_STATUS_KEYS = ["new orders", "on hold", "out of stock"];

const Home = () => {
  return (
    <main>
      <ECommerceStatusCardList />

      <TotalSellByMonth />
      
      {/* <div className="grid grid-cols-2 gap-4">
        <StatisticCard label={"Total orders"} description={"Last 7 days"} />
      </div> */}
      <LocationMapBox />
    </main>
  );
};

export default Home;
