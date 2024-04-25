import { Space, Table, Tag } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import {
  get_all_flash_sale,
  remove_flash_sale,
} from "../../api/flashsaleApi";
import EditFlashsaleForm from "../EditFlashsaleForm";
import DeleteButton from "../DeleteButton";
import { formatGMTDate } from "../../utils/formatDate";
const FlashSaleTable = ({ data, onEdit, published }) => {
  console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn();

  const FLASH_SALE_STATUS = {
    0: {
      name: 'Up comming',
      color: 'blue'
    },
    1: {
      name: 'On going',
      color: 'green'
    },
    2: {
      name: 'finished',
      color: 'yellow'
    },
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Furniture",
      width: '25%',
      render: (_, record) => (
        <div>
          {record.products.map(product => (
            <span key={product._id} className="text-báe block w-full font-bold">{product.productId.name}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDay",
      key: "startDay",
      render: (text) => {

        return <span className="text-xs font-bold">{formatGMTDate(text)}</span>
      },
    },
    {
      title: "End Date",
      dataIndex: "endDay",
      key: "endDay",
      render: (text) => <span className="text-xs font-bold">{formatGMTDate(text)}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <Tag color={FLASH_SALE_STATUS[text].color}><span className="text-xs font-bold uppercase">{FLASH_SALE_STATUS[text].name}</span></Tag>,
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (text, record) => (
        <Space className="flex gap-4">

          {record.status === 1 ? null :
          <>
          <EditButton >
            <EditFlashsaleForm data={record} />
          </EditButton>
          <DeleteButton url={remove_flash_sale()} notiType="flashsale" notiAction="delete" refreshKey={get_all_flash_sale()} id={record._id} />
          
          </>
          
          }
          
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 10,
          hideOnSinglePage: true,
        }}
      />
    </div>
  );
};

FlashSaleTable.propTypes = {
  data: PropTypes.array,
  onEdit: PropTypes.func,
};

export default FlashSaleTable;
