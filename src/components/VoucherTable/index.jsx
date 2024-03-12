import { Table, Tag } from "antd";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";
import EditButton from "../EditButton";

function VoucherTable({ data }) {
  console.log(data);
  const columns = [
    {
      title: "Name",
      render: (_, record) => <span>{record.name}</span>,
    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-xs line-clamp-3">
          {record.description}
        </span>
      ),
    },
    {
      title: "Type",
      render: (_, record) => {
        const { type } = record;
        return (
          <Tag
            color={type === "percentage" ? "volcano" : "blue"}
            className="text-xs py-1"
          >
            {type}
          </Tag>
        );
      },
    },
    {
      title: "Value",
      render: (_, record) => {
        return <span className="text-xs font-semibold">{record.value}</span>;
      },
    },
    {
      title: "MaxIU",
      className: "text-center",
      render: (_, record) => {
        return <span className="text-xs">{record.maximum_use}</span>;
      },
    },
    {
      title: "MaxIU/P",
      className: "text-center",
      render: (_, record) => {
        return <span className="text-xs">{record.maximum_use_per_user}</span>;
      },
    },
    {
      title: "MinOV",
      render: (_, record) => {
        return (
          <span className="text-xs">
            {formatCurrency(record.minimum_order_value)}
          </span>
        );
      },
    },
    {
      title: "Start date",
      render: (_, record) => (
        <span className="text-xs">
          {formatDateByDateAndTime(record.start_date)}
        </span>
      ),
    },
    {
      title: "End date",
      render: (_, record) => (
        <span className="text-xs">
          {formatDateByDateAndTime(record.end_date)}
        </span>
      ),
    },
    {
      title: "Actions",
      render: (_, record) => <EditButton />,
    },
  ];

  return (
    <Table
      rowKey="_id"
      dataSource={data}
      columns={columns}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
    />
  );
}

export default VoucherTable;