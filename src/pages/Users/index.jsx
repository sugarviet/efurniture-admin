import { Button, Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { useState, lazy } from "react";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";

import { useUser } from "./hooks/useUser";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";
import ExcelButton from "@components/ExcelButton";
import PageTitle from "@components/PageTitle";

import { pathSystem } from "../../router";
import urlcat from "urlcat";

const AccountCreateForm = lazy(() => import("./components/AccountCreateForm"));
const AccountUpdateForm = lazy(() => import("./components/AccountUpdateForm"));


const Users = () => {
  const { userData, isLoading } = useUser();
 
  const { getColumnSearchProps } = useSearchTableColumn();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleToggleModalCreateUser = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  const handleToggleModalEditUser = (id) => {
    setSelectedUserId(id)
    setIsModalUpdateOpen(!isModalUpdateOpen);
  };


  const getSorter = (dataIndex, customSorter) => {
    return {
      onFilter: (value, record) => record[dataIndex].indexOf(value) === 0,
      sorter: customSorter
        ? customSorter
        : (a, b) => a[dataIndex].length - b[dataIndex].length,
    };
  };

  const handleDisableUser = (id) => {
    console.log(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getSorter("name"),
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Link to={urlcat(pathSystem.userDetail, {
          id: record.id
        })} className="link">{text}</Link>
      ),
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
      title: "Actions",
      key: "actions",
      width: "20%",
      render: (text, record) => (
        <Space>
         
          <Button onClick={() => handleToggleModalEditUser(record.id)}>Edit</Button>
          <Button
            danger
            type="primary"
            onClick={() => handleDisableUser(record.id)}
          >
            Disable
          </Button>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between px-3 pt-2 pb-4 items-center">
        <PageTitle title="User management"/>
        <Button className="primary" type="primary" onClick={handleToggleModalCreateUser}>Create new account</Button>
      </div>
      <div className="float-right">
        <ExcelButton data={userData} />
      </div>
      <Table columns={columns} dataSource={userData} />

      {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <AccountCreateForm />
        </AppSuspense>
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <AccountUpdateForm id={selectedUserId}/>
        </AppSuspense>
      </AppModal>
    </div>
  );
};
export default Users;
