import { List } from "antd";
import Proptypes from "prop-types";

const VerticalList = ({ data, dataItem }) => {
  return (
    <div className="w-full">
      <List dataSource={data} renderItem={(comment) => dataItem(comment)} />
    </div>
  );
};

VerticalList.propTypes = {
  data: Proptypes.array,
  dataItem: Proptypes.func,
};

VerticalList.defaultProps = {
  data: [],
  dataItem: null
};

export default VerticalList;
