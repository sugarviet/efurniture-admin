import { useState } from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import AppModal from "@components/AppModal";
import EventCreateForm from "./components/EventCreateForm";
import EventUpdateForm from "./components/EventUpdateForm";
import ExcelButton from "@components/ExcelButton";
import PageTitle from "../../components/PageTitle";

const Events = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);


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
        <PageTitle title="Events Management"/>
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
        <ExcelButton data={[]} />
      </div>
      <Table
        rowKey="id"
        dataSource={[]}
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
