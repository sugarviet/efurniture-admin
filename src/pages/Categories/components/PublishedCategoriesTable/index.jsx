import Loading from "@components/Loading";
import { useGetAllTypes } from "@services/Types/services";
import { Table, Button, Space } from "antd";
import { Link } from "react-router-dom";

const PublishedCategoriesTable = () => {
  const { data, isLoading } = useGetAllTypes();
  if (isLoading) return <Loading />;
  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (item) => (
        <Space className="flex gap-4">
          <Link to={`/category/${item._id}`}>
           
            <Button danger>
              Disable
            </Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <p className="text-xl font-bold">Published Type</p>
      <Table dataSource={data.metaData} columns={columns} />
    </div>
  );
};

export default PublishedCategoriesTable;
