import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";
import Loading from "@components/Loading";

import { pathSystem } from "../../../../router";

import urlcat from "urlcat";
import { useGetAllDraftedProducts } from "@services/Products/services";
import { isAdmin } from "../../../../utils/getCurrentUserRole";
const DrafedProductTable = () => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const { data, isLoading } = useGetAllDraftedProducts(true);
  const admin = isAdmin();
  if (isLoading) return <Loading />;
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Link
          to={urlcat(pathSystem.productDetail, {
            id: record._id,
          })}
          className="link"
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img src={record.thumb} alt={record.name} width="100" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: () => (
        <Space className="flex gap-4">
          {admin ? <Button type="primary">Published</Button> : null}
          <Button>Edit</Button>
          <Button danger>Disable</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <p className="text-xl font-bold">Drafted Product</p>
      <Table
        rowKey="_id"
        dataSource={data?.metaData}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};

export default DrafedProductTable;
