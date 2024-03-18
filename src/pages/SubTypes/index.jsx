import { withFetchData } from "../../hocs/withFetchData";
import TableCard from "../../components/TableCard";
import SubtypesTable from "../../components/SubtypesTable";
import { get_all_draft_subType, get_all_subType } from "../../api/subtypeApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { Card } from "antd";
import CreatingSubTypesForm from "../../components/CreatingSubTypesForm";

const PublishSubtypesTable = withFetchData(SubtypesTable, get_all_subType);
const DraftSubtypesTable = withFetchData(SubtypesTable, get_all_draft_subType);
const SubTypes = () => {
  const admin = isAdmin();

  return (
    <main>
      <section className="flex gap-6">
        <div className="flex-1">
          <TableCard label="Public SubTypes">
            <PublishSubtypesTable published />
          </TableCard>
          {admin ? (
            <TableCard label="Draft SubTypes">
              <DraftSubtypesTable />
            </TableCard>
          ) : null}
        </div>

        {admin ? null : (
          <div className="w-[26rem]">
            <Card title="Create new Subtypes">
              <CreatingSubTypesForm />
            </Card>
          </div>
        )}
      </section>
    </main>
  );
};

export default SubTypes;
