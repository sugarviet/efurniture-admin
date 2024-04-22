import { useState } from "react";
import AppModal from "@components/AppModal";
import OrderDetail from "./components/OrderDetail";

import OrderTable from "../../components/OrderTable";
import { withFetchData } from "../../hocs/withFetchData";
import { get_order_by_type_api } from "../../api/orderApi";
import TableCard from "../../components/TableCard";

const AllOrderTable = withFetchData(OrderTable, get_order_by_type_api);

const Orders = () => {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleToggleDetailModal = (id) => {
    setIsModalDetailOpen(!isModalDetailOpen);
    setSelectedOrderId(id);
  };

  return (
    <main>
      <TableCard label="Order Management">
        <AllOrderTable onDetail={handleToggleDetailModal} />
      </TableCard>

      <AppModal isOpen={isModalDetailOpen} setIsOpen={setIsModalDetailOpen}>
        <OrderDetail id={selectedOrderId} />
      </AppModal>
    </main>
  );
};

export default Orders;
