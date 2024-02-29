
import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";

import { withFetchData } from "@hocs/withFetchData";

import { pathSystem } from "../../../../router";
import urlcat from "urlcat";
import { get_published_product } from "../../../../api/productApi";

const PublishedProductTable = ({data}) => {
  const { getColumnSearchProps } = useSearchTableColumn();

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
              <Button>Edit</Button>
              <Button danger>Disable</Button>
            </Space>
          ),
        },
      ];
  return (
    <div>
      <p className="text-xl font-bold">Published Product</p>
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
  )
}

export default withFetchData(PublishedProductTable, get_published_product)
