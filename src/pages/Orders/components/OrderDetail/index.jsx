import Proptypes from "prop-types";
import useGetOrderStatus from "../../hooks/useGetOrderStatus";
import { useOrderDetail } from "../../hooks/useOrderDetail";

import Loading from '@components/Loading';

const OrderDetail = ({ id }) => {
  const {order, isLoading} = useOrderDetail(id);
  const { handleGetOrderStatus } = useGetOrderStatus();

  if(isLoading) return <Loading />

  return (
    <div>
      <div className="p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Order Detail - #{id}</h1>
        <p className="mb-2 flex gap-2">
          <strong>Product:</strong> <span>{order.product}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>User:</strong> <span>{order.user}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Address:</strong> <span>{order.address}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Payment Method:</strong> <span>{order.method}</span>
        </p>
        <p className="mb-2 flex gap-2">
          <strong>Status:</strong> {handleGetOrderStatus(order.status)}
        </p>
      </div>
    </div>
  );
};

OrderDetail.propTypes = {
  id: Proptypes.string,
};

export default OrderDetail;
