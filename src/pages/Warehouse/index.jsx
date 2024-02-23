import { Table } from 'antd';
import { useGetWarehouse } from '../../services/Warehouse/services';
import Loading from '@components/Loading';

const Warehouse = () => {
  const {data, isLoading} = useGetWarehouse();

  if(isLoading){
    return <Loading />
  }

  const columns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    }
  ];

  return (
    <div>
      <h2>Warehouse</h2>
      <Table rowKey="_id" columns={columns} dataSource={data} />
    </div>
  );
};

export default Warehouse;
