import { Table, Button } from "antd";
import { useState } from "react";

import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import ConfirmModal from "./components/ConfirmModal";

const CashRequest = () => {
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
    const [selectedRequestId, setSelectedRequestId] = useState(null);

    const handleToggleConfirmModal = (id) => {
        console.log(id);
        setSelectedRequestId(id)
        setIsModalConfirmOpen(!isModalConfirmOpen);
    }

  const data = [
    {
      id: '1',
      account: "T123",
      request: 1000,
      date: "2024-01-01",
      description: "Payment for services",
    },
  ];

  const columns = [
    {
        title: "Account",
        dataIndex: "account",
        key: "account",
      },
    {
      title: "Request",
      dataIndex: "request",
      key: "request",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
        title: "Action",
        key: "action",
        width: "30%",
        render: (item, record) => (
         
            <Button onClick={() => handleToggleConfirmModal(record.id)} className="primary" type="primary">Confirm</Button>
          
        ),
      },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold my-2">Cash request management</h1>
      <Table rowKey="id" dataSource={data} columns={columns} />

      <AppModal isOpen={isModalConfirmOpen} setIsOpen={setIsModalConfirmOpen}>
        <AppSuspense>
          <ConfirmModal id={selectedRequestId}/>
        </AppSuspense>
      </AppModal>
    </div>
  );
};

export default CashRequest;
