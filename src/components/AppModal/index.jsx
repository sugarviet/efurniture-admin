import ReactDom from 'react-dom';
import { Modal } from "antd";
import PropTypes from "prop-types";

const AppModal = ({ children, isOpen, setIsOpen }) => {

  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };


  return ReactDom.createPortal(
    <>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        open={isOpen}
        footer={null}
      >
        <div className='p-2'>
          {children}
        </div>
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default AppModal;


AppModal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

AppModal.defaultProps = {
  isOpen: false,
};