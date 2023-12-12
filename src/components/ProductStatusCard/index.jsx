import { Avatar, Card, Tag } from "antd";
import PropTypes from "prop-types";

const orderStatus = {
    pending: {
        title: "Pending",
        color: "yellow",
    },
    shipping:{
        title: "Shipping",
        color: "blue"
    },
    done:{
        title: "Done",
        color: "green"
    }
}

const ProductStatusCard = ({ data }) => {
  const {
    image = "",
    name = "",
    quantity = 0,
    total = 0,
    payment = "",
    manufacturer = "",
    status=""
  } = data;
  return (
    <Card title={manufacturer} className="w-full">
      <div className="flex">
        <div className="flex gap-5 w-full">
          <Avatar shape="square" size={80} src={image} alt={name} />
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p>Quantity: {quantity}</p>
            <p>Total price: {total}$</p>
            <p>Payment: {payment}</p>
          </div>
        </div>

        <div className="float-right">
          <Tag color={orderStatus[status].color}>{orderStatus[status].title}</Tag>
        </div>
      </div>
    </Card>
  );
};

ProductStatusCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    total: PropTypes.number,
    payment: PropTypes.string,
    price: PropTypes.number,
    manufacturer: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default ProductStatusCard;
