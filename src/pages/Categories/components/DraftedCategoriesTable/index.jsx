import Loading from "@components/Loading";
import { useGetAllDraftedTypes } from "@services/Types/services";
import { Table, Button, Space } from "antd";

const DraftedCategoriesTable = () => {
  const { data, isLoading } = useGetAllDraftedTypes(true);
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
      render: () => (
        <Space className="flex gap-4">
          <Button className="primary" type="primary">
              Published
            </Button>
          <Button danger>
              Disable
            </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <p className="text-xl font-bold">DraftedS Type</p>
      <Table dataSource={data.metaData} columns={columns} />
    </div>
  );
};

export default DraftedCategoriesTable;
