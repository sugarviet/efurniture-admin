import { Space, Table } from "antd";
import BriefInfo from "../BriefInfo";
import { isAdmin } from "../../utils/getCurrentUserRole";
import ChangeStatusButton from "../ChangeStatusButton";
import {
  get_draft_rooms_api,
  get_published_rooms_api,
  get_to_draft_room_api,
  get_to_publish_room_staff_api,
  get_to_publish_room_api,
  remove_draft_room,
  get_to_draft_room_staff_api,
  remove_draft_room_staff,
} from "../../api/roomApi";
import PropTypes from "prop-types";
import EditButton from "../EditButton";
import EditRoomForm from "../EditRoomForm";
import DeleteButton from "../DeleteButton";


function RoomTable({ data, published }) {
  const admin = isAdmin();
  console.log(data);
  const STAFF_COLUMNS = [
    {
      title: "Room",
      width: '15%',
      render: (_, record) => (
        <BriefInfo col img_class="h-20 w-16" info={record} published={published} />
      ),
    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-base line-clamp-6">
          {record.description}
        </span>
      ),
    },
    {
      title: "Furniture",
      width: '15%',
      render: (_, record) => (
        <div>
          {record.products.map(product => (
            <span key={product._id} className="text-base block w-full">{product.product.name} x {product.quantity}</span>
          ))}
        </div>
      ),
    },
    (!admin) && {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          <EditButton>
              <EditRoomForm data={record} />
            </EditButton>
              
            {!published ? (
              <ChangeStatusButton
                url={get_to_publish_room_staff_api(record._id)}
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
                url={get_to_draft_room_staff_api(record._id)}
                resetPublishkey={get_published_rooms_api()}
                resetDraftKey={get_draft_rooms_api()}
                type="rooms"
                action="draft"
                published={published}
              >
                Draft
              </ChangeStatusButton>
            )}
            {!published ? (
              <DeleteButton url={remove_draft_room_staff()} notiType="room" notiAction="delete" refreshKey={get_draft_rooms_api()} id={record.slug} />
            ) : null
            }
        </Space>
      ),
    },
    
  ].filter(Boolean);

  const ADMIN_COLUMNS = [
    ...STAFF_COLUMNS,
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Space className="flex gap-4">
           
            {!published ? (
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
            )}
            {admin && !published ? (
              <DeleteButton url={remove_draft_room()} notiType="room" notiAction="delete" refreshKey={get_draft_rooms_api()} id={record.slug} />
            ) : null
            }
          </Space>
        )
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
