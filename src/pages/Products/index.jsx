import PageTitle from "@components/PageTitle";
import { withFetchData } from "../../hocs/withFetchData";
import ProductTable from "../../components/ProductTable";
import { get_draft_product, get_draft_product_staff, get_published_product } from "../../api/productApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import TableCard from "../../components/TableCard";

const PublishedProductTable = withFetchData(
  ProductTable,
  get_published_product
);

const DraftProductTable = withFetchData(ProductTable, get_draft_product);
const DraftProductTableStaff = withFetchData(ProductTable, get_draft_product_staff);
const Products = () => {
  const admin = isAdmin();

  return (
    <main>
      <TableCard label="Public Products">
        <PublishedProductTable published={true} />
      </TableCard>

      {admin ? (
        <TableCard label="Draft Products">
          <DraftProductTable />
        </TableCard>
      ) : <TableCard label="Draft Products">
        <DraftProductTableStaff />
      </TableCard>}
    </main>
  );
};

export default Products;
