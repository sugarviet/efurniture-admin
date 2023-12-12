import { Button, Table } from "antd";
import { useSearchTableColumn } from "../../hooks/useSearchTableColumn";
import { useUser } from "./hooks/useUser";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const Users = () => {
  const { userData, isLoading } = useUser();
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
        <Link to={`/user/${record.id}`}>
          <Button type="link">View Details</Button>
        </Link>

      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={userData} />
    </div>
  );
};
export default Users;
