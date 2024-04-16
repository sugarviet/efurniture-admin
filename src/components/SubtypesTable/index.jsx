import { Button, Space, Table } from "antd";
import EditButton from "../EditButton";
import { isAdmin } from "../../utils/getCurrentUserRole";
import {
  draft_subtypes_admin,
  draft_subtypes_staff,
  get_all_draft_subType,
  get_all_publish_subType,
  publish_subtypes_admin,
  publish_subtypes_staff,
} from "../../api/subtypeApi";
import ChangeStatusButton from "../ChangeStatusButton";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import PropTypes from "prop-types";

const SubtypesTable = ({ data, onEdit, published }) => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const admin = isAdmin();

  const STAFF_COLUMNS = [
    {
      title: "Thumb",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img
          src={record.thumb}
          alt={record.name}
          style={{ width: 100, height: 100, objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Type Name",
      dataIndex: "slug",
      key: "slug",
      render: (text) => <span className="text-base">{text}</span>,
      ...getColumnSearchProps("slug"),
    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-base">{record.description}</span>
      ),
    },
    !admin && {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          {!published ? (
            <ChangeStatusButton
              url={publish_subtypes_staff(record.typeSlug, record.slug)}
              resetPublishkey={get_all_publish_subType()}
              resetDraftKey={get_all_draft_subType()}
              type="types"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : (
            <ChangeStatusButton
              url={draft_subtypes_staff(record.typeSlug, record.slug)}
              resetPublishkey={get_all_publish_subType()}
              resetDraftKey={get_all_draft_subType()}
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
  ].filter(Boolean);

  const ADMIN_COLUMNS = [
    ...STAFF_COLUMNS,
    {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          {admin && !published ? (
            <ChangeStatusButton
              url={publish_subtypes_admin(record.typeSlug, record.slug)}
              resetPublishkey={get_all_publish_subType()}
              resetDraftKey={get_all_draft_subType()}
              type="types"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : (
            admin && (
              <ChangeStatusButton
                url={draft_subtypes_admin(record.typeSlug, record.slug)}
                resetPublishkey={get_all_publish_subType()}
                resetDraftKey={get_all_draft_subType()}
                type="types"
                action="draft"
                published={published}
              >
                Draft
              </ChangeStatusButton>
            )
          )}
        </Space>
      ),
    },
  ];
  return (
    <Table
      rowKey="_id"
      dataSource={data}
      columns={admin ? ADMIN_COLUMNS : STAFF_COLUMNS}
      pagination={{
        pageSize: 8,
        hideOnSinglePage: true,
      }}
    />
  );
};

SubtypesTable.propTypes = {
  data: PropTypes.array,
  onEdit: PropTypes.func,
  published: PropTypes.bool,
};

export default SubtypesTable;
