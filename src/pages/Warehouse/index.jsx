import { Table } from 'antd';

const Warehouse = () => {
  const metaData = [
    {
      _id: "65d60aaf49ac442d83eb1b88",
      product_id: "65d5b8972f22974386122e64",
      location: "Quận 2",
      stock: 4,
      createdAt: "2024-02-21T14:37:35.625Z",
      updatedAt: "2024-02-21T14:38:16.582Z",
      __v: 0
    },
    {
      _id: "65d60abb49ac442d83eb1b8c",
      product_id: "65d5b8a12f22974386122e6d",
      location: "Quận 9",
      stock: 0,
      createdAt: "2024-02-21T14:37:47.249Z",
      updatedAt: "2024-02-21T14:38:16.577Z",
      __v: 0
    }
  ];

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
      <Table columns={columns} dataSource={metaData} />
    </div>
  );
};

export default Warehouse;
