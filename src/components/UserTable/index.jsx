import { pathSystem } from "../../router";
import urlcat from "urlcat";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";

function UserTable({ data }) {
  console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTableChange = (pagination) => {
    setSearchParams({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  };

  const getSorter = (dataIndex, customSorter) => {
    return {
      onFilter: (value, record) => record[dataIndex].indexOf(value) === 0,
      sorter: customSorter
        ? customSorter
        : (a, b) => a[dataIndex].length - b[dataIndex].length,
    };
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      render: (_, record) => 
      <Link to={`/user/${record._id}`} className="underline">
      <span className="text-base">
        {record.first_name} {record.last_name}
        </span>
      </Link>
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "30%",
      ...getSorter("username"),
      ...getColumnSearchProps("username"),
      render: (text) => (
        <span className="text-base">
          {text}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      render: (text) => (
        <span className="text-base">
          {text}
        </span>
      ),
      ...getColumnSearchProps("age"),
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

export default UserTable;
