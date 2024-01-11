import { Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";
import usePartners from "./hooks/usePartners";
import ExcelButton from "@components/ExcelButton";

const Partners = () => {
  const { partnerData, isLoading } = usePartners();
  const { getColumnSearchProps } = useSearchTableColumn();

  if (isLoading) {
    return <Loading />;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actions",
      key: "actions",
      width: "20%",
      render: (text, record) => (
        <Link to={`/partner/${record.id}`}>
          <Button type="link">View Details</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Partner management</h1>

      <div className="float-right">
        <ExcelButton data={partnerData} />
      </div>

      <Table
        columns={columns}
        dataSource={partnerData}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};
export default Partners;
