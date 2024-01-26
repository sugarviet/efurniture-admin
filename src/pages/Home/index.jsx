import { ICONS } from "../../constants/icons";
import ECommerceStatusCard from "../../components/ECommerceStatusCard";
import TotalSellByMonth from "./components/TotalSellByMonth";


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
    </main>
  );
};

export default Home;
