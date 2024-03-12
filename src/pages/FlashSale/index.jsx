import TableCard from "../../components/TableCard";
import { withFetchData } from "../../hocs/withFetchData";
import FlashSaleTable from "../../components/FlashSaleTable";
import { get_all_flash_sale } from "../../api/flashsaleApi";

const AllFlashSale = withFetchData(FlashSaleTable, get_all_flash_sale);

const FlashSale = () => {
  return (
    <main>
      <TableCard label="Flashsale">
        <AllFlashSale />
      </TableCard>
    </main>
  );
};

export default FlashSale;
