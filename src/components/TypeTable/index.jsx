import { Space, Table } from "antd";
import {
  draft_types_admin,
  draft_types_staff,
  get_draft_type,
  get_published_type,
  publish_types_admin,
  publish_types_staff,
} from "../../api/typesApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import PropTypes from "prop-types";
import ChangeStatusButton from "../ChangeStatusButton";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
const TypeTable = ({ data, onEdit, published }) => {
  const admin = isAdmin();
  console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn();

  const STAFF_COLUMNS = [
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
    !admin &&
    {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          {!published ? (
            <ChangeStatusButton
              url={publish_types_staff(record.slug)}
              resetPublishkey={get_published_type()}
              resetDraftKey={get_draft_type()}
              type="types"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : ( 

            
            <ChangeStatusButton
              url={draft_types_staff(record.slug)}
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
  ].filter(Boolean)

  const ADMIN_COLUMNS = [
    ...STAFF_COLUMNS,
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
      columns={admin ? ADMIN_COLUMNS : STAFF_COLUMNS}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
    />
  );
};

TypeTable.propTypes = {
  data: PropTypes.array,
};

export default TypeTable;
