import OrderStatus from "./components/OrderStatus";
import { Table } from "antd";
const OrderDetail = () => {
  const data = [
    {
      key: "1",
      productName: "Product 1",
      quantity: 2,
      price: 20,
      totalPrice: 40,
      img: 'https://dummyimage.com/600x400/000/fff'
    },
    {
      key: "2",
      productName: "Product 2",
      quantity: 1,
      price: 30,
      totalPrice: 30,
      img: 'https://dummyimage.com/600x400/000/fff'
    },
  ];

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (text) => (
        <img src={text} alt="" width="100" />
      )
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
  ];
  return (
    <main className="flex gap-10">
      <section className="flex-1">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        />
        <div className="border-t-2 border-b-2 flex justify-between py-3 text-lg font-semibold">
          <p className="text-lg font-semibold">Items subtotal:</p>
          <p>$7,686</p>
        </div>
      </section>
      <section className="w-96">
        <OrderStatus
          id={1}
          paymentStatus="processing"
          fulfilStatus="unfulfilled"
        />
      </section>
    </main>
  );
};

export default OrderDetail;
