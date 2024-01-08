import Proptypes from 'prop-types';

const OrderDetail = ({id}) => {
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

OrderDetail.propTypes = {
    id: Proptypes.string,
}

export default OrderDetail
