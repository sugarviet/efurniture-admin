import Proptypes from "prop-types";

const PageTitle = ({ title }) => {
  return <h1 className='text-2xl font-bold'>{title}</h1>;
};

PageTitle.propTypes = {
  title: Proptypes.string,
};

export default PageTitle;
