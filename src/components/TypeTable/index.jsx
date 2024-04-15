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
import ChangeStatusButton from "../ChangeStatusButton";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
const TypeTable = ({ data, onEdit, published }) => {
  const admin = isAdmin();
  const { getColumnSearchProps } = useSearchTableColumn();

  const COLUMNS = [
    {
      title: "Thumb",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img
          src={record.thumb}
          alt={record.name}
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        />
      ),
    },
    {
      title: "Type Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),

    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          {!published ? (
            <ChangeStatusButton
              url={publish_types_admin(record.slug)}
              resetPublishkey={get_published_type()}
              resetDraftKey={get_draft_type()}
              type="types"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : ( 

            
            <ChangeStatusButton
              url={draft_types_admin(record.slug)}
              resetPublishkey={get_published_type()}
              resetDraftKey={get_draft_type()}
              type="types"
              action="draft"
              published={published}
            >
              Draft
            </ChangeStatusButton>
          )}
        </Space>
      ),
    },
  ]



  return (
    <Table
      rowKey="_id"
      dataSource={data}
      columns={COLUMNS}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
    />
  );
};

export default TypeTable;
