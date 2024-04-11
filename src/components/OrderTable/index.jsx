import { Table, Tag, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import UserBrief from "../UserBrief";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import DetailButton from '../DetailButton';
import OrderDetail from "../../pages/Orders/components/OrderDetail";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import PropTypes from "prop-types";

export const ORDER_STATE = [
  {},
  {
    status: "pending",
    color: "warning",
  },
  {
    status: "processing",
    color: "processing",
  },
  {
    status: "shipping",
    color: "purple",
  },
  {
    status: "done",
    color: "success",
  },
  {
    status: "failed",
    color: "error",
  },
  {
    status: "cancelled",
    color: "default",
  },
];

function OrderTable({ data, onDetail }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getColumnSearchProps } = useSearchTableColumn();

  const handleTableChange = (pagination) => {
    setSearchParams({
      page: pagination.current,
      limit: pagination.pageSize,
      type: searchParams.get('type'),
    });   
  };

  const handleStatusFilter = (status) => {        setSearchParams(() => ({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      type: status, 

    }));
};

  const columns = [
    {
      title: "Order",
      dataIndex: 'order_code',
      key: 'order_code',
      render: (text) => (
        <span className="text-xs font-semibold">{text}</span>
      ),
      ...getColumnSearchProps("order_code"),

    },
    {
      title: "Total",
      render: (_, record) => (
        <span className="text-xs">
          {formatCurrency(record.order_checkout.final_total)}
        </span>
      ),
    },
    {
      title: "Customer",
      render: (_, record) => {
        return (
          <UserBrief data={record.order_shipping}/>

        )
        
      },
    },
    {
      title: "Status",
      dataIndex: "order_tracking.length",
      render: (_, record) => {
        const { status, color } = ORDER_STATE[record.order_tracking.length];
        return (
          <Tag className="text-bold uppercase" color={color} onClick={() => handleStatusFilter(status)}>
            {status}
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
            {label}
          </Tag>
        );
      },
    },
    {
      title: "Create at",
      render: (_, record) => {
        return (
          <span className="text-xs">
            {formatDateByDateAndTime(record.createdAt)}
          </span>
        );
      },
    },
    {
      title: "Action",
      render: (_, record) => (
        <DetailButton>
            <OrderDetail data={record}/>
          </DetailButton>
      ),
    },
  ];
  return (
    <div>

      <div className="float-right flex gap-2 items-center mb-3">
        <span className='text-base'>Status:</span>
      <Select
      style={{
        width: 120,
      }}
      defaultValue={searchParams.get('type')}
      onChange={handleStatusFilter}
      options={[
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'pending',
          label: 'Pending',
        },
        {
          value: 'processing',
          label: 'Processing',
        },
        {
          value: 'shipping',
          label: 'Shipping',
        },
      
      ]}
    />

      </div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data.data}
        onChange={handleTableChange}
        pagination={{
          current: searchParams.get("page"),
          pageSize: searchParams.get("limit"),
          total: data.total,
        }}
      />
    </div>

    
  );
}

OrderTable.propTypes = {
  data: PropTypes.array,
  onDetail: PropTypes.func,

};

export default OrderTable;
