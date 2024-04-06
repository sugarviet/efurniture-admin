import { Table, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import UserBrief from "../UserBrief";
import { formatDateByDateAndTime } from "../../utils/formatDate";

export const ORDER_STATE = [
  {},
  {
    status: "pending",
    color: "warning",
  },
  {
    status: "processing",
    color: "processing",
  },
  {
    status: "shipping",
    color: "purple",
  },
  {
    status: "done",
    color: "success",
  },
  {
    status: "failed",
    color: "error",
  },
  {
    status: "cancelled",
    color: "default",
  },
];

function OrderTable({ data, onDetail }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTableChange = (pagination) => {
    setSearchParams({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  };

  const columns = [
    {
      title: "Order",
      render: (_, record) => (
        <span className="text-xs font-semibold">{record.order_code}</span>
      ),
    },
    {
      title: "Total",
      render: (_, record) => (
        <span className="text-xs">
          {formatCurrency(record.order_checkout.final_total)}
        </span>
      ),
    },
    {
      title: "Customer",
      render: (_, record) => {
        return record.guest ? (
          <span className="text-xs">Guest</span>
        ) : (
          <UserBrief />
        );
      },
    },
    {
      title: "Status",
      render: (_, record) => {
        const { status, color } = ORDER_STATE[record.order_tracking.length];
        return (
          <Tag className="text-bold uppercase" color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Payment status",
      render: (_, record) => {
        const isPaid = record.order_checkout.is_paid;
        const label = isPaid ? "paid" : "not paid";
        return (
          <Tag
            className="text-bold uppercase"
            color={isPaid ? "success" : "error"}
          >
            {label}
          </Tag>
        );
      },
    },
    {
      title: "Create at",
      render: (_, record) => {
        return (
          <span className="text-xs">
            {formatDateByDateAndTime(record.createdAt)}
          </span>
        );
      },
    },
    {
      title: "Action",
      render: (_, record) => (
        <button
          type="button"
          onClick={() => onDetail(record._id)}
          className="text-sm font-semibold text-blue-600 uppercase"
        >
          detail
        </button>
      ),
    },
  ];
  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={data.data}
      onChange={handleTableChange}
      pagination={{
        current: searchParams.get("page"),
        pageSize: searchParams.get("limit"),
        total: data.total,
      }}
    />
  );
}

export default OrderTable;
