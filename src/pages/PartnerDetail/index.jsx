
import { Avatar, Card, Descriptions, List } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
const { Meta } = Card;

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
const PartnerDetail = () => {
  const items = [
    {
      key: '1',
      label: 'Username',
      children: "Viet",
    },
    {
      key: '2',
      label: 'Phone',
      children: "090812123",
    },
    {
      key: '3',
      label: 'Wallet',
      children: 200,
    },
    {
      key: '4',
      label: 'Gender',
      children: "Male",
    },
   
  ];

  return (
    <div className="container">

      {/* Left Col */}
      <div className="flex justify-between shadow-md rounded-lg py-2 px-3">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden w-40 h-40 mb-3">
            <img
              src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">Johny</h1>
        </div>

        {/* Right Col */}
        <div className="flex-1">
        <Descriptions title="User Info" bordered items={items} />
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-xl font-bold">List Products</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={productList}
        renderItem={() => (
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
    </div>
  );
};

export default PartnerDetail;
