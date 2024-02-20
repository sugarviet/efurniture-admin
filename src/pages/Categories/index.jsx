import { Table, Button, Space } from "antd";
import { Link } from "react-router-dom";
import PageTitle from "@components/PageTitle";
import Loading from "@components/Loading";
import { useGetAllTypes } from "../../services/Types/services";
import CreatingCategory from "./components/CreatingCategory";


const Categories = () => {
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
            <Button className="primary" type="primary">
              Detail
            </Button>
            <Button className="primary" type="primary">
              Disable
            </Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between px-3 my-3">
        <PageTitle title="Category management" />
        <Button type="primary" className="primary">
          Create new category
        </Button>
      </div>
      <Table dataSource={data.metaData} columns={columns} />

      <CreatingCategory />
    </div>
  );
};

export default Categories;
