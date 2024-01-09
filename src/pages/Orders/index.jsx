import { useState } from "react";
import { Table, Button, Space } from "antd";
import AppModal from "@components/AppModal";
import OrderDetail from "./components/OrderDetail";
import useGetOrderStatus from "./hooks/useGetOrderStatus";


const Orders = () => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const {handleGetOrderStatus} = useGetOrderStatus();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [orders] = useState([
    {
      key: 1,
      id: 1,
      product: "Product 1",
      user: "User 1",
      address: "Address 1",
      method: "Credit Card",
      status: "pending",
    },
    {
      key: 2,
      id: 2,
      product: "Product 2",
      user: "User 2",
      address: "Address 2",
      method: "PayPal",
      status: "shipping",
    },
  ]);
  const handleToggleDetailModal = (id) => {
    setIsModalDetailOpen(!isModalDetailOpen);
    setSelectedOrderId(id);
  };
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Payment Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => handleGetOrderStatus(text),
      filters: [
        {
          text: 'Pending',
          value: 'pending',
        },
        {
          text: 'Shipping',
          value: 'shipping',
        },
        {
          text: 'Done',
          value: 'done',
        }
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="primary text-white"
            onClick={() => handleToggleDetailModal(record.id)}
          >
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold">Orders managment</h1>
      <Table dataSource={orders} columns={columns} />

      <AppModal isOpen={isModalDetailOpen} setIsOpen={setIsModalDetailOpen}>
        <OrderDetail id={selectedOrderId} />
      </AppModal>
    </main>
  );
};

export default Orders;
