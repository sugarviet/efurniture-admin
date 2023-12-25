import { useState } from 'react';
import { Table, Button, Space } from 'antd';
import { useSearchTableColumn } from '../../hooks/useSearchTableColumn';


const Vouchers = () => {
  const { getColumnSearchProps } = useSearchTableColumn();

  const [vouchers] = useState([
    {
      id: 1,
      name: 'Summer Sale',
      quantity: 100,
      products: ['Product A', 'Product B'],
      discount: 15,
      expiryDate: '2023-08-31',
    },
    {
      id: 2,
      name: 'Back to School',
      quantity: 50,
      products: ['Product C'],
      discount: 10,
      expiryDate: '2023-09-15',
    },
    // Add more vouchers as needed
  ]);


  const columns = [
    {
      title: 'Voucher Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name')
    },
    {
      title: 'Number of Vouchers',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      render: (products) => products.join(', '),
    },
    {
      title: '% Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
            <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];


  return (
    <div>
      <Table dataSource={vouchers} columns={columns} />
    </div>
  );
};

export default Vouchers;
