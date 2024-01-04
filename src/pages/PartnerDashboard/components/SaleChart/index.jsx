import { ResponsiveContainer } from "recharts";
import { Card, Radio } from "antd";
import { useState } from "react";
import WeekChart from "../WeekChart";
import MonthChart from "../MonthChart";
import YearChart from "../YearChart";

const chartDataType = {
  week: "week",
  month: "month",
  year: "year",
};

const charts = {
  week: {
    component: <WeekChart />,
  },
  month: {
    component: <MonthChart />,
  },
  year: {
    component: <YearChart />,
  },
};

const chartType = [
  {
    id: 1,
    title: "Week",
    value: "week"
  },
  {
    id: 2,
    title: "Month",
    value: "month"
  },
  {
    id: 3,
    title: "Year",
    value: "year"
  }
]

const SaleChart = () => {
  const [dataType, setDataType] = useState(chartDataType.week);

  return (
    <Card
    className="my-4"
      title="Chart"
      extra={
        <Radio.Group
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          buttonStyle="solid"
        >
          {chartType.map(item => <Radio.Button value={item.value} key={item.id}>{item.title}</Radio.Button>)}
        </Radio.Group>
      }
    >
      <ResponsiveContainer width="100%" height={300}>
        {charts[dataType].component}
      </ResponsiveContainer>
    </Card>
  );
};

export default SaleChart;
