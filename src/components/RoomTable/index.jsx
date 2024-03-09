import { Table } from "antd";
import BriefInfo from "../BriefInfo";
import EditButton from "../EditButton";
import { formatCurrency } from "../../utils/formatCurrency";

function RoomTable({ data, onEdit }) {
  console.log(data);
  const columns = [
    {
      title: "Room",
      render: (_, record) => <BriefInfo col img_class={"h-20"} info={record} />,
    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-xs">{record.description}</span>
      ),
    },
    {
      title: "Furniture",
      render: (_, record) => (
        <span className="text-xs">Chair x 3, Sofa x 1</span>
      ),
    },
    {
      title: "Total",
      render: (_, record) => (
        <span className="text-xs font-semibold">{formatCurrency(1000000)}</span>
      ),
    },
    {
      title: "Actions",
      render: (_, record) => <EditButton onClick={() => onEdit(data)} />,
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

export default RoomTable;
