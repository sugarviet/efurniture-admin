import { Card, Select } from "antd";
import Proptypes from "prop-types";

const PAYMENT_STATUS = [
    {
        id: 1,
        tile: 'Processing',
        value: 'processing',
    },
    {
        id: 2,
        tile: 'Canceled',
        value: 'canceled',
    },
    {
        id: 3,
        tile: 'Completed',
        value: 'completed',
    },
]
const FULFILLMENT_STATUS = [
    {
        id: 1,
        tile: 'Unfulfilled',
        value: 'unfulfilled',
    },
    {
        id: 2,
        tile: 'Fulfilled',
        value: 'fulfilled',
    },
    {
        id: 3,
        tile: 'Pending',
        value: 'pending',
    },
]
const OrderStatus = ({ id, paymentStatus, fulfilStatus }) => {
    const handleChangePaymentStatus = (value) => {
        console.log(`selected ${id} & ${value}`);
    }
  return (
    <Card>
    <p className="text-2xl my-3 font-bold">Order Status</p>
    <div className="flex flex-col gap-2">
    <p className="font-semibold">Payment status</p>
      <Select className="w-full" defaultValue={paymentStatus} onChange={handleChangePaymentStatus} title="asdds">
        {PAYMENT_STATUS.map(status => (
            <Select.Option value={status.value} key={status.id}>{status.tile}</Select.Option>
        ))}
      </Select>
    </div>

    <div className="flex flex-col gap-2 mt-3">
        <p className="font-semibold">Fulfillment status</p>
      <Select className="w-full" defaultValue={fulfilStatus}>
        {FULFILLMENT_STATUS.map(status => (
            <Select.Option value={status.value} key={status.id}>{status.tile}</Select.Option>
        ))}
      </Select>
    </div>
    </Card>
  );
};

OrderStatus.propTypes = {
  id: Proptypes.number.isRequired,
  paymentStatus: Proptypes.string,
  fulfilStatus: Proptypes.string,
};

OrderStatus.defaultValue = {
    paymentStatus: 'processing',
    fulfilStatus: 'unfulfilled',
}

export default OrderStatus;
