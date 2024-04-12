import { withFetchData } from "@hocs/withFetchData";
import { get_all_warehouse } from "../../api/warehouseApi";
import WarehouseTable from "../../components/WarehouseTable";
import TableCard from "../../components/TableCard";
import AppModal from "../../components/AppModal";

import { useState } from "react";
import CreatingWarehouseForm from "../../components/CreatingWarehouseForm";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const PublishedWarehouseTable = withFetchData(
  WarehouseTable,
  get_all_warehouse
);

const Warehouse = () => {
  const [openCreateModal, setIsOpenCreateModal] = useState(false);
  return (
    <div>
      <TableCard
        label="Warehouse"
        addMoreButton={
          <Button
            className="flex items-center px-4 py-4"
            type="link"
            onClick={() => setIsOpenCreateModal(true)}
          >
            Add Warehouse <PlusCircleFilled />
          </Button>
        }
      >
        <PublishedWarehouseTable />
      </TableCard>

      <AppModal isOpen={openCreateModal} setIsOpen={setIsOpenCreateModal}>
        {openCreateModal ? <CreatingWarehouseForm /> : null}
      </AppModal>
    </div>
  );
};

export default withFetchData(Warehouse, get_all_warehouse);
