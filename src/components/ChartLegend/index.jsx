import { classNames } from "../../utils/classNames";
import PropTypes from "prop-types";

function formatString(inputString) {
  return inputString.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function ChartLegend({ color, title, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          style={{ backgroundColor: color }}
          className={classNames("w-6 h-3 rounded-sm mr-2")}
        ></div>
        <span className="capitalize">{formatString(title)}</span>
      </div>
      <span>{value} %</span>
    </div>
  );
}

export default ChartLegend;

ChartLegend.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};

ChartLegend.defaultProps = {
  color: "#cccccc",
  title: "ChartLegend",
  value: 5173,
};
