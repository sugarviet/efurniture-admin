import { useState } from "react";
import { Button, Table, Tag } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import AppModal from "@components/AppModal";
import ExcelButton from "@components/ExcelButton";
import CreatingStaffForm from "./components/CreatingStaffForm";
import EdittingStaffForm from "./components/EdittingStaffForm";
import { useSearchParams } from "react-router-dom";
import { withFetchData } from "@hocs/withFetchData";
import {
  get_all_system_account,
} from "@api/userApi";
import Proptypes from "prop-types";
import useAccountManagement from "./hooks/useAccountManagement";
import TableCard from "../../components/TableCard";
import { PlusCircleFilled } from "@ant-design/icons";

const Staffs = ({ data }) => {
  console.log(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const { enableAccount, disableAccount } = useAccountManagement();

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
      render: (text) => <span className="text-base">{text}</span>,
      ...getColumnSearchProps("first_name"),
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      width: "20%",
      render: (text) => <span className="text-base">{text}</span>,
      ...getColumnSearchProps("last_name"),
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
      render: (text) => <Tag color={text == 1 ? 'green' : 'red'}><span>{text == 1 ? 'Active': 'Unactive'}</span></Tag> ,
    },
    {
      title: "Actions",
      key: "actions",
      width: "20%",
      render: (text, record) => (
        <div className="flex gap-2">
          <Button onClick={() => handleOpenEditStaffModal(record)}>Edit</Button>
          {record.status === 1 ? (
            <Button danger onClick={() => disableAccount(record._id)}>
              Disable
            </Button>
          ) : (
            <Button onClick={() => enableAccount(record._id)}>
              Enable
            </Button>
          )}
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    setSearchParams({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  };

  return (
    <main>

      <TableCard label={'Staff management'} addMoreButton={
        <Button
          className="flex items-center px-4 py-4"
          type="link"
          onClick={handleOpenCreateStaffModal}
        >
          Add Staffs <PlusCircleFilled />
        </Button>
      }>

        <Table
          rowKey="_id"
          columns={columns}
          dataSource={data.data}
          onChange={handleTableChange}
          pagination={{
            current: searchParams.get("page") || 1,
            pageSize: 10,
            total: data.total,
            hideOnSinglePage: true,
          }}
        />

      </TableCard>

      <AppModal
        isOpen={openCreateStaffModal}
        setIsOpen={setOpenCreateStaffModal}
      >
        <CreatingStaffForm />
      </AppModal>

      <AppModal isOpen={openEditStaffModal} setIsOpen={setOpenEditStaffModal}>
        <EdittingStaffForm data={selectedUser} />
      </AppModal>
    </main>
  );
};
Staffs.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(Staffs, get_all_system_account);
