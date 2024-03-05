import { withFetchData } from "@hocs/withFetchData";
import { get_all_roles } from "../../api/roleApi";
import { Table } from "antd";
import PropTypes from "prop-types";

const Role = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Roles Management</h1>
      </div>

      <div>
        <Table />
      </div>
    </section>
  );
};

Role.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(Role, get_all_roles);
