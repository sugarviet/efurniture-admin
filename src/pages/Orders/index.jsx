import { useState } from "react";
import { Table, Button, Space } from "antd";
import AppModal from "@components/AppModal";
import Loading from "@components/Loading";

import OrderDetail from "./components/OrderDetail";
import useGetOrderStatus from "./hooks/useGetOrderStatus";

import useGetOrders from "./hooks/useGetOrders";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import urlcat from "urlcat";
import { pathSystem } from "../../router";

const Orders = () => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const { handleGetOrderStatus } = useGetOrderStatus();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const { orders, isLoading } = useGetOrders();

  if (isLoading) {
    return <Loading />;
  }
  const handleToggleDetailModal = (id) => {
    setIsModalDetailOpen(!isModalDetailOpen);
    setSelectedOrderId(id);
  };
  const columns = [
    {
      title: "Order",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <Link to={urlcat(pathSystem.orderDetail, { id: text })} className="link">#{text}</Link>
      ),
    },
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
          text: "Pending",
          value: "pending",
        },
        {
          text: "Shipping",
          value: "shipping",
        },
        {
          text: "Done",
          value: "done",
        },
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
      <PageTitle title="Orders managment" />
      <Table
        dataSource={orders}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />

      <AppModal isOpen={isModalDetailOpen} setIsOpen={setIsModalDetailOpen}>
        <OrderDetail id={selectedOrderId} />
      </AppModal>
    </main>
  );
};

export default Orders;
