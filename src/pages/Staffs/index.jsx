import { useState } from "react";
import { Button, Table, Tag } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import AppModal from "@components/AppModal";
import ExcelButton from "@components/ExcelButton";
import CreatingStaffForm from "./components/CreatingStaffForm";
import EdittingStaffForm from "./components/EdittingStaffForm";

import { withFetchData } from "@hocs/withFetchData";
import { get_all_user } from "../../api/userApi";
import Proptypes from "prop-types";

const Staffs = ({data}) => {
  const [openCreateStaffModal, setOpenCreateStaffModal] = useState(false);
  const [openEditStaffModal, setOpenEditStaffModal] = useState(false);
  const { getColumnSearchProps } = useSearchTableColumn();

  const handleOpenCreateStaffModal = () => {
    setOpenCreateStaffModal(!openCreateStaffModal);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: () => <Tag color="green">Active</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      width: "20%",
      render: () => (
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button danger>Disable</Button>
        </div>
      ),
    },
  ];

  return (
    <main>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold">Staffs management</h1>
        <Button type="primary" onClick={handleOpenCreateStaffModal}>
          Create new staffs
        </Button>
      </div>

      <div className="float-right">
        <ExcelButton data={data} />
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />

      <AppModal
        isOpen={openCreateStaffModal}
        setIsOpen={setOpenCreateStaffModal}
      >
        <CreatingStaffForm />
      </AppModal>

      <AppModal isOpen={openEditStaffModal} setIsOpen={setOpenEditStaffModal}>
        <EdittingStaffForm />
      </AppModal>
    </main>
  );
};
Staffs.propTypes = {
  data: Proptypes.array,
};

export default withFetchData(Staffs,get_all_user);
