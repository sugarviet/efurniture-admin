import { useState } from "react";
import { List } from "antd";
import ProductStatusCard from "@components/ProductStatusCard";

const Shipping = () => {
  const [pendingProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      status: "shipping",
      manufacturer: "Manufacturer 1",
      image: "https://placekitten.com/80/80",
      quantity: 5,
      payment: "Online",
    },
    {
      id: 2,
      name: "Product 2",
      status: "shipping",
      manufacturer: "Manufacturer 2",
      image: "https://placekitten.com/80/80",
      quantity: 5,
      payment: "Online",
    },
  ]);

  return (
    <div>
      <List
        dataSource={pendingProducts}
        renderItem={(item) => (
          <List.Item>
            <ProductStatusCard data={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Shipping;
