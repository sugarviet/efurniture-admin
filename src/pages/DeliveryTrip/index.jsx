import TableCard from "../../components/TableCard";
import DeliveryTripTable from "../../components/DeliveryTripTable";
import RequestOrderTable from "../../components/RequestOrderTable";
import DirectionMap from "../../components/DirectionMap";
import { useState } from "react";

const DeliveryTrip = () => {
  const [locations, setLocations] = useState([]);

  const handleSelectedOrders = (orders) => {
    console.log('orders', orders);
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

      <div id="map">
        <DirectionMap className="h-96" locations={locations} />
      </div>
    </main>
  );
};

export default DeliveryTrip;
