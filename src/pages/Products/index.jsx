import PageTitle from "@components/PageTitle";
import { withFetchData } from "../../hocs/withFetchData";
import ProductTable from "../../components/ProductTable";
import { get_draft_product, get_published_product } from "../../api/productApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import TableCard from "../../components/TableCard";

const PublishedProductTable = withFetchData(
  ProductTable,
  get_published_product
);

const DraftProductTable = withFetchData(ProductTable, get_draft_product);
const Products = () => {
  const admin = isAdmin();

  console.log(admin);

  return (
    <main>
      <div className="flex px-2 justify-between items-center my-4">
        <PageTitle title="Product management" />
      </div>

      <TableCard label="Public Products">
        <PublishedProductTable published={true}/>
      </TableCard>

      {admin ? (
        <TableCard label="Draft Products">
          <DraftProductTable />
        </TableCard>
      ) : null}
    </main>
  );
};

export default Products;
