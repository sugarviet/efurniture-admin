import { withFetchData } from "@hocs/withFetchData";
import { get_all_warehouse } from "../../api/warehouseApi";
import PropTypes from "prop-types";
import WarehouseTable from "../../components/WarehouseTable";
import TableCard from "../../components/TableCard";

const PublishedWarehouseTable = withFetchData(WarehouseTable, get_all_warehouse)

const Warehouse = () => {
 
  return (
    <div>
     
      <TableCard label="Warehouse">
        <PublishedWarehouseTable />
      </TableCard>
    
    </div>
  );
};

export default withFetchData(Warehouse, get_all_warehouse);
