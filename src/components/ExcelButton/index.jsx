import { CSVLink } from "react-csv";
import Proptypes from "prop-types";
import { ContainerOutlined } from "@ant-design/icons";

const ExcelButton = ({ data, headers }) => {
  return (
    <div className="bg-green-600 text-white px-4 py-2 rounded-md w-fit hover:text-white hover:bg-green-700">
      <CSVLink data={data} headers={headers} className="hover:text-white flex gap-2 items-center">
        Export to Excel <ContainerOutlined />
      </CSVLink>
    </div>
  );
};

ExcelButton.propTypes = {
  data: Proptypes.array,
  headers: Proptypes.array,
};

ExcelButton.defaultProps = {
  data: [],
  headers: [],
};

export default ExcelButton;
