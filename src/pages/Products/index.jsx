import { Space, Button, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";
import ExcelButton from "@components/ExcelButton";
import Loading from "@components/Loading";
import useProducts from "./hooks/useProducts";
import PageTitle from "@components/PageTitle";

import { pathSystem } from "../../router";
import urlcat from "urlcat";
import ProductCreateForm from "./components/ProductCreateForm";

const Products = () => {
  const { products, isLoading } = useProducts();
  const { getColumnSearchProps } = useSearchTableColumn();

  if (isLoading) return <Loading />;


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
      render: () => (
        <Space className="flex gap-4">
          <Button >Edit</Button>
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

      <ProductCreateForm />
    </main>
  );
};

export default Products;
