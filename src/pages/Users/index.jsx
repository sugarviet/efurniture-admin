import ExcelButton from "@components/ExcelButton";
import PageTitle from "@components/PageTitle";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_user } from "../../api/userApi";

import Proptypes from "prop-types";
import UserTable from "../../components/UserTable";

const PublishedUserTable = withFetchData(UserTable, get_all_user);

const Users = () => {
  return (
    <div>
      <div className="flex justify-between px-3 pt-2 pb-4 items-center">
        <PageTitle title="User management" />
      </div>
      <div className="float-right">
        <ExcelButton data={[]} />
      </div>

      <PublishedUserTable />
    </div>
  );
};

Users.propTypes = {
  data: Proptypes.object,
};

export default Users;
