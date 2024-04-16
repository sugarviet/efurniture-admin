import PropTypes from "prop-types";

const TYPE = {
  color: "* Please choose the color first",
  flashsale: "* Please choose the start day and end day first",
  product_shipping_fee: "* The product will plus 10% shipping fees",


}

const Note = ({ type }) => {
  return (
    <div style={{ color: 'red' }}>
      <span>{TYPE[type]}</span>
    </div>
  )
}

Note.propTypes = {
  type: PropTypes.string,
};

export default Note