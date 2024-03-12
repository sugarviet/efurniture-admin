import { Button } from "antd";
import PageTitle from "@components/PageTitle";
import CreatingType from "./components/CreatingType";
import AppModal from "@components/AppModal";
import { useState } from "react";
import PublishedTypeTable from "./components/PublishedTypeTable";
import DraftedTypeTable from "./components/DraftedTypeTable";

const Types = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between px-3 my-3">
        <PageTitle title="Type management" />
        <Button
          type="primary"
          className="primary"
          onClick={handleOpenModalCreate}
        >
          Create new type
        </Button>
      </div>

      <PublishedTypeTable />
      <DraftedTypeTable />

      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <CreatingType />
      </AppModal>
    </div>
  );
};

export default Types;
