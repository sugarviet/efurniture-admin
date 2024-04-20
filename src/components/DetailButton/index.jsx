import { useState } from 'react'
import AppModal from '../AppModal';
import PropTypes from "prop-types";

const DetailButton = ({ children, modalWidth = 800 }) => {
  const [isOpen, setIsOpenDetail] = useState(false);
  return (
    <>
      <span onClick={() => setIsOpenDetail(true)} className='font-bold cursor-pointer hover:text-blue-700 text-blue-600'>Detail</span>
      <AppModal isOpen={isOpen} setIsOpen={setIsOpenDetail} width={modalWidth}>
        {isOpen ? children : null}
      </AppModal>
    </>
  )
}
DetailButton.propTypes = {
  children: PropTypes.node,
  modalWidth: PropTypes.number
};

export default DetailButton