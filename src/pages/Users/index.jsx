import { Button, Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { useUser } from "./hooks/useUser";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";
import ExcelButton from "@components/ExcelButton";

const Users = () => {
  const { userData, isLoading } = useUser();
  const { getColumnSearchProps } = useSearchTableColumn();

  if (isLoading) {
    return <Loading />;
  }

  const getSorter = (dataIndex, customSorter) => {
    return {
      onFilter: (value, record) => record[dataIndex].indexOf(value) === 0,
      sorter: customSorter
        ? customSorter
        : (a, b) => a[dataIndex].length - b[dataIndex].length,
    };
  };

  const handleDisableUser = (id) => {
    console.log(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getSorter("name"),
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
        <Space>
          <Link to={`/user/${record.id}`}>
            <Button type="link">View Details</Button>
          </Link>
          <Button
            danger
            type="primary"
            onClick={() => handleDisableUser(record.id)}
          >
            Disable
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between px-3">
        <h1 className="text-3xl font-bold">User management</h1>
        <Button>Create new account</Button>
      </div>
      <div className="float-right">
        <ExcelButton data={userData} />
      </div>
      <Table columns={columns} dataSource={userData} />
    </div>
  );
};
export default Users;
