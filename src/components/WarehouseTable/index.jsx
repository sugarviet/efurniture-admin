import { Table, Space } from "antd";
import PropTypes from "prop-types";
import LinkItem from "../LinkItem";
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import EditButton from "../EditButton";
import EditWarehouseForm from "../EditWarehouseForm";
import WarehouseProductTable from "../WarehouseProductTable";
const WarehouseTable = ({ data }) => {
  const { getColumnSearchProps } = useSearchTableColumn();
  console.log(data)
  // const columns = [
  //   {
  //     title: "Location",
  //     dataIndex: "location",
  //     key: "location",
  //     render: (text, record) => (
  //       <LinkItem to={`/warehouse/${record._id}`}><span className="text-base">{text}</span></LinkItem>
  //     ),

  //   },
  //   {
  //     title: "District",
  //     dataIndex: "district",
  //     key: "district",
  //     ...getColumnSearchProps("district"),

  //   },
  //   {
  //     title: "Ward",
  //     dataIndex: "ward",
  //     key: "ward",
  //     ...getColumnSearchProps("ward"),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     width: "30%",
  //     render: (text, record) => (
  //       <Space className="flex gap-4">
  //         <EditButton>
  //           <EditWarehouseForm data={record}/>
  //         </EditButton>
  //         {/* <DeleteButton url={remove_flash_sale()} notiType="flashsale" notiAction="delete" refreshKey={get_all_flash_sale()} id={record._id} /> */}
        
  //       </Space>
  //     ),
  //   },
  // ];
  return (
    // <Table
    //   rowKey="_id"
    //   columns={columns}
    //   dataSource={data}
    //   pagination={{ hideOnSinglePage: true }}
    // />
    <WarehouseProductTable />
  );
};

WarehouseTable.propTypes = {
  data: PropTypes.array,
};
export default WarehouseTable;
