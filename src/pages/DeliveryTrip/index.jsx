import TableCard from '../../components/TableCard'
import DeliveryTripTable from '../../components/DeliveryTripTable'
import RequestOrderTable from '../../components/RequestOrderTable'

const DeliveryTrip = () => {
  return (
    <main>
      <TableCard label="Delivery Trip">
        <DeliveryTripTable />
      </TableCard>

      <TableCard label="Order request">
        <RequestOrderTable />
      </TableCard>
    </main>
  )
}

export default DeliveryTrip