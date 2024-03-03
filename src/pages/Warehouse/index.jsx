import { Table } from "antd";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_warehouse } from "../../api/warehouseApi";
import PropTypes from "prop-types";

const Warehouse = ({ data }) => {
  const columns = [
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <div>
      <h2>Warehouse</h2>
      <Table rowKey="_id" columns={columns} dataSource={data} />
    </div>
  );
};

Warehouse.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(Warehouse, get_all_warehouse);
