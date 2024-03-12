import { useState, lazy } from "react";
import { Table, Button, Space } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";

import AppSuspense from "@components/AppSuspense";
import Loading from "@components/Loading";

import ExcelButton from "@components/ExcelButton";
import AppModal from "@components/AppModal";
import PageTitle from "../../components/PageTitle";
import { withFetchData } from "../../hocs/withFetchData";
import { get_voucher_api } from "../../api/voucherApi";
import VoucherTable from "../../components/VoucherTable";
import TableCard from "../../components/TableCard";



const PublishedVoucher = withFetchData(VoucherTable, get_voucher_api);

const Vouchers = () => {
  // const { getColumnSearchProps } = useSearchTableColumn();
  // const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  // const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  // const [selectedVoucherId, setSelectedVoucherId] = useState(null);

  // const handleToggleModalCreateVoucher = () => {
  //   setIsModalCreateOpen(!isModalCreateOpen);
  // };

  // const handleToggleModalEditVoucher = (id) => {
  //   setIsModalUpdateOpen(!isModalUpdateOpen);
  //   setSelectedVoucherId(id);
  // };

  // const columns = [
  //   {
  //     title: "Voucher Name",
  //     dataIndex: "name",
  //     key: "name",
  //     ...getColumnSearchProps("name"),
  //   },
  //   {
  //     title: "Number of Vouchers",
  //     dataIndex: "quantity",
  //     key: "quantity",
  //   },
  //   {
  //     title: "Products",
  //     dataIndex: "products",
  //     key: "products",
  //     render: (products) => products.join(", "),
  //     ellipsis: true,
  //   },
  //   {
  //     title: "% Discount",
  //     dataIndex: "discount",
  //     key: "discount",
  //   },
  //   {
  //     title: "Expiry Date",
  //     dataIndex: "expiryDate",
  //     key: "expiryDate",
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <Button onClick={() => handleToggleModalEditVoucher(record.id)}>
  //           Edit
  //         </Button>
  //         <Button type="primary" danger>
  //           Delete
  //         </Button>
  //       </Space>
  //     ),
  //   },
  // ];

  return (
    <section>
      <TableCard label="Published voucher">
        <PublishedVoucher />
      </TableCard>
    </section>
  );
};

export default Vouchers;
