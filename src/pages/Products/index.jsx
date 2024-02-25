import ExcelButton from "@components/ExcelButton";
import PageTitle from "@components/PageTitle";
import PublishedProductTable from "./components/PublishedProductTable";
import DrafedProductTable from "./components/DrafedProductTable";

const Products = () => {

  const products = [];

  
  return (
    <main>
      <div className="flex px-2 justify-between items-center my-4">
        <PageTitle title="Product management" />
        {/* <Button className="primary" type="primary">
          Create product
        </Button> */}
      </div>

      <div className="float-right">
        <ExcelButton data={products} />
      </div>


      <PublishedProductTable />
      <DrafedProductTable />
    </main>
  );
};

export default Products;
