import { Table } from "antd";
import PropTypes from "prop-types";
import LinkItem from "../LinkItem";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
const WarehouseTable = ({ data }) => {
  const { getColumnSearchProps } = useSearchTableColumn();

  const columns = [
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text, record) => (
        <LinkItem to={`/warehouse/${record._id}`}>{text}</LinkItem>
      ),

    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      ...getColumnSearchProps("district"),

    },
    {
      title: "Ward",
      dataIndex: "ward",
      key: "ward",
      ...getColumnSearchProps("ward"),

    },
  ];
  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={data}
      pagination={{ hideOnSinglePage: true }}
    />
  );
};

WarehouseTable.propTypes = {
  data: PropTypes.array,
};
export default WarehouseTable;
