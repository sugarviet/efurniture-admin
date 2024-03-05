import { useState } from "react";
import { Button, Table, Tag } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import AppModal from "@components/AppModal";
import ExcelButton from "@components/ExcelButton";
import CreatingStaffForm from "./components/CreatingStaffForm";
import EdittingStaffForm from "./components/EdittingStaffForm";

import { withFetchData } from "@hocs/withFetchData";
import {
  disable_account,
  enable_account,
  get_all_system_account,
} from "../../api/userApi";
import Proptypes from "prop-types";
import useParamQuery from "../../hooks/useParamQuery";
import { useDelete } from "@hooks/api-hooks";

const Staffs = ({ data }) => {
  const { params, handleSetParams } = useParamQuery();
  const [openCreateStaffModal, setOpenCreateStaffModal] = useState(false);
  const [selectedUser, setSelecteUser] = useState(null);
  const [openEditStaffModal, setOpenEditStaffModal] = useState(false);
  const { getColumnSearchProps } = useSearchTableColumn();

  const handleOpenCreateStaffModal = () => {
    setOpenCreateStaffModal(!openCreateStaffModal);
  };

  const handleOpenEditStaffModal = (record) => {
    setSelecteUser(record)
    setOpenEditStaffModal(!openEditStaffModal);
  };

  const { mutate: enableAccount } = useDelete(
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {
      alert("fail");
    },
    get_all_system_account()
  );

  const { mutate: disableAccount } = useDelete(
    undefined,
    () => {
      alert("thanh cong");
    },
    () => {
      alert("fail");
    },
    get_all_system_account()
  );

  const handleEnableAccount = (id) => {
    enableAccount(enable_account(id), {});
  };

  const handleDisableAccount = (id) => {
    disableAccount(disable_account(id), {});
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "30%",
      ...getColumnSearchProps("username"),
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      width: "20%",
      ...getColumnSearchProps("first_name"),
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      width: "20%",
      ...getColumnSearchProps("first_name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
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
      render: (text, record) => (
        <div className="flex gap-2">
          <Button onClick={() => handleOpenEditStaffModal(record)}>Edit</Button>
          {record.status === 1 ? (
            <Button danger onClick={() => handleDisableAccount(record._id)}>
              Disable
            </Button>
          ) : (
            <Button onClick={() => handleEnableAccount(record._id)}>
              Enable
            </Button>
          )}
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    handleSetParams({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  };

  return (
    <main>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold">Staffs management</h1>
        <Button type="primary" onClick={handleOpenCreateStaffModal}>
          Create new staffs
        </Button>
      </div>

      <div className="float-right">
        <ExcelButton data={[]} />
      </div>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data.data}
        onChange={handleTableChange}
        pagination={{
          current: params.get("page") || 1,
          pageSize: 10,
          total: data.size,
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
        <EdittingStaffForm data={selectedUser}/>
      </AppModal>
    </main>
  );
};
Staffs.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(Staffs, get_all_system_account);
