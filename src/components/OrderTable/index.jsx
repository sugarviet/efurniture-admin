import { Table } from "antd";
import { withFetchData } from "../../hocs/withFetchData";
import { get_order_by_type_api } from "../../api/orderApi";

function OrderTable({ data }) {
  console.log(data);
  const columns = [
    {
      title: "Order",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <Link
          to={urlcat(pathSystem.orderDetail, { id: text })}
          className="link"
        >
          #{text}
        </Link>
      ),
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Payment Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Shipping",
          value: "shipping",
        },
        {
          text: "Done",
          value: "done",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="primary text-white"
            onClick={() => handleToggleDetailModal(record.id)}
          >
            Detail
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      dataSource={[]}
      columns={columns}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
    />
  );
}

export default withFetchData(OrderTable, get_order_by_type_api);
