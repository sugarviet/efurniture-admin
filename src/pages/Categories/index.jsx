import { Button } from "antd";
import PageTitle from "@components/PageTitle";
import CreatingCategory from "./components/CreatingCategory";
import AppModal from "@components/AppModal";
import { useState } from "react";
import PublishedCategoriesTable from "./components/PublishedCategoriesTable";
import DraftedCategoriesTable from "./components/DraftedCategoriesTable";

const Categories = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between px-3 my-3">
        <PageTitle title="Category management" />
        <Button
          type="primary"
          className="primary"
          onClick={handleOpenModalCreate}
        >
          Create new category
        </Button>
      </div>

      <PublishedCategoriesTable />
      <DraftedCategoriesTable />

      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <CreatingCategory />
      </AppModal>
    </div>
  );
};

export default Categories;
