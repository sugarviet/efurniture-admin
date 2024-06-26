import { Table, Button, Space, Tag } from "antd";
import { withFetchData } from "../../hocs/withFetchData";
import {
  get_all_delivery_trip_pending_staff,
  get_all_delivery_trip_staff,
} from "../../api/deliveryTripApi";
import AppModal from "../AppModal";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import DetailButton from "../DetailButton";
import ConfirmDeliveryButton from "../ConfirmDeliveryButton";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import TripDetail from "../TripDetail";
import PropTypes from "prop-types";

const DELIVERY_STATUS = {
  0: {
    name: "Pick up packages",
    color: "processing",
  },
  1: {
    name: "Shipping",
    color: "warning",
  },
  2: {
    name: "Return To Warehouse",
    color: "warning",
  },
  3: {
    name: "Done",
    color: "green",
  },
};

const DeliveryTripTable = ({ data }) => {
  console.log(data)
  const { getColumnSearchProps } = useSearchTableColumn();
  const columns = [
    {
      title: "Trip ID",
      dataIndex: "_id",
      key: "_id",
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
      render: (orders) => orders.length,
    },
    {
      title: "Shipper",

      render: (_, record) => {
        return (
          <span className="font-bold">
            {record.account_id.first_name} {record.account_id.last_name}
          </span>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={DELIVERY_STATUS[status].color}>
          <span className="font-bold">{DELIVERY_STATUS[status].name}</span>
        </Tag>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => <span>{formatDateByDateAndTime(createdAt)}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <DetailButton modalWidth={1100}>
            <TripDetail data={record.orders} />
          </DetailButton>
          {/* <ConfirmDeliveryButton deliveryId={record._id} />
          <RejectButton id={record._id} /> */}
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};
DeliveryTripTable.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(DeliveryTripTable, get_all_delivery_trip_staff);
