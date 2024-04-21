import { withFetchData } from "../../hocs/withFetchData";
import TableCard from "../../components/TableCard";
import SubtypesTable from "../../components/SubtypesTable";
import { get_all_draft_subType, get_all_publish_subType, get_all_subType } from "../../api/subtypeApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { Card } from "antd";
import CreatingSubTypesForm from "../../components/CreatingSubTypesForm";
import CreatingAttribute from "../CreatingProduct/components/CreatingAttribute";

const PublishSubtypesTable = withFetchData(SubtypesTable, get_all_publish_subType);
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

          <TableCard label="Draft SubTypes">
            <DraftSubtypesTable />
          </TableCard>

        </div>

        {admin ? null : (
          <div className="w-[26rem] flex flex-col gap-3">
            <Card title="Create new Subtypes">
              <CreatingSubTypesForm />
            </Card>
            <Card>
              <p className="text-2xl font-bold mb-4">Create attributes</p>
              <CreatingAttribute />
            </Card>
          </div>
        )}
      </section>
    </main>
  );
};

export default SubTypes;
