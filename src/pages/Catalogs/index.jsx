import { Space, Button, Table } from "antd";
import { useState, lazy } from "react";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Link } from "react-router-dom";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import PageTitle from "@components/PageTitle";

const CatalogCreateForm = lazy(() => import("./components/CatalogCreateForm"));
const CatalogUpdateForm = lazy(() => import("./components/CatalogUpdateForm"));

const data = [
  {
    id: 1,
    image: 'https://dummyimage.com/600x400/000/fff',
    catelog: 'catalog A',
    products: ['Product 1', 'Product 2'],
    place: 'Living room',
    total: 200
  },
  {
    id: 2,
    image: 'https://dummyimage.com/600x400/000/fff',
    catelog: 'catalog A',
    products: ['Product 1', 'Product 2'],
    place: 'Kitchen',
    total: 400
  }
]

const Catalogs = () => {
  const [selectedCatelogId, setSelectedCatelogId] = useState(null);
  const { getColumnSearchProps } = useSearchTableColumn();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const handleToggleModalCreateProduct = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  const handleToggleModalEditProduct = (id) => {
    setIsModalUpdateOpen(!isModalUpdateOpen);
    setSelectedCatelogId(id);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img src={record.image} alt={record.image} width="100" />
      )
    },
    {
      title: "Catelog Name",
      dataIndex: "catelog",
      key: "catelog",
      ...getColumnSearchProps("catelog"),
    },
    {
      title: "products",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Total price",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (item, record) => (
        <Space className="flex gap-4">
          <Link to={`/catelog/${item.id}`}>
            <Button className="primary" type="primary">
              Detail
            </Button>
          </Link>
          <Button onClick={() => handleToggleModalEditProduct(record.id)}>Edit</Button>
        </Space>
      ),
    },
  ];
  return <main>
    <div className="flex px-2 justify-between items-center my-4">
       
        <PageTitle title="Catelog management"/>

        <Button
          className="primary"
          onClick={handleToggleModalCreateProduct}
          type="primary"
        >
          Create catelog
        </Button>
      </div>
      <Table rowKey="id" dataSource={data} columns={columns} pagination={{
        pageSize: 10,
        hideOnSinglePage: true
      }}/>


       {/* Modals */}
       <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <CatalogCreateForm setIsOpen={setIsModalCreateOpen} />
        </AppSuspense>
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <CatalogUpdateForm id={selectedCatelogId} />
        </AppSuspense>
      </AppModal>
  </main>;
};

export default Catalogs;
