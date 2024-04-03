import { Table } from "antd";
import BriefInfo from "../BriefInfo";
import { formatCurrency } from "../../utils/formatCurrency";
import { isAdmin } from "../../utils/getCurrentUserRole";
import ChangeStatusButton from "../ChangeStatusButton";
import {
  get_draft_rooms_api,
  get_published_rooms_api,
  get_to_draft_room_api,
  get_to_publish_room_api,
} from "../../api/roomApi";
import PropTypes from "prop-types";


function RoomTable({ data, published }) {
  const admin = isAdmin();
  console.log(data);
  const STAFF_COLUMNS = [
    {
      title: "Room",
      render: (_, record) => (
        <BriefInfo col img_class="h-20 w-16" info={record} />
      ),
    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-xs line-clamp-6">
          {record.description}
        </span>
      ),
    },
    {
      title: "Furniture",
      render: (_, record) => (
        <span className="text-xs">Chair x 3, Sofa x 1</span>
      ),
    },
    {
      title: "Total",
      render: (_, record) => (
        <span className="text-xs font-semibold">{formatCurrency(1000000)}</span>
      ),
    },
  ];

  const ADMIN_COLUMNS = [
    ...STAFF_COLUMNS,
    {
      title: "Actions",
      render: (_, record) => {
        return !published ? (
          <ChangeStatusButton
            url={get_to_publish_room_api(record._id)}
            resetPublishkey={get_published_rooms_api()}
            resetDraftKey={get_draft_rooms_api()}
            type="rooms"
            action="publish"
            published={published}
          >
            Publish
          </ChangeStatusButton>
        ) : (
          <ChangeStatusButton
            url={get_to_draft_room_api(record._id)}
            resetPublishkey={get_published_rooms_api()}
            resetDraftKey={get_draft_rooms_api()}
            type="rooms"
            action="draft"
            published={published}
          >
            Draft
          </ChangeStatusButton>
        );
      },
    },
  ];

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
}


RoomTable.propTypes = {
  data: PropTypes.array,
  published: PropTypes.bool,
};

export default RoomTable;
