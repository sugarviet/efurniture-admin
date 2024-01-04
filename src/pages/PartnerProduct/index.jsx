import { useState } from "react";
import HorizontalList from "@components/HorizontalList"
import ProductCard from "@components/ProductCard"
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";

const PartnerProduct = () => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
  ];
  const { getColumnSearchProps } = useSearchTableColumn();

  const [vouchers] = useState([
    {
      id: 1,
      name: 'Product A',
      quantity: 100,
      discount: 15,
    },
    {
      id: 2,
      name: 'Product B',
      quantity: 50,
      discount: 10,
    },
    // Add more vouchers as needed
  ]);
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
      title: '% Discount',
      dataIndex: 'discount',
      key: 'discount',
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
      <Table dataSource={vouchers} columns={columns} />

      <HorizontalList dataItem={ProductCard} data={data}/>
    </section>
  )
}

export default PartnerProduct