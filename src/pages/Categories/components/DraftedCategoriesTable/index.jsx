
import { Table, Button, Space } from "antd";
import { withFetchData } from "@hocs/withFetchData";
import { get_draft_category } from "@api/categoryApi";
import Proptypes from "prop-types";

const DraftedCategoriesTable = ({data}) => {
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
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
DraftedCategoriesTable.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(DraftedCategoriesTable, get_draft_category);
