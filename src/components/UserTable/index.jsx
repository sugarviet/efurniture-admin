import { pathSystem } from "../../router";
import urlcat from "urlcat";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";

function UserTable({ data }) {
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
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "30%",
      ...getSorter("username"),
      ...getColumnSearchProps("username"),
      render: (text, record) => (
        <Link
          to={urlcat(pathSystem.userDetail, {
            id: record._id,
          })}
          className="link"
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
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
