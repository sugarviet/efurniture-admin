
import { Table, Button, Space } from "antd";
import { withFetchData } from "@hocs/withFetchData";
import { get_draft_type } from "@api/typesApi";
import Proptypes from "prop-types";

const DraftedTypeTable = ({data}) => {
  const columns = [
    {
      title: "Thumb",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img
          src={record.thumb}
          alt={record.name}
          style={{ width: 100, height: 100 }}
        />
      ),
    },
    {
      title: "Type Name",
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
      <p className="text-xl font-bold">Drafted Type</p>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
DraftedTypeTable.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(DraftedTypeTable, get_draft_type);
