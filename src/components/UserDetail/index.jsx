import { Descriptions, Tag } from "antd";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import PropTypes from "prop-types";

const STATUS = {
  1: {
    title: "Active",
    color: "green",
  },
  2: {
    title: "Inactive",
    color: "red",
  },
  0: {
    title: "Inactive",
    color: "red",
  },
};

const UserDetail = ({ data }) => {
  console.log(data);
  return (
    <div>
      <span className="font-bold text-lg uppercase">### Customer</span>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="First Name">
          {data.first_name}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {data.last_name}
        </Descriptions.Item>
        <Descriptions.Item label="Username">{data.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={STATUS[data.status].color}>
            <span className="font-bold">{STATUS[data.status].title}</span>
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Created at">
          {formatDateByDateAndTime(data.createdAt)}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

UserDetail.propTypes = {
  data: PropTypes.object,
};
export default UserDetail;
