import { Space, Table } from "antd";
import EditButton from "../EditButton";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { draft_subtypes_admin, get_all_draft_subType, get_all_publish_subType, publish_subtypes_admin } from "../../api/subtypeApi";
import ChangeStatusButton from "../ChangeStatusButton";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
const SubtypesTable = ({ data, onEdit, published }) => {
  const { getColumnSearchProps } = useSearchTableColumn();

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
      ...getColumnSearchProps("slug"),

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
            <ChangeStatusButton
              url={publish_subtypes_admin(record.type.name, record.slug)}
              resetPublishkey={get_all_publish_subType()}
              resetDraftKey={get_all_draft_subType()}
              type="types"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : ( 

            admin &&
            <ChangeStatusButton
              url={draft_subtypes_admin(record.type.name, record.slug)}
              resetPublishkey={get_all_publish_subType()}
              resetDraftKey={get_all_draft_subType()}
              type="types"
              action="draft"
            >
              Draft
            </ChangeStatusButton>
          )}
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
