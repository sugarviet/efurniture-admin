import PropTypes from "prop-types";

const LinkNewTab = ({ to, children }) => {
    return (
        <a href={to} target="_blank" rel="noreferrer" className="underline">{children}</a>
    )
}

LinkNewTab.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  };
  

export default LinkNewTab