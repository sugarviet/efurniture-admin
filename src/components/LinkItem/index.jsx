import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkItem({ to, children }) {
    return (
        <Link
        to={to}
        className="link"
      >
        {children}
      </Link>
    );
  }

  LinkItem.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
  };
  
  
  export default LinkItem;
  