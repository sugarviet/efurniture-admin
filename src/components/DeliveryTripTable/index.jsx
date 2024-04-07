import { Table, Button, Space } from 'antd';
import { withFetchData } from '../../hocs/withFetchData';
import { get_all_delivery_trip_pending_staff } from '../../api/deliveryTripApi';
import AppModal from '../AppModal';
import DetailButton from '../DetailButton';
import ConfirmDeliveryButton from '../ConfirmDeliveryButton';
import { formatDateByDateAndTime } from '../../utils/formatDate';
import TripDetail from '../TripDetail';

const DeliveryTripTable = ({data}) => {
  console.log(data);
  const columns = [
    {
      title: 'Trip ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
      render: (orders) => orders.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (status === 0 ? 'Pending' : 'Accepted'),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => <span>{formatDateByDateAndTime(createdAt)}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
         
          <DetailButton>
            <TripDetail data={record.orders}/>
          </DetailButton>
          <ConfirmDeliveryButton deliveryId={record._id}/>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default withFetchData(DeliveryTripTable, get_all_delivery_trip_pending_staff);