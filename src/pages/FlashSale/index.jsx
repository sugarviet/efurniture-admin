import { Table, Button, Space, Popconfirm } from "antd";
import ExcelButton from "@components/ExcelButton";
import PageTitle from "../../components/PageTitle";
import TableCard from "../../components/TableCard";
import { withFetchData } from "../../hocs/withFetchData";
import FlashSaleTable from "../../components/FlashSaleTable";
import { get_all_flash_sale } from "../../api/flashsaleApi";

const AllFlashSale = withFetchData(FlashSaleTable, get_all_flash_sale);

const FlashSale = () => {
  return (
    <main>
      <div className="flex px-2 justify-between items-center my-4">
        <PageTitle title="Product management" />
      </div>

      <TableCard label="Flashsale">
        <AllFlashSale />
      </TableCard>
    </main>
  );
};

export default FlashSale;
