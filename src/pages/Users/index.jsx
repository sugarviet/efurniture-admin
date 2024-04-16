import { withFetchData } from "@hocs/withFetchData";
import { get_all_user } from "../../api/userApi";
import Proptypes from "prop-types";
import UserTable from "../../components/UserTable";
import TableCard from "../../components/TableCard";
const PublishedUserTable = withFetchData(UserTable, get_all_user);

const Users = () => {
  return (
    <div>

      <TableCard label={'User management'}>
        <PublishedUserTable />
      </TableCard>
    </div>
  );
};

Users.propTypes = {
  data: Proptypes.object,
};

export default Users;
