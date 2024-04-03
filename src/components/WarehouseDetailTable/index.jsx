import { Input, Table } from "antd";
import PropTypes from "prop-types";
import TableCard from "../TableCard";
import EditableInput from "../EditableInput";
import { add_more_stock_product } from "../../api/warehouseApi";
import { update_lowstock_qty_in_warehouse } from "../../api/warehouseApi";
import { get_warehouse_detail } from "../../api/warehouseApi";
import AddProductToWarehouseForm from "../../pages/WarehouseDetail/components/AddProductToWarehouseForm";
import { Switch } from 'antd';
import useWarehouse from "../../hooks/useWarehouse";

const WarehouseDetailTable = ({ data }) => {

  const {handleSwitchNotification, handleUpdateProductLowstock} = useWarehouse(data._id)


  const columns = [
    {
      title: "Product name",
      dataIndex: "product",
      key: "product",
      render: (text) => (
         <span>{text.name}</span>
      ),

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
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text, record) => (
        <EditableInput
          defaultValue={text}
          name={"stock"}
          url={add_more_stock_product(data._id)}
          record={{ product: record.product._id, stock: record.stock }}
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
      title: "Received Stock",
      dataIndex: "isNoti",
      key: "isNoti",
      render: (text, record) => (
        <Switch onChange={(e) => handleSwitchNotification(e, record.product._id)} defaultChecked={text}/>
      ),
    },
  ];
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <TableCard label={`${data.location} - ${data.district}`}>
          <Table
            rowKey="_id"
            columns={columns}
            dataSource={data.products}
            pagination={{ hideOnSinglePage: true }}
          />
        </TableCard>
      </div>
      <div className="w-[27rem]">
        <AddProductToWarehouseForm id={data._id}/>
      </div>
    </div>
  );
};

WarehouseDetailTable.propTypes = {
  data: PropTypes.array,
};
export default WarehouseDetailTable;
