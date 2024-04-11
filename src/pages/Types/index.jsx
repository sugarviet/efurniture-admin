import PageTitle from "@components/PageTitle";
import CreatingType from "./components/CreatingType";
import AppModal from "@components/AppModal";
import { useState } from "react";
import { withFetchData } from "../../hocs/withFetchData";
import TypeTable from "../../components/TypeTable";
import { get_draft_type, get_published_type } from "../../api/typesApi";
import TableCard from "../../components/TableCard";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { Card } from "antd";

const PublishedTypeTable = withFetchData(TypeTable, get_published_type);
const DraftedTypeTable = withFetchData(TypeTable, get_draft_type);

const Types = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const admin = isAdmin();

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  return (
    <main>


      <section className="flex gap-6">
        <div className="flex-1">
          <TableCard label="Public types">
            <PublishedTypeTable published />
          </TableCard>


          <TableCard label="Draft types">
            <DraftedTypeTable />
          </TableCard>

        </div>

        {admin ? null : (
          <div className="w-[26rem]">
            <Card title='Create new types'>
              <CreatingType />
            </Card>
          </div>
        )}
      </section>

    </main>
  );
};

export default Types;
