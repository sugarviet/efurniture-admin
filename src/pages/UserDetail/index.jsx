import { useParams } from "react-router-dom";
import { Card, Descriptions, Tabs } from "antd";
import InProgress from "./components/InProgress";
import Shipping from "./components/Shipping";
import PurchasedHistory from "./components/PurchasedHistory";

const tabs = [
  {
    key: '1',
    label: "In progress",
    children: <InProgress />
  },
  {
    key: '2',
    label: "Shipping",
    children: <Shipping />
  },
  {
    key: '3',
    label: "Purchased history",
    children: <PurchasedHistory />
  },
]

const UserDetail = () => {
  const { id } = useParams();
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

  const onChange = (key) => {
    console.log(key, id);
  };

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

      <div>
        <Card
          className="my-4"
          title="Information"
        >
          <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
