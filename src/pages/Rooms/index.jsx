import { Table, Space, Button } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { useState, lazy } from "react";

import urlcat from "urlcat";
import { Link } from "react-router-dom";
import { pathSystem } from "../../router";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";

const CreatingRooms = lazy(() => import("./components/CreatingRooms"));

const data = [
  {
    _id: 1,
    thumb: "https://dummyimage.com/600x400/000/fff",
    name: "Living room",
    total: 200,
  },
  {
    _id: 2,
    thumb: "https://dummyimage.com/600x400/000/fff",
    name: "Kitchen",
    total: 400,
  },
];

const Rooms = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const { getColumnSearchProps } = useSearchTableColumn();

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Link
          to={urlcat(pathSystem.productDetail, {
            id: record._id,
          })}
          className="link"
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img src={record.thumb} alt={record.name} width="100" />
      ),
    },

    {
      title: "Action",
      key: "action",
      width: "30%",
      render: () => (
        <Space className="flex gap-4">
          <Button>Edit</Button>
          <Button danger>Disable</Button>
        </Space>
      ),
    },
  ];

  return (
    <main>
        <div className="flex justify-between mb-4">
            <h1 className="text-3xl">Rooms management</h1>
            <Button type="primary" onClick={() => setIsModalCreateOpen(true)}>Create Rooms</Button>
        </div>
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />

      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <CreatingRooms setIsOpen={setIsModalCreateOpen} />
        </AppSuspense>
      </AppModal>
    </main>
  );
};

export default Rooms;
