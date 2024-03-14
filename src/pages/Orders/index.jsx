import { useState } from "react";
import { Table, Button, Space } from "antd";
import AppModal from "@components/AppModal";
import OrderDetail from "./components/OrderDetail";

import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import urlcat from "urlcat";
import { pathSystem } from "../../router";
import OrderTable from "../../components/OrderTable";

const Orders = () => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleToggleDetailModal = (id) => {
    setIsModalDetailOpen(!isModalDetailOpen);
    setSelectedOrderId(id);
  };

  return (
    <main>
      <PageTitle title="Orders managment" />
      <OrderTable />

      <AppModal isOpen={isModalDetailOpen} setIsOpen={setIsModalDetailOpen}>
        <OrderDetail id={selectedOrderId} />
      </AppModal>
    </main>
  );
};

export default Orders;
