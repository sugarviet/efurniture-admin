import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import LinkItem from "../LinkItem";
const FlashSaleTable = ({ data }) => {
    console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Furniture",
      render: (text) => (
        <span className="text-xs">Chair x 3, Sofa x 1</span>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDay",
      key: "startDay",
    },
    {
      title: "End Date",
      dataIndex: "endDay",
      key: "endDay",
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: () => (
        <Space className="flex gap-4">
          <Button danger>Disable</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};

FlashSaleTable.propTypes = {
  data: PropTypes.object,
};

export default FlashSaleTable;
