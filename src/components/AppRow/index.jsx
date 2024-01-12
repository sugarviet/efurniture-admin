import { Col, Row } from "antd";
import Proptypes from "prop-types";

const AppRow = ({ children, span }) => {
  return (
    <>
      <Row>
        {children.map((item, index) => (
          <Col span={span} key={index}>
            {item}
          </Col>
        ))}
      </Row>
    </>
  );
};

AppRow.propTypes = {
  children: Proptypes.node,
  span: Proptypes.number,
};

AppRow.defaultProps = {
  span: 12,
};

export default AppRow;
