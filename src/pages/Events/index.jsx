import { useState } from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import AppModal from "@components/AppModal";
import Loading from "@components/Loading";
import EventCreateForm from "./components/EventCreateForm";
import EventUpdateForm from "./components/EventUpdateForm";
import ExcelButton from "@components/ExcelButton";
import { useEvents } from "./hooks/useEvents";

const Events = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const { events, isLoading } = useEvents();

  if (isLoading) return <Loading />;

  const handleToggleModalCreateModal = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };
  const handleToggleModalUpdateModal = () => {
    setIsModalUpdateOpen(!isModalUpdateOpen);
  };
  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="primary text-white"
            onClick={handleToggleModalUpdateModal}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this event?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okType="default"
            className="primary"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDelete = () => {};

  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold mb-3">Events Management</h1>
        <Button
          type="primary"
          className="primary text-white"
          onClick={handleToggleModalCreateModal}
          style={{ marginBottom: 16 }}
        >
          Create Event
        </Button>
      </div>
      <div className="float-right">
        <ExcelButton data={events} />
      </div>
      <Table
        rowKey="id"
        dataSource={events}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />

      {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <EventCreateForm />
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <EventUpdateForm />
      </AppModal>
    </div>
  );
};

export default Events;
