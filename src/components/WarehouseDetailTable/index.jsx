import { Input, Table, Button } from "antd";
import PropTypes from "prop-types";
import TableCard from "../TableCard";
import EditableInput from "../EditableInput";
import { add_more_stock_product } from "../../api/warehouseApi";
import { update_lowstock_qty_in_warehouse } from "../../api/warehouseApi";
import { get_warehouse_detail } from "../../api/warehouseApi";
import AddProductToWarehouseForm from "../../pages/WarehouseDetail/components/AddProductToWarehouseForm";
import { Switch } from 'antd';
import useWarehouse from "../../hooks/useWarehouse";
import { PlusCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import AppModal from "../AppModal";
import { isAdmin } from "../../utils/getCurrentUserRole";
import DeleteButton from "../DeleteButton";
import { get_draft_product, remove_draft_product } from "../../api/productApi";

const WarehouseDetailTable = ({ data }) => {
  const admin = isAdmin();
  const { handleSwitchNotification } = useWarehouse(data._id)
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  const STAFF_COLUMNS = [
    {
      title: "Product name",
      dataIndex: ['product', 'name'],
      key: "product",

      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search product name"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <button
            type="button"
            onClick={() => {
              clearFilters();
            }}
            style={{ width: 90, marginRight: 8 }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => {
              confirm();
            }}
            style={{ width: 90 }}
          >
            Filter
          </button>
        </div>
      ),
      onFilter: (value, record) => record.product.name.toLowerCase().includes(value.toLowerCase()),
      render: (text) => text,

    },
    {
      title: 'Thumb',
      dataIndex: 'product',
      key: 'thumb',
      render: (text) => (
        <img src={text.thumbs[0]} alt={text.name} width="100" />
      )
    },
    {
      title: 'Color',

      render: (text, record) => (
        <div style={{ backgroundColor: record.variation[0] ? record.variation[0].color : 'black', width: 20, height: 20, borderRadius: '50%' }} />
      )
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text, record) => (
        <EditableInput
          defaultValue={text}
          name={"stock"}
          url={add_more_stock_product(data._id)}
          record={{ product: record.product._id, stock: record.stock, code: record.code }}
          notiType="warehouse"
          notiAction="update_stock"
          type="number"
          refreshKey={() => get_warehouse_detail(data._id)}
        />
      ),
    },
    {
      title: "Low Stock",
      dataIndex: "lowStock",
      key: "lowStock",
      render: (text, record) => (
        <EditableInput
          defaultValue={text}
          name={"lowStock"}
          url={update_lowstock_qty_in_warehouse(data._id)}
          record={{ product: record.product._id, lowStock: record.lowStock }}
          notiType="warehouse"
          notiAction="update_stock"
          type="number"
          refreshKey={() => get_warehouse_detail(data._id)}
        />
      ),
    },
    {
      title: "Sold",
      dataIndex: 'sold',
      key: "sold",
    },
    {
      title: "Received Stock",
      dataIndex: "isNoti",
      key: "isNoti",
      render: (text, record) => (
        <Switch onChange={(e) => handleSwitchNotification(e, record.product._id)} defaultChecked={text} />
      ),
    },
    {
      title: "Actions",
      render: (_, record) => <DeleteButton url={remove_draft_product()} notiType="product" notiAction="delete" refreshKey={get_draft_product()} id={record.slug} />,
    },
  ];
  const ADMIN_COLUMNS = [
    {
      title: "Product name",
      dataIndex: ['product', 'name'],
      key: "product",

      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search product name"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <button
            type="button"
            onClick={() => {
              clearFilters();
            }}
            style={{ width: 90, marginRight: 8 }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => {
              confirm();
            }}
            style={{ width: 90 }}
          >
            Filter
          </button>
        </div>
      ),
      onFilter: (value, record) => record.product.name.toLowerCase().includes(value.toLowerCase()),
      render: (text) => text,

    },
    {
      title: 'Thumb',
      dataIndex: 'product',
      key: 'thumb',
      render: (text) => (
        <img src={text.thumbs[0]} alt={text.name} width="100" />
      )
    },
    {
      title: 'Color',

      render: (text, record) => (
        <div style={{ backgroundColor: record.variation[0] ? record.variation[0].color : 'black', width: 20, height: 20, borderRadius: '50%' }} />
      )
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Low Stock",
      dataIndex: "lowStock",
      key: "lowStock",
    },
    {
      title: "Sold",
      dataIndex: 'sold',
      key: "sold",
    },
  ];
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <TableCard label={`${data.location} - ${data.district}`}  addMoreButton={
          admin ? null :
          <Button
            className="flex items-center px-4 py-4"
            type="link"
            onClick={() => setOpenAddProductModal(true)}
          >
            Add more product <PlusCircleFilled />
          </Button>
        }>
          <Table
            rowKey="_id"
            columns={admin ? ADMIN_COLUMNS : STAFF_COLUMNS}
            dataSource={data.products}
            pagination={{ hideOnSinglePage: true }}
          />
        </TableCard>
      </div>

      <AppModal isOpen={openAddProductModal} setIsOpen={setOpenAddProductModal}>
    
        {openAddProductModal ? <AddProductToWarehouseForm id={data._id} /> : null }
      </AppModal>
      {/* <div className="w-[27rem]">
        <AddProductToWarehouseForm id={data._id} />
      </div> */}
    </div>
  );
};

WarehouseDetailTable.propTypes = {
  data: PropTypes.array,
};
export default WarehouseDetailTable;
