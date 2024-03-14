import { Button, Space, Table } from "antd";
import EditButton from "../EditButton";
import { isAdmin } from "../../utils/getCurrentUserRole";
import useNotification from "antd/es/notification/useNotification";
import { useUpdate } from "../../hooks/api-hooks";
import { draft_subtypes_admin, get_all_draft_subType, get_all_publish_subType, publish_subtypes_admin } from "../../api/subtypeApi";

const PublishedButton = ({ type, slug }) => {
    const { success_message, error_message } = useNotification();
    const { mutate: publishedSubtypes } = useUpdate(
        publish_subtypes_admin(type, slug),
      undefined,
      () => {
        success_message("subtypes", "publish");
      },
      () => {
        error_message("subtypes", "publish");
      },
      get_all_publish_subType()
    );
  
    return (
      <Button
        onClick={() => {
          publishedSubtypes({});
        }}
      >
        Publish
      </Button>
    );
  };
  
  const DraftedButton = ({ type, slug }) => {
    const { success_message, error_message } = useNotification();
    const { mutate: draftSubtypes } = useUpdate(
        draft_subtypes_admin(type, slug),
      undefined,
      () => {
        success_message("subtypes", "draft");
      },
      () => {
        error_message("subtypes", "draft");
      },
      get_all_draft_subType()
    );
  
    return <Button onClick={() => draftSubtypes({})}>Draft</Button>;
  };

const SubtypesTable = ({ data, onEdit, published }) => {
    console.log(data);
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
      dataIndex: "slug",
      key: "slug",
    },
    {
        title: "Description",
        render: (_, record) => (
          <span className="text-[#959798] text-xs">{record.description}</span>
        ),
      },
    {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
        <EditButton onClick={() => onEdit(record)} />
        {admin && !published ? (
          <PublishedButton type={record.type} slug={record.slug} />
        ) : null}
        {published ? (
          <DraftedButton type={record.type} slug={record.slug} />
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
        pageSize: 8,
        hideOnSinglePage: true,
      }}
    />
  );
};

export default SubtypesTable;
