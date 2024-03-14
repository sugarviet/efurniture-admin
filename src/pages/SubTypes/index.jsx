import { withFetchData } from "../../hocs/withFetchData";
import TableCard from "../../components/TableCard";
import SubtypesTable from "../../components/SubtypesTable";
import { get_all_draft_subType, get_all_subType } from "../../api/subtypeApi";


const PublishSubtypesTable = withFetchData(SubtypesTable, get_all_subType)
const DraftSubtypesTable = withFetchData(SubtypesTable, get_all_draft_subType)
const SubTypes = () => {
  return (
    <main>
       <TableCard label="Public SubTypes">
        <PublishSubtypesTable published />
      </TableCard>
      <TableCard label="Draft SubTypes">
        <DraftSubtypesTable  />
      </TableCard>
    </main>
  )
}

export default SubTypes