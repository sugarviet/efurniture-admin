import { Input, Space, Button, Table } from "antd";
import { useState } from "react";
import HorizontalList from "@components/HorizontalList";
import ProductCard from "@components/ProductCard";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";

const { Search } = Input;

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

  const [filteredProducts, setFilteredProducts] = useState(productList);

  const handleSearch = (e) => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name')
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <Space size="middle">
          <Link to={`/products/${item.id}`}>
            <Button className="primary">View {item.id}</Button>

          </Link>
        </Space>
      ),
    },
   
  ];
  return (
    <section>
      <Search
        placeholder="Search products"
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table dataSource={productList} columns={columns} />

      <HorizontalList cols={4} data={filteredProducts} dataItem={ProductCard} />
    </section>
  );
};

export default Products;
