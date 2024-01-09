import { useState, lazy } from "react";
import { Table, Button, Space } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";

import AppSuspense from '@components/AppSuspense';
import Loading from '@components/Loading';

import ExcelButton from "@components/ExcelButton";
import AppModal from "@components/AppModal";
import { useGetVouchers } from "./hooks/useGetVouchers";

const VoucherCreateForm = lazy(() => import('./components/VoucherCreateForm'))
const VoucherUpdateForm = lazy(() => import('./components/VoucherUpdateForm'))

const Vouchers = () => {
  const { getColumnSearchProps } = useSearchTableColumn();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState(null);

  const {vouchers, isLoading} = useGetVouchers();

  const handleToggleModalCreateVoucher = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  const handleToggleModalEditVoucher = (id) => {
    setIsModalUpdateOpen(!isModalUpdateOpen);
    setSelectedVoucherId(id);
  };

  

  const columns = [
    {
      title: "Voucher Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Number of Vouchers",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (products) => products.join(", "),
    },
    {
      title: "% Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleToggleModalEditVoucher(record.id)}>Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  if(isLoading) return <Loading />

  return (
    <section>
      <div className="flex px-3 justify-between items-center mt-2 mb-4">
        <h1 className="text-3xl font-bold">Voucher management</h1>
        <Button className="primary" type="primary" onClick={handleToggleModalCreateVoucher}>
          Create vouchers
        </Button>
      </div>
      <div className="float-right my-2">
      <ExcelButton data={vouchers} />
      </div>
      <Table rowKey={"id"} dataSource={vouchers} columns={columns} />


    {/* Modals */}
      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <VoucherCreateForm />
        </AppSuspense>
      </AppModal>

      <AppModal isOpen={isModalUpdateOpen} setIsOpen={setIsModalUpdateOpen}>
        <AppSuspense>
          <VoucherUpdateForm id={selectedVoucherId}/>
        </AppSuspense>
      </AppModal>
    </section>
  );
};

export default Vouchers;
