import { Input, Space, Button, Table } from "antd";
import { useState, lazy } from "react";
import HorizontalList from "@components/HorizontalList";
import ProductCard from "@components/ProductCard";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";
import AppModal from "../../components/AppModal";
import AppSuspense from "../../components/AppSuspense";

const { Search } = Input;

const ProductCreateForm = lazy(() => import("./components/ProductCreateForm"));
const ProductEditForm = lazy(() => import("./components/ProductEditForm"));

const productList = [
  {
    id: 1,
    name: "Haha",
    price: "$19.99",
    quantity: 100,
    manufacturer: "Manufacturer 1",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    quantity: 100,
    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 3,
    name: "Product 2",
    price: "$29.99",
    quantity: 100,

    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 4,
    name: "Product 2",
    price: "$29.99",
    quantity: 100,

    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];
const Products = () => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const handleToggleModalCreateProduct = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  const handleToggleModalEditProduct = () => {
    setIsModalUpdateOpen(!isModalUpdateOpen);
  };

  const handleSearch = (e) => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
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
      render: (item) => (
        <Space className="flex gap-4">
          <Link to={`/products/${item.id}`}>
            <Button className="primary" type="primary">View {item.id}</Button>
          </Link>
            <Button onClick={handleToggleModalEditProduct}>Edit {item.id}</Button>
        </Space>
      ),
    },
  ];
  return (
    <section>
      <div className="flex px-2 justify-between items-center my-2">
        <h1 className="text-3xl font-bold">Product management</h1>
        <Button className="primary mb-3" onClick={handleToggleModalCreateProduct} type="primary">
          Create product
        </Button>
      </div>
      <Search
        placeholder="Search products"
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />

      <Table dataSource={productList} columns={columns} />

      <HorizontalList cols={4} data={filteredProducts} dataItem={ProductCard} />


      {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <ProductCreateForm setIsOpen={setIsModalCreateOpen}/>
        </AppSuspense>
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <ProductEditForm />
        </AppSuspense>
      </AppModal>
    </section>
  );
};

export default Products;
