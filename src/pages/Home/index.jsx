import { Card, Modal } from "antd";
import ECommerceStatusCard from "../../components/ECommerceStatusCard";
import LocationMapBox from "../../components/MostPucharsedLocation";
// import StatisticCard from "../../components/StatisticCard";
import TotalSellByMonth from "./components/TotalSellByMonth";
import ECommerceStatusCardList from "../../components/ECommerceStatusCardList";
import { useState } from "react";

const E_COMMERCE_STATUS_KEYS = ["new orders", "on hold", "out of stock"];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleConfirmLogout = () => {
    // Logic for logout
    setModalVisible(false);
  };
  return (
    <main className="flex flex-col gap-4">
      
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
