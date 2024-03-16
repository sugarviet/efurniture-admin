import { withFetchData } from "@hocs/withFetchData";
import { get_warehouse_detail } from "../../api/warehouseApi";
import PropTypes from "prop-types";
import WarehouseTable from "../../components/WarehouseTable";
import TableCard from "../../components/TableCard";
import WarehouseDetailTable from "../../components/WarehouseDetailTable";

const PublishedWarehouseDetailTable = withFetchData(
  WarehouseDetailTable,
  get_warehouse_detail
);
const WarehouseDetail = () => {
  return (
   
      <PublishedWarehouseDetailTable />
  );
};

export default WarehouseDetail;
