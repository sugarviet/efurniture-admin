import { Card, Select } from "antd";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import useManageTotalSell from "../../hooks/useManageTotalSell";

const TotalSellByMonth = () => {
  const { revenueData, handleChangeRangeDate, selectOptionsDateRange } =
    useManageTotalSell()

  return (
    <Card>
    <section className="w-full">
      <div className="flex items-end justify-between my-4">
        <div>
          <h1 className="text-2xl font-bold">Total Sell</h1>
          <p className="text-gray-500">Payment received across all channels</p>
        </div>

        <div>
          <Select
            style={{
              width: 250,
            }}
            defaultValue={selectOptionsDateRange[0].value}
            options={selectOptionsDateRange}
            onChange={handleChangeRangeDate}
          />
        </div>
      </div>

      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={revenueData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>

    </Card>
  );
};

export default TotalSellByMonth;
