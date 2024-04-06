import { Space, Table } from "antd";
import EditButton from "../EditButton";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatCurrency";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { isAdmin } from "../../utils/getCurrentUserRole";
import {
  get_published_product,
  publish_product_admin,
  draft_product_admin,
  get_draft_product,
  edit_product,
  remove_draft_product,
} from "../../api/productApi";
import AppModal from "@components/AppModal";
import ChangeStatusButton from "../ChangeStatusButton";
import EditableInput from "../EditableInput";
import DeleteButton from "../DeleteButton";
import { useState } from "react";
import UpdateProductForm from "../UpdateProductForm";
import { CreatingProductProvider } from "../../pages/CreatingProduct/CreatingProductContext";

const { Column } = Table;

const ProductTable = ({ data, onEdit, published }) => {
  const admin = isAdmin();
  const { getColumnSearchProps } = useSearchTableColumn();

  const STAFF_COLUMNS = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Thumb",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img
          src={record.thumbs[0]}
          alt={record.name}
          style={{ width: 100, height: 100 }}
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "regular_price",
      key: "regular_price",

    },
    {
      title: "Sale Price",
      dataIndex: "sale_price",
      key: "sale_price",

    },
    {
      title: "Description",
      render: (_, record) => (
        <span className="text-[#959798] text-xs">{record.description}</span>
      ),
    },
    (!admin && !published) && {
      title: "Actions",
      render: (_, record) => (
        <Space className="flex gap-4">
          <EditButton>
            <CreatingProductProvider>
              <UpdateProductForm data={record} />
            </CreatingProductProvider>
          </EditButton>
        </Space>
      ),
    },
  ].filter(Boolean);


  const ADMIN_COLUMNS = [
    ...STAFF_COLUMNS,
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Space className="flex gap-4">
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
                published={published}
                >
                  Draft
                </ChangeStatusButton>
              )
            )}


            {admin && !published ? (
              <DeleteButton url={remove_draft_product()} notiType="product" notiAction="delete" refreshKey={get_draft_product()} id={record.slug} />
            ) : null
            }
          </Space>
        )
      },
    },
  ]

  return (
    <div>
      {/* <Table
        rowKey="_id"
        dataSource={data.data}
        pagination={{ pageSize: 10, hideOnSinglePage: true }}
        bordered
      >
        <Column
          title="Product Name"
          dataIndex="name"
          key="name"
          {...getColumnSearchProps("name")}

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
          title="Price"
          dataIndex="sale_price"
          key="sale_price"
          render={(text, record) => {
            const columnName = "sale_price";
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

              <EditButton>
                <CreatingProductProvider>
                  <UpdateProductForm data={record} />
                </CreatingProductProvider>
              </EditButton>

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


              {admin && !published ? (
                <DeleteButton url={remove_draft_product()} notiType="product" notiAction="delete" refreshKey={get_draft_product()} id={record.slug} />
              ) : null
              }
            </Space>
          )}
        />
      </Table> */}

      <Table rowKey="_id"
        dataSource={data.data}
        pagination={{ pageSize: 10, hideOnSinglePage: true }}
        bordered columns={admin ? ADMIN_COLUMNS : STAFF_COLUMNS} />
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func,
  published: PropTypes.bool,
};

export default ProductTable;
