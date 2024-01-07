import ReportList from "./components/ReportList";
import SaleChart from "./components/SaleChart";
import { DatePicker } from "antd";
import { useState } from "react";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const Home = () => {
  const [startDate] = useState(dayjs().weekday(-7).format("DD/MM/YYYY"));
  const [endDate] = useState(dayjs().format("DD/MM/YYYY"));

  console.log(startDate, endDate);

  const onRangeChange = (e) => {
    console.log(e[0].format("DD/MM/YYYY"));
  };

  return (
    <div>
      <RangePicker onChange={onRangeChange} format={"DD/MM/YYYY"}/>

      <ReportList />
      <SaleChart />
    </div>
  );
};

export default Home;
