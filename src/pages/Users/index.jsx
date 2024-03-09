import { Button, Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { useState, lazy } from "react";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";

import { Link, useSearchParams } from "react-router-dom";
import ExcelButton from "@components/ExcelButton";
import PageTitle from "@components/PageTitle";
import { pathSystem } from "../../router";
import urlcat from "urlcat";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_user } from "../../api/userApi";
import Proptypes from "prop-types";
const AccountUpdateForm = lazy(() => import("./components/AccountUpdateForm"));

const Users = ({ data }) => {
  const { getColumnSearchProps } = useSearchTableColumn();

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();


  const handleToggleModalEditUser = (id) => {
    setSelectedUserId(id);
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


  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "30%",
      ...getSorter("username"),
      ...getColumnSearchProps("username"),
      render: (text, record) => (
        <Link
          to={urlcat(pathSystem.userDetail, {
            id: record._id,
          })}
          className="link"
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Actions",
      key: "actions",
      width: "20%",
      render: (text, record) => (
        <Space>
          <Button onClick={() => handleToggleModalEditUser(record.id)}>
            Edit
          </Button>
          <Button
            danger
          
          >
            Disable
          </Button>
        </Space>
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
    <div>
      <div className="flex justify-between px-3 pt-2 pb-4 items-center">
        <PageTitle title="User management" />
    
      </div>
      <div className="float-right">
        <ExcelButton data={[]} />
      </div>
      
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data.data}
        onChange={handleTableChange}
        pagination={{ current: searchParams.get("page") || 1, pageSize: 10 ,total: data.size  }}
      />

      {/* Modals */}
      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <AccountUpdateForm id={selectedUserId} />
        </AppSuspense>
      </AppModal>
    </div>
  );
};

Users.propTypes = {
  data: Proptypes.object,
};

export default withFetchData(Users, get_all_user);
