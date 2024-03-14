import { Button, Space, Table } from "antd";
import EditButton from "../EditButton";
import useNotification from "../../hooks/useNotification";
import { useUpdate } from "../../hooks/api-hooks";
import {
  draft_types_admin,
  get_draft_type,
  get_published_type,
  publish_types_admin,
} from "../../api/typesApi";
import { isAdmin } from "../../utils/getCurrentUserRole";

const PublishedButton = ({ type }) => {
  const { success_message, error_message } = useNotification();
  const { mutate: publishedTypes } = useUpdate(
    publish_types_admin(type),
    undefined,
    () => {
      success_message("types", "publish");
    },
    () => {
      error_message("types", "publish");
    },
    get_published_type()
  );

  return (
    <Button
      onClick={() => {
        publishedTypes({});
      }}
    >
      Publish
    </Button>
  );
};

const DraftedButton = ({ type }) => {
  const { success_message, error_message } = useNotification();
  const { mutate: draftedTypes } = useUpdate(
    draft_types_admin(type),
    undefined,
    () => {
      success_message("types", "draft");
    },
    () => {
      error_message("types", "draft");
    },
    get_draft_type()
  );

  return <Button onClick={() => draftedTypes({})}>Draft</Button>;
};

const TypeTable = ({ data, onEdit, published }) => {
    const admin = isAdmin();

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
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
        <EditButton onClick={() => onEdit(record)} />
        {admin && !published ? (
          <PublishedButton type={record.slug}/>
        ) : null}
        {published ? (
          <DraftedButton type={record.slug}  />
        ) : null}
      </Space>
      ),
    },
  ];
  return (
    <Table
      rowKey="_id"
      dataSource={data}
      columns={columns}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
    />
  );
};

export default TypeTable;
