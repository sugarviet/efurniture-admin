import { Select } from "antd";
import dayjs from "dayjs";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { usePost } from "@hooks/api-hooks";
import { get_revenue_by_range_date } from "@api/revenueApi";

const formatData = (data) => {
  return data.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }),
    profit: item.profit
  }));
};


const generateDateRange = () => {
  const options = [];
  const today = dayjs();

  for (let i = 0; i < 12; i++) {
    const startDate = today.clone().startOf("month").subtract(i, "month");
    const endDate = today.clone().endOf("month").subtract(i, "month");
    const label = startDate.format("MMM DD") + " - " + endDate.format("DD, YYYY");
    const value = {
      start: startDate.format("YYYY-MM-DD"),
      end: endDate.format("YYYY-MM-DD")
    };
    options.push({ label, value });
  }

  return options;
};

const TotalSellByMonth = () => {
  const fakeData = [
    {date: '2024-03-06T00:00:00.000Z', profit: 10},
    {date: '2024-03-07T00:00:00.000Z', profit: 550},
    {date: '2024-03-08T00:00:00.000Z', profit: 450},
    {date: '2024-03-09T00:00:00.000Z', profit: 450},
    {date: '2024-03-10T00:00:00.000Z', profit: 540},
    {date: '2024-03-11T00:00:00.000Z', profit: 450},
    {date: '2024-03-12T00:00:00.000Z', profit: 940},
    {date: '2024-03-13T00:00:00.000Z', profit: 210},
    {date: '2024-03-14T00:00:00.000Z', profit: 110},
    {date: '2024-03-15T00:00:00.000Z', profit: 130},

  ]
  
  const options = generateDateRange();
  const {mutate: getRevenue, data: listRevenue} = usePost(get_revenue_by_range_date())
  
  console.log(listRevenue)
  const formattedFakeData = formatData(fakeData);
  console.log(formattedFakeData);

  const selectDateRange = options.map(option => ({
    label: option.label,
    value: `${option.value.start},${option.value.end}`
  }))

  const handleChangeRangeDate = (values) => {
    console.log(values);
    const getDate = values.split(',')
    getRevenue({
      startDay: getDate[0],
      endDay: getDate[1]
    })

  }

  return (
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
            value={selectDateRange[0].value}
            options={selectDateRange}
            onChange={handleChangeRangeDate}
          />
        </div>
      </div>

      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={formattedFakeData}
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
  );
};

export default TotalSellByMonth;
