import ReportList from "./components/ReportList";
import SaleChart from "./components/SaleChart";
import { DatePicker } from "antd";

import ECommerceStatusCard from "../../components/EcommerceStatusCard";
import { ICONS } from "../../constants/icons";

const { RangePicker } = DatePicker;

const Home = () => {
  return (
    <div>
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

      <RangePicker format={"DD/MM/YYYY"} />
      <ReportList />
      <SaleChart />
    </div>
  );
};

export default Home;
