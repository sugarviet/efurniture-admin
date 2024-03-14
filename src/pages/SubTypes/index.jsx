import { withFetchData } from "../../hocs/withFetchData";
import TableCard from "../../components/TableCard";
import SubtypesTable from "../../components/SubtypesTable";
import { get_all_draft_subType, get_all_subType } from "../../api/subtypeApi";
import { isAdmin } from "../../utils/getCurrentUserRole";

const PublishSubtypesTable = withFetchData(SubtypesTable, get_all_subType);
const DraftSubtypesTable = withFetchData(SubtypesTable, get_all_draft_subType);
const SubTypes = () => {
  const admin = isAdmin();

  return (
    <main>
      <TableCard label="Public SubTypes">
        <PublishSubtypesTable published />
      </TableCard>
      {admin ? (
        <TableCard label="Draft SubTypes">
          <DraftSubtypesTable />
        </TableCard>
      ) : null}
    </main>
  );
};

export default SubTypes;
