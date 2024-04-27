import { Table, Descriptions, Tag } from "antd";
import { formatCurrency } from "../../../../utils/formatCurrency";
import PropTypes from "prop-types";
import { ORDER_STATE } from "../../../../constants/order";

const OrderDetail = ({ data }) => {
  const productColumns = [
    {
      title: "Thumb",
      dataIndex: "thumb",
      key: "thumb",
      render: (text, record) => (
        <img
          src={record.product_id.thumbs[0]}
          alt={record.product_id.name}
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: ["product_id", "name"],
      key: "name",
    },
    {
      title: "Color",
      render: (text, record) => (
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: record.variation[0].color,
          }}
        ></div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Original Price",
      dataIndex: "price",
      key: "price",
      render: (price) => formatCurrency(price),
    },
    {
      title: "Variation Price",
      render: (text, record) => {
        return <span>{formatCurrency(record.variation[0].sub_price)}</span>;
      },
    },
    {
      title: "Total Price",
      render: (text, record) => {
        return (
          <span>
            {formatCurrency(record.variation[0].sub_price + record.price)}
          </span>
        );
      },
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="font-bold text-lg uppercase">### Customer</span>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Order Code">
            {data.order_code}
          </Descriptions.Item>
          <Descriptions.Item label="Total">
            {formatCurrency(data.order_checkout.final_total)}
          </Descriptions.Item>
          <Descriptions.Item label="Paid">
            {formatCurrency(data.order_checkout.paid.paid_amount)}
          </Descriptions.Item>
          <Descriptions.Item label="Payment Status">
            <Tag
              color={data.order_checkout.is_paid ? "success" : "error"}
              className="font-bold"
            >
              {data.order_checkout.is_paid ? "Paid" : "Not Paid"}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Deposit Required">
            <Tag className="font-bold">{data.order_checkout.paid.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Payment Method">
            {data.payment_method}
          </Descriptions.Item>
          <Descriptions.Item label="Shipping Address">
            {data.order_shipping.address}
          </Descriptions.Item>
          <Descriptions.Item label="Shipping Ward">
            {data.order_shipping.ward}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {data.order_shipping.first_name} {data.order_shipping.last_name}
          </Descriptions.Item>

          <Descriptions.Item label="Email">
            {data.order_shipping.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {data.order_shipping.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Order Status">
            <Tag
              color={ORDER_STATE[data.current_order_tracking.name].color}
              className="uppercase font-bold"
            >
              {data.current_order_tracking.name}
            </Tag>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div>
        <span className="font-bold text-lg uppercase">
          ### List order products
        </span>
        <Table
          rowKey="code"
          dataSource={data.order_products}
          columns={productColumns}
          pagination={false}
        />
      </div>

    </div>
  );
};

OrderDetail.propTypes = {
  data: PropTypes.object,
};

export default OrderDetail;
