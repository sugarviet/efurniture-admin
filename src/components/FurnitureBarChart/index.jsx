import { useMemo } from "react";
import { BarChart, Bar, Tooltip } from "recharts";
import ChartLegend from "../ChartLegend";
import PropTypes from "prop-types";

const DATA_KEY_COLORS = ["#8884d8", "#cccccc", "#373471"];

function FurnitureBarChart({ data }) {
  const dataKeys = useMemo(() => Object.keys(data[0]), [data]);

  return (
    <section className="w-full">
      <BarChart
        className="my-12 mx-auto"
        width={160}
        height={120}
        data={data}
        barSize={6}
      >
        <Tooltip />
        {dataKeys.map((dataKey, index) => (
          <Bar
            key={dataKey}
            dataKey={dataKey}
            fill={DATA_KEY_COLORS[index]}
            stackId="totalOrders"
          />
        ))}
      </BarChart>
      {dataKeys.map((dataKey, index) => {
        const average = data.reduce(
          (acc, cur, idx, array) => (acc += cur[dataKey] / array.length),
          0
        );
        return (
          <ChartLegend
            key={dataKey}
            color={DATA_KEY_COLORS[index]}
            title={dataKey}
            value={average}
          />
        );
      })}
    </section>
  );
}

export default FurnitureBarChart;

FurnitureBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
