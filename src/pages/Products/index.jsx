import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, List, Input } from "antd";
import { useState } from "react";

const { Meta } = Card;
const { Search } = Input;

const productList = [
  {
    id: 1,
    name: "Haha",
    price: "$19.99",
    manufacturer: "Manufacturer 1",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 3,
    name: "Product 2",
    price: "$29.99",
    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 4,
    name: "Product 2",
    price: "$29.99",
    manufacturer: "Manufacturer 2",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];
const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const handleSearch = (e) => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Search
        placeholder="Search products"
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredProducts}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
