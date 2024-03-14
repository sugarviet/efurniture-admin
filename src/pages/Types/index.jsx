import PageTitle from "@components/PageTitle";
import CreatingType from "./components/CreatingType";
import AppModal from "@components/AppModal";
import { useState } from "react";
import { withFetchData } from "../../hocs/withFetchData";
import TypeTable from "../../components/TypeTable";
import { get_draft_type, get_published_type } from "../../api/typesApi";
import TableCard from "../../components/TableCard";
import { isAdmin } from "../../utils/getCurrentUserRole";

const PublishedTypeTable = withFetchData(TypeTable, get_published_type);
const DraftedTypeTable = withFetchData(TypeTable, get_draft_type);

const Types = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const admin = isAdmin();

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between px-3 my-3">
        <PageTitle title="Type management" />
      </div>
      <TableCard label="Public types">
        <PublishedTypeTable published />
      </TableCard>

      {admin ? (
        <TableCard label="Draft types">
          <DraftedTypeTable />
        </TableCard>
      ) : null}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <CreatingType />
      </AppModal>
    </div>
  );
};

export default Types;
