import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import LinkItem from "../LinkItem";
const ProductTable = ({ data, onEdit }) => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text) => <LinkItem to="/">{text}</LinkItem>,
    },
    {
      title: "Image",
      dataIndex: "thumbs",
      key: "thumbs",
      render: (text, record) => (
        <img src={record.thumbs[0]} alt={record.name} width="100" />
      ),
    },
    {
      title: "Price",
      dataIndex: "regular_price",
      key: "regular_price",
      render: (text) => (
        <span className="text-xs font-semibold">{formatCurrency(text)}</span>
      ),
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: () => (
        <Space className="flex gap-4">
          <EditButton onClick={() => onEdit(data)} />
          <Button danger>Disable</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={data.data}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func,
};

export default ProductTable;
