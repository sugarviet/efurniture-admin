import PageTitle from "@components/PageTitle";
import { withFetchData } from "../../hocs/withFetchData";
import ProductTable from "../../components/ProductTable";
import { get_draft_product, get_published_product } from "../../api/productApi";
import { isAdmin } from "../../utils/getCurrentUserRole";
import TableCard from "../../components/TableCard";
import AppModal from "@components/AppModal";
import { useState } from "react";
import ProductEditForm from "./components/ProductEditForm";
import { CreatingProductProvider } from "../CreatingProduct/CreatingProductContext";

const PublishedProductTable = withFetchData(
  ProductTable,
  get_published_product
);

const DraftProductTable = withFetchData(ProductTable, get_draft_product);
const Products = () => {
  const admin = isAdmin();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const handleEdit = (data) => {
    setOpenModalEdit(true);
    setSelectedProduct(data);
  };

  return (
    <main>
      <div className="flex px-2 justify-between items-center my-4">
        <PageTitle title="Product management" />
      </div>

      <TableCard label="Public Products">
        <PublishedProductTable published={true} onEdit={handleEdit} />
      </TableCard>

      {admin ? (
        <TableCard label="Draft Products">
          <DraftProductTable />
        </TableCard>
      ) : null}

      <AppModal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
        <CreatingProductProvider>
          {openModalEdit ? <ProductEditForm data={selectedProduct} /> : null}
        </CreatingProductProvider>
      </AppModal>
    </main>
  );
};

export default Products;
