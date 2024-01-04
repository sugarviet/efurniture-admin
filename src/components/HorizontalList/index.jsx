import { List } from "antd";
import Proptypes from "prop-types";

const HorizontalList = ({ cols, gutters , data, dataItem }) => {
  return (
    <div className="w-full mx-auto">
        <List
          grid={{
            gutter: gutters,
            column: cols,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item >
            {dataItem(item)}
            </List.Item>
          )}
        />
    </div>
  );
};

HorizontalList.propTypes = {
  cols: Proptypes.number,
  data: Proptypes.array,
  dataItem: Proptypes.func.isRequired,
  gutters: Proptypes.number,
};

HorizontalList.defaultProps = {
  cols: 3,
  data: [],
  gutters: 16
};

export default HorizontalList;
