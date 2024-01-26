import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer
  } from "recharts";
  import { Select } from "antd";
  
  
  const generateDateRange = (startDate, endDate) => {
    const dateRange = [];
    const currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      const formattedDate = currentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });
      dateRange.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dateRange;
  };
  
  const startDate = new Date("2024-05-01");
  const endDate = new Date("2024-05-30");
  const dateRange = generateDateRange(startDate, endDate);
  
  const data = dateRange.map((date) => ({
    name: date,
    value: Math.floor(Math.random() * 500) + 100, 
  }));

  
  const TotalSellByMonth = () => {
    
    return (
      <section className="w-full">
        <div className="flex items-end justify-between my-4">
          <div>
            <h1 className="text-2xl font-bold">Total Sell</h1>
            <p className="text-gray-500">Payment received across all channels</p>
          </div>
  
          <div>
            <Select
              defaultValue="mar"
              style={{
                width: 160,
              }}
              options={[
                {
                  label: "Mar 1-31, 2023",
                  value: "mar",
                },
                {
                  label: "April 1-31, 2023",
                  value: "april",
                },
                {
                    label: "May 1-31, 2023",
                  value: "may",
                },
              ]}
            />
          </div>
        </div>

        <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
          dataKey="name"

        />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </ResponsiveContainer>
      </section>
    );
  };

  export default TotalSellByMonth;
  