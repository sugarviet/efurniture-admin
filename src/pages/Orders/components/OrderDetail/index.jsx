import Proptypes from "prop-types";
import useGetOrderStatus from "../../hooks/useGetOrderStatus";

const init = {
  key: 1,
  id: 1,
  product: "Product 1",
  user: "User 1",
  address: "Address 1",
  method: "Credit Card",
  status: "pending",
};

const OrderDetail = ({ id }) => {
  const orderDetails = init;
  const { handleGetOrderStatus } = useGetOrderStatus();

  return (
    <div>
      <div className="p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Order Detail - #{id}</h1>
        <p className="mb-2 flex gap-2">
          <strong>Product:</strong> <span>{orderDetails.product}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>User:</strong> <span>{orderDetails.user}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Address:</strong> <span>{orderDetails.address}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Payment Method:</strong> <span>{orderDetails.method}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Status:</strong> {handleGetOrderStatus(orderDetails.status)}
        </p>
      </div>
    </div>
  );
};

OrderDetail.propTypes = {
  id: Proptypes.string,
};

export default OrderDetail;
