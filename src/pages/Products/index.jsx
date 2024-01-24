import { Space, Button, Table } from "antd";
import { useState, lazy } from "react";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import ExcelButton from "@components/ExcelButton";
import Loading from "@components/Loading";
import useProducts from "./hooks/useProducts";
import PageTitle from "../../components/PageTitle";


import { pathSystem } from "../../router";
import urlcat from "urlcat";
import { handleSort } from "../../utils/handleSort";

const ProductCreateForm = lazy(() => import("./components/ProductCreateForm"));
const ProductEditForm = lazy(() => import("./components/ProductEditForm"));

const Products = () => {
  const { products, isLoading } = useProducts();
  const { getColumnSearchProps } = useSearchTableColumn();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  if (isLoading) return <Loading />;

  const handleToggleModalCreateProduct = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  const handleToggleModalEditProduct = (id) => {
    setIsModalUpdateOpen(!isModalUpdateOpen);
    setSelectedProductId(id)
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Link to={urlcat(pathSystem.productDetail, {
          id: record.id
        })} className="link">{text}</Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img src={record.image} alt={record.name} width="100" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (item, record) => (
        <Space className="flex gap-4">
          <Button onClick={() => handleToggleModalEditProduct(record.id)}>Edit</Button>
          <Button danger>Disable</Button>
        </Space>
      ),
    },
  ];
  return (
    <main>
      <div className="flex px-2 justify-between items-center my-4"> 
        <PageTitle title="Product management"/>
        <Button
          className="primary"
          onClick={handleToggleModalCreateProduct}
          type="primary"
        >
          Create product
        </Button>
      </div>



      <div className="float-right">
        <ExcelButton data={products} />
      </div>
      <Table rowKey="id" dataSource={products} columns={columns} pagination={{
        pageSize: 10,
        hideOnSinglePage: true
      }}/>

      {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <ProductCreateForm setIsOpen={setIsModalCreateOpen} />
        </AppSuspense>
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <ProductEditForm id={selectedProductId}/>
        </AppSuspense>
      </AppModal>
    </main>
  );
};

export default Products;
