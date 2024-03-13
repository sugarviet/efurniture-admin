import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import { isAdmin } from "@utils/getCurrentUserRole";
import { useUpdate } from "../../hooks/api-hooks";
import {
  get_published_product,
  publish_product_admin,
  draft_product_admin,
} from "../../api/productApi";
import useNotification from "@hooks/useNotification";

const PublishedButton = ({ type, slug }) => {
  const { success_message, error_message } = useNotification();
  const { mutate: publishedProduct } = useUpdate(
    publish_product_admin(type, slug),
    undefined,
    () => {
      success_message("products", "publish");
    },
    () => {
      error_message("products", "publish");
    },
    get_published_product()
  );

  return (
    <Button
      onClick={() => {
        publishedProduct({});
      }}
    >
      Publish
    </Button>
  );
};

const DraftedButton = ({ type, slug }) => {
  const { success_message, error_message } = useNotification();
  const { mutate: draftedProduct } = useUpdate(
    draft_product_admin(type, slug),
    undefined,
    () => {
      success_message("products", "draft");
    },
    () => {
      error_message("products", "draft");
    },
    get_published_product()
  );

  return <Button onClick={() => draftedProduct({})}>Draft</Button>;
};

const ProductTable = ({ data, onEdit, published }) => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const admin = isAdmin();

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
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
          <EditButton onClick={() => onEdit(record)} />
          {admin && !published ? (
            <PublishedButton type={record.type} slug={record.slug} />
          ) : null}
          {published ? (
            <DraftedButton type={record.type} slug={record.slug} />
          ) : null}
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

PublishedButton.propTypes = {
  type: PropTypes.string,
  slug: PropTypes.string,
};

DraftedButton.propTypes = {
  type: PropTypes.string,
  slug: PropTypes.string,
};

export default ProductTable;
