import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DatePicker } from "antd";
import { useState } from "react";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const newData = [
  { name: "Day 1", value: 200 },
  { name: "Day 2", value: 200 },
  { name: "Day 3", value: 300 },
  { name: "Day 4", value: 400 },
  { name: "Day 5", value: 200 },
  { name: "Day 6", value: 300 },
];

const WeekChart = () => {
  const [startDate] = useState(dayjs().weekday(-7).format("DD/MM/YYYY"));
  const [endDate] = useState(dayjs().format("DD/MM/YYYY"));

  console.log(startDate, endDate);

  const onRangeChange = (e) => {
    console.log(e[0].format("DD/MM/YYYY"));
  };
  return (
    <>
    <div className="mb-4">
      <RangePicker onChange={onRangeChange} format={"DD/MM/YYYY"} />

    </div>
      <LineChart width={1200} height={300} data={newData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" stroke="#82ca9d" dataKey="value" />
      </LineChart>
    </>
  );
};

export default WeekChart;
