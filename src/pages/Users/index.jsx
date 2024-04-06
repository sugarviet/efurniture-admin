import ExcelButton from "@components/ExcelButton";
import PageTitle from "@components/PageTitle";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_user } from "../../api/userApi";
import { Button, Table, Tag } from "antd";

import Proptypes from "prop-types";
import UserTable from "../../components/UserTable";
import TableCard from "../../components/TableCard";
import { PlusCircleFilled } from "@ant-design/icons";
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
