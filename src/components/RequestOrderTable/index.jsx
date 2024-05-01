import { Table, Button, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect, useState } from "react";
import { withFetchData } from "../../hocs/withFetchData";
import {
  get_orders_re_shipping_api,
  get_orders_request_staff_api,
} from "../../api/orderApi";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import { ORDER_STATE } from "../../constants/order";
import UserBrief from "../UserBrief";
import DetailButton from "../DetailButton";
import OrderDetail from "../../pages/Orders/components/OrderDetail";
import AppModal from "../AppModal";
import ShipperAssignModal from "../ShipperAssignModal";
import { useFetch } from "../../hooks/api-hooks";

const RequestOrderTable = ({ data, onSelectOrders }) => {
  const [openAssignDelivery, setOpenAssignDelivery] = useState(false);
  const { data: reOrderShipping, isLoading: isReOrderLoading } = useFetch(
    get_orders_re_shipping_api()
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const { getColumnSearchProps } = useSearchTableColumn();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  if (isReOrderLoading) return <span>Loading...</span>;

  const handleTableChange = (pagination) => {
    setSearchParams({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  };

  const handleSelectChange = (selectedRowKeys) => {
    const selectedOrders =
      [...data.data].filter((i) =>
        selectedRowKeys.some((key) => i._id === key)
      ) || [];
    onSelectOrders(selectedOrders);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const COLUMN = [
    {
      title: "Order",
      dataIndex: "order_code",
      key: "order_code",
      render: (text) => <span className="text-base font-semibold">{text}</span>,
      ...getColumnSearchProps("order_code"),
    },
    {
      title: "Total",
      render: (_, record) => (
        <span className="text-base">
          {formatCurrency(record.order_checkout.final_total)}
        </span>
      ),
    },
    {
      title: "Customer",
      render: (_, record) => {
        return <UserBrief data={record.order_shipping} />;
      },
    },
    {
      title: "Status",
      dataIndex: ["current_order_tracking", "name"],
      render: (text, record) => {
        return (
          <Tag className="text-bold uppercase" color={ORDER_STATE[text].color}>
            <span className="font-bold">
              {text === "Shipping" ? "Re-shipping" : text}
            </span>
          </Tag>
        );
      },
    },
    {
      title: "Payment status",
      render: (_, record) => {
        const isPaid = record.order_checkout.is_paid;
        const label = isPaid ? "paid" : "not paid";
        return (
          <Tag
            className="text-bold uppercase"
            color={isPaid ? "success" : "error"}
          >
            <span className="font-bold">{label}</span>
          </Tag>
        );
      },
    },
    {
      title: "Create at",
      render: (_, record) => {
        return (
          <span className="text-base">
            {formatDateByDateAndTime(record.createdAt)}
          </span>
        );
      },
    },
    {
      title: "Action",
      render: (_, record) => (
        <DetailButton>
          <OrderDetail data={record} />
        </DetailButton>
      ),
    },
  ];

  return (
    <div>
      <Button
        className="float-right mb-2"
        onClick={() => setOpenAssignDelivery(true)}
        disabled={!selectedRowKeys.length}
      >
        Assign for Delivery
      </Button>
      <Table
        rowKey="_id"
        rowSelection={rowSelection}
        columns={COLUMN}
        pagination={{
          hideOnSinglePage: true,
        }}
        dataSource={[...data.data, ...reOrderShipping.data]}
        onChange={handleTableChange}
      />
      <AppModal setIsOpen={setOpenAssignDelivery} isOpen={openAssignDelivery}>
        <ShipperAssignModal
        setSelectedRowKeys={setSelectedRowKeys}
          orderId={selectedRowKeys}
          setOpenModal={setOpenAssignDelivery}
        />
      </AppModal>
    </div>
  );
};

export default withFetchData(RequestOrderTable, get_orders_request_staff_api);
