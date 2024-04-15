import { Input, Table, Button } from "antd";
import PropTypes from "prop-types";
import TableCard from "../TableCard";
import EditableInput from "../EditableInput";
import { add_more_stock_product, get_first_warehouse, get_product_in_warehouse, remove_product_from_warehouse } from "../../api/warehouseApi";
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
import { get_published_product, remove_draft_product } from "../../api/productApi";
import RemoveProductWarehouseButton from "../RemoveProductWarehouseButton";
import { withFetchData } from "../../hocs/withFetchData";
import ProductTable from "../ProductTable";
import { useFetch } from "../../hooks/api-hooks";
import { formatCurrency } from "../../utils/formatCurrency";
import EditableInputNumber from "../EditableInputNumber";

const PublishedProductTable = withFetchData(
  ProductTable,
  get_published_product
);
const WarehouseProductDetail = ({ productId }) => {
  const admin = isAdmin();
  const {data: warehouse, isLoading:isWarehouseLoading} = useFetch(get_first_warehouse())
  console.log(warehouse);
  const { handleSwitchNotification } = useWarehouse();
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  // console.log(data);

  const {data, isLoading} = useFetch(get_product_in_warehouse(productId))

  console.log(data);

  if(isLoading) return;
  if(isWarehouseLoading) return;


  const STAFF_COLUMNS = [
    {
      title: "Product name",
      dataIndex: ['product', 'name'],
      key: "product",
      render: (text) => <span className="text-base">{text}</span>,

    },
    {
      title: 'Thumb',
      dataIndex: 'product',
      key: 'thumb',
      render: (text) => (
        <img src={text.thumbs[0]} alt={text.name} style={{ width: 100, height: 100, objectFit: 'contain' }} />
      )
    },
    {
      title: 'Color',

      render: (text, record) => (
        <div style={{ backgroundColor: record.variation[0] ? record.variation[0].color : 'black', width: 20, height: 20, borderRadius: '50%', border: '1px solid #d3d3d3' }} />
      )
    },
    {
      title: 'Sell price',

      render: (text, record) => (
       <span>{formatCurrency(record.product.sale_price + record.variation[0].sub_price)}</span>
      )
    },
   
   
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text, record) => (
        <EditableInputNumber
          defaultValue={text}
          name={"stock"}
          url={add_more_stock_product()}
          record={{ stock: record.stock, code: record.code }}
          notiType="warehouse"
          notiAction="update_stock"
         
          refreshKey={() => get_warehouse_detail(warehouse._id)}
        />
      ),
    },
    {
      title: "Sold",
      dataIndex: 'sold',
      key: "sold",
    },
    {
      title: "Stock Notification Threshold",
      dataIndex: "lowStock",
      key: "lowStock",
      render: (text, record) => (
        <EditableInputNumber
          defaultValue={text}
          name={"lowStock"}
          url={update_lowstock_qty_in_warehouse()}
          record={{ code: record.code, lowStock: record.lowStock }}
          notiType="warehouse"
          notiAction="update_stock"
    
          refreshKey={() => get_warehouse_detail(warehouse._id)}
        />
       
      ),
    },
    {
      title: "Received Stock",
      dataIndex: "isNoti",
      key: "isNoti",
      render: (text, record) => (
        <Switch onChange={(e) => handleSwitchNotification(e, record.code)} defaultChecked={text} />
      ),
    },
    // {
    //   title: "Actions",
    //   render: (_, record) => <RemoveProductWarehouseButton url={remove_product_from_warehouse(data._id)} notiType="warehouse" notiAction="remove_product" refreshKey={get_warehouse_detail({
    //     id: data._id
    //   })} data={{ 
    //     code: record.code,
    //    }} />,
    // },
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
       
          <Table
            rowKey="_id"
            columns={admin ? ADMIN_COLUMNS : STAFF_COLUMNS}
            dataSource={data}
            pagination={{ hideOnSinglePage: true }}
          />
    
      </div>

   
    </div>
  );
};

WarehouseProductDetail.propTypes = {
  data: PropTypes.array,
};
export default withFetchData(WarehouseProductDetail, get_first_warehouse);
