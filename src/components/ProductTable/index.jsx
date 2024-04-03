import { Space, Table } from "antd";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import { isAdmin } from "../../utils/getCurrentUserRole";
import {
  get_published_product,
  publish_product_admin,
  draft_product_admin,
  get_draft_product,
  edit_product,
} from "../../api/productApi";
import ChangeStatusButton from "../ChangeStatusButton";
import EditableInput from "../EditableInput";
const { Column } = Table;

const ProductTable = ({ data, onEdit, published }) => {
  const admin = isAdmin();

  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={data.data}
        pagination={{ pageSize: 10, hideOnSinglePage: true }}
        bordered
      >
        <Column
          title="Product Name"
          dataIndex="name"
          key="name"
          render={(text, record) => {
            const columnName = "name";

            return (
              <EditableInput
                defaultValue={text}
                name={columnName}
                url={edit_product(record.slug)}
                record={record}
                notiType="product"
                notiAction="edit"
                refreshKey={get_published_product}
              />
            );
          }}
        />
        <Column
          title="Image"
          dataIndex="thumbs"
          key="thumbs"
          render={(text, record) => (
            <img src={record.thumbs[0]} alt={record.name} width="100" />
          )}
        />
        <Column
          title="Price"
          dataIndex="regular_price"
          key="regular_price"
          render={(text, record) => {
            const columnName = "regular_price";
            return (
              <EditableInput
                defaultValue={text}
                name={columnName}
                url={edit_product(record.slug)}
                record={record}
                refreshKey={get_published_product}
                type="number"
              />
            );
          }}
          sorter={(a, b) => a.price - b.price}
        />
        <Column
          title="Action"
          key="action"
          width="30%"
          render={(text, record) => (
            <Space className="flex gap-4">
              <EditButton onClick={() => onEdit(record)} />
              {admin && !published ? (
                <ChangeStatusButton
                  url={publish_product_admin(record.type.slug, record.slug)}
                  resetPublishkey={get_published_product()}
                  resetDraftKey={get_draft_product()}
                  type="products"
                  action="publish"
                >
                  Publish
                </ChangeStatusButton>
              ) : (
                admin && (
                  <ChangeStatusButton
                    url={draft_product_admin(record.type.slug, record.slug)}
                    resetPublishkey={get_published_product()}
                    resetDraftKey={get_draft_product()}
                    type="products"
                    action="draft"
                  >
                    Draft
                  </ChangeStatusButton>
                )
              )}
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func,
  published: PropTypes.bool,
};

export default ProductTable;
