import { Space, Table } from "antd";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import ChangeStatusButton from "../ChangeStatusButton";
import { isAdmin } from "../../utils/getCurrentUserRole";
import {
  draft_flash_sale,
  get_all_flash_sale,
  publish_flash_sale,
  remove_flash_sale,
} from "../../api/flashsaleApi";
import EditFlashsaleForm from "../EditFlashsaleForm";
import DeleteButton from "../DeleteButton";
import { formatDateByDateAndTime, formatGMTDate } from "../../utils/formatDate";
const FlashSaleTable = ({ data, onEdit, published }) => {
  const admin = isAdmin();
  console.log(data);
  const { getColumnSearchProps } = useSearchTableColumn();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    // {
    //   title: "Furniture",
    //   render: (text) => <span className="text-xs">Chair x 3, Sofa x 1</span>,
    // },
    {
      title: "Furniture",
      width: '15%',
      render: (_, record) => (
        <div>
          {record.products.map(product => (
            <span key={product._id} className="text-xs block w-full">Chair x {product.count}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDay",
      key: "startDay",
      render: (text) => {

        return <span className="text-xs">{formatGMTDate(text)}</span>
      },
    },
    {
      title: "End Date",
      dataIndex: "endDay",
      key: "endDay",
      render: (text) => <span className="text-xs">{formatGMTDate(text)}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (text, record) => (
        <Space className="flex gap-4">
          <EditButton>
            <EditFlashsaleForm />
          </EditButton>
          <DeleteButton url={remove_flash_sale()} notiType="flashsale" notiAction="delete" refreshKey={get_all_flash_sale()} id={record._id} />
          {/* {admin && !published ? (
            <ChangeStatusButton
              url={publish_flash_sale(record._id)}
              resetPublishkey={get_all_flash_sale()}
              resetDraftKey={get_all_flash_sale()}
              type="flashsales"
              action="publish"
            >
              Publish
            </ChangeStatusButton>
          ) : (
            admin && (
              <ChangeStatusButton
                url={draft_flash_sale(record._id)}
                resetPublishkey={get_all_flash_sale()}
                resetDraftKey={get_all_flash_sale()}
                type="flashsales"
                action="draft"
              >
                Draft
              </ChangeStatusButton>
            )
          )} */}
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
  data: PropTypes.object,
  onEdit: PropTypes.func,
};

export default FlashSaleTable;
