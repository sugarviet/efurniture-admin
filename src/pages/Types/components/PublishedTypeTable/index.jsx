import { Table, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { withFetchData } from "@hocs/withFetchData";
import { get_published_type } from "../../../../api/typesApi";
import Proptypes from "prop-types";

const PublishedTypeTable = ({ data }) => {
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
      render: (item) => (
        <Space className="flex gap-4">
          <Link to={`/category/${item._id}`}>
            <Button danger>Disable</Button>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <p className="text-xl font-bold">Published Type</p>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

PublishedTypeTable.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(PublishedTypeTable, get_published_type);
