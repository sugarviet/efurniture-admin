import TableCard from "../../components/TableCard";
import DeliveryTripTable from "../../components/DeliveryTripTable";
import RequestOrderTable from "../../components/RequestOrderTable";
import DirectionMap from "../../components/DirectionMap";
import { useState } from "react";

const DeliveryTrip = () => {
  const [locations, setLocations] = useState([]);

  const handleSelectedOrders = (orders) => {
    const shippingAddress = orders.map((order) => {
      const { address, district, ward, province } = order.order_shipping;
      return `${address} ${ward} ${district} ${province}`;
    });

    setLocations(shippingAddress);
  };
  return (
    <main>
      <TableCard label="Delivery Trip">
        <DeliveryTripTable />
      </TableCard>

      <TableCard label="Order request">
        <RequestOrderTable onSelectOrders={handleSelectedOrders} />
      </TableCard>

      <DirectionMap className="h-96" locations={locations} />
    </main>
  );
};

export default DeliveryTrip;
