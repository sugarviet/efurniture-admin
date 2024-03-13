import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import LinkItem from "../LinkItem";
import { isAdmin } from "@utils/getCurrentUserRole";
import { usePost, useUpdate } from "../../hooks/api-hooks";
import {
  get_published_product,
  publish_product_admin,
} from "../../api/productApi";

const ProductTable = ({ data, onEdit, published }) => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const { mutate: publishedProduct } = useUpdate(
    publish_product_admin(),
    undefined,
    () => {},
    () => {},
    get_published_product()
  );
  const admin = isAdmin();

  console.log(data);

  const handlePublished = () => {};

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
      render: (text, record) => (
        <Space className="flex gap-4">
          <EditButton onClick={() => onEdit(data)} />
          {admin && !published ? (
            <Button onClick={() => handlePublished(record)}>Published</Button>
          ) : null}
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
  published: PropTypes.bool,
};

export default ProductTable;
