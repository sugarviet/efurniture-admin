import RequestOrderTable from "../../components/RequestOrderTable"
import TableCard from "../../components/TableCard"

const RequestOrder = () => {
  return (
    <main>
        <TableCard label="Request Order">
            <RequestOrderTable />

        </TableCard>
    </main>
  )
}

export default RequestOrder