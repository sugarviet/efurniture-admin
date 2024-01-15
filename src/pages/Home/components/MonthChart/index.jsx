import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

  const data = [
    { name: "Day 1", value: 200 },
    { name: "Day 2", value: 200 },
    { name: "Day 3", value: 300 },
    { name: "Day 4", value: 400 },
    { name: "Day 5", value: 200 },
    { name: "Day 6", value: 300 },
  ];
const MonthChart = () => {

  return (
    <div>
         <LineChart
          width={1200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        
        </LineChart>
    </div>
  )
}

export default MonthChart