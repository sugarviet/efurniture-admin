import React from 'react';
import { Card, List } from 'antd';
const { Meta } = Card;

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Product 1',
      price: '$19.99',
      manufacturer: 'Manufacturer 1',
      image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$29.99',
      manufacturer: 'Manufacturer 2',
      image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    },
  ];

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={productList}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Meta title={item.name} description={`Price: ${item.price} | Manufacturer: ${item.manufacturer}`} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
