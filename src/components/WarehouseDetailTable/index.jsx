import { Input, Table, Button, Space, Switch } from "antd";
import PropTypes from "prop-types";
import TableCard from "../TableCard";
import EditableInput from "../EditableInput";
import { add_more_stock_product, get_first_warehouse, remove_product_from_warehouse } from "../../api/warehouseApi";
import { update_lowstock_qty_in_warehouse } from "../../api/warehouseApi";
import { get_warehouse_detail } from "../../api/warehouseApi";
import AddProductToWarehouseForm from "../../pages/WarehouseDetail/components/AddProductToWarehouseForm";
import useWarehouse from "../../hooks/useWarehouse";
import { PlusCircleFilled, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import AppModal from "../AppModal";
import { isAdmin } from "../../utils/getCurrentUserRole";
import DeleteButton from "../DeleteButton";
import { get_draft_product, get_published_product, remove_draft_product } from "../../api/productApi";
import RemoveProductWarehouseButton from "../RemoveProductWarehouseButton";
import { withFetchData } from "../../hocs/withFetchData";
import ProductTable from "../ProductTable";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { formatCurrency } from "../../utils/formatCurrency";
import DetailButton from "../DetailButton";
import WarehouseProductDetail from "../WarehouseProductDetail";
import EditWarehouseForm from "../EditWarehouseForm";
import { useFetch } from "../../hooks/api-hooks";
const PublishedProductTable = withFetchData(
  ProductTable,
  get_published_product
);
const WarehouseDetailTable = ({ data }) => {
  const admin = isAdmin();

  const { handleSwitchNotification } = useWarehouse(data._id)
  const [openEditWarehouseModal, setopenEditWarehouseModal] = useState(false);

  console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn()
  const COLUMNS = [
    {
      title: "Name",
      dataIndex: ["product", "name"],
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Thumb",
      dataIndex: ["product", "thumb"],

      key: "thumb",
      render: (text, record) => (
        <img
          src={record.product.thumbs[0]}
          alt={record.product.name}
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        />
      ),
    },
    {
      title: 'Color',

      render: (text, record) => (
        <div className="flex gap-2">
          {record.product.variation.map(property => <div key={property._id} style={{ backgroundColor: property.value, width: 20, height: 20, borderRadius: '50%' }} />)}
        </div>
      )
    },
    {
      title: "Price",
      dataIndex: ['product', "regular_price"],
      key: "regular_price",
      render: (text) => formatCurrency(text),
    },
    {
      title: "Sale Price",
      dataIndex: ['product', "sale_price"],
      key: "sale_price",
      render: (text) => formatCurrency(text),
    },
    {
      title: "Description",
      dataIndex: ['product', "description"],

      render: (text, record) => (
        <span className="text-[#959798] text-xs">{text}</span>
      ),
    },
    {
      title: "Actions",
      render: (text) => (
        <Space className="flex gap-4">
          <DetailButton>
            <WarehouseProductDetail productId={record._id}/>

          </DetailButton>
        </Space>
      ),
    },
  ]

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <TableCard label={`${data.location} - ${data.district}`}  addMoreButton={
          admin ? null :
          <Button
            className="flex items-center px-4 py-4"
            type="link"
            onClick={() => setopenEditWarehouseModal(true)}
          >
            Edit warehouse <EditOutlined />
          </Button>
        }>
          <Table
            rowKey="_id"
            columns={COLUMNS}
            dataSource={data.products}
            pagination={{ hideOnSinglePage: true }}
          />
          {/* <PublishedProductTable /> */}
        </TableCard>
      </div>

      <AppModal isOpen={openEditWarehouseModal} setIsOpen={setopenEditWarehouseModal}>
    
        {/* {openEditWarehouseModal ? <AddProductToWarehouseForm id={data._id} /> : null } */}
        {openEditWarehouseModal ? 
        <EditWarehouseForm data={data}/>
          :null
        }

      </AppModal>
    </div>
  );
};

WarehouseDetailTable.propTypes = {
  data: PropTypes.array,
};
export default WarehouseDetailTable;
