import { withFetchData } from "@hocs/withFetchData";
import { get_all_roles } from "../../api/roleApi";
import { Table, Form, Button } from "antd";
import PropTypes from "prop-types";
import FormSelect from "../../components/FormSelect";

const Role = ({ data }) => {
  console.log(data);
  const onFinish = (values) => {
    console.log(values);
  };
  const selectOptions = data.map(item => ({
    label: `${item.role} ${item.action}`,
    value: item._id
  }));


  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Roles Management</h1>
      </div>

      <div>
        {/* <Table /> */}

        <Form layout="vertical" onFinish={onFinish}>
        <FormSelect
          label="role"
          name="role"
          mode="multiple"
          options={selectOptions}
        />

        <Button htmlType="submit">finish</Button>
        </Form>
      </div>
    </section>
  );
};

Role.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(Role, get_all_roles);
