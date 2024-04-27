import TableCard from '../../components/TableCard'
import DeliveryTripTable from '../../components/DeliveryTripTable'
import RequestOrderTable from '../../components/RequestOrderTable'
import OrderMap from '../../components/OrderMap'

const DeliveryTrip = () => {
  return (
    <main>
      <TableCard label="Delivery Trip">
        <DeliveryTripTable />
      </TableCard>

      <TableCard label="Order request">
        <RequestOrderTable />
      </TableCard>

      <OrderMap />
    </main>
  )
}

export default DeliveryTrip