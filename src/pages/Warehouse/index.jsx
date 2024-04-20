import { withFetchData } from "@hocs/withFetchData";
import { get_all_warehouse, get_first_warehouse } from "../../api/warehouseApi";
import WarehouseTable from "../../components/WarehouseTable";
import TableCard from "../../components/TableCard";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import CreatingWarehouseForm from "../../components/CreatingWarehouseForm";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { Button } from "antd";
import AppModal from "../../components/AppModal";

import PropTypes from "prop-types";
import EditWarehouseForm from "../../components/EditWarehouseForm";

const Warehouse = ({ data }) => {
  const admin = isAdmin();

  const [openEditWarehouseModal, setopenEditWarehouseModal] = useState(false);
  return (
    <div>
      <TableCard
        label={`${data.location} - ${data.district}`} addMoreButton={
          admin ? null :
            <Button
              className="flex items-center px-4 py-4"
              type="link"
              onClick={() => setopenEditWarehouseModal(true)}
            >
              Edit warehouse <EditOutlined />
            </Button>
        }

      >
        <WarehouseTable />
      </TableCard>

      <AppModal isOpen={openEditWarehouseModal} setIsOpen={setopenEditWarehouseModal}>

        {openEditWarehouseModal ?
          <EditWarehouseForm data={data} />
          : null
        }

      </AppModal>
    </div>
  );
};

Warehouse.propTypes = {
  data: PropTypes.object,
};

export default withFetchData(Warehouse, get_first_warehouse);
