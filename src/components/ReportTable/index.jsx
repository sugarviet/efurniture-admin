import { Checkbox, Space, Table } from "antd";
import { formatDateByDateAndTime } from "../../utils/formatDate";
import DetailButton from "../DetailButton";
import ReportDetail from "../ReportDetail";
const ReportTable = ({data}) => {
    console.log(data);
    const columns = [
        {
          title: "Name",
          dataIndex: ["requester", 'name'],
          key: "name",
        },
    
        {
          title: "Note",
          dataIndex: "note",
          key: "note",
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt) => <span>{formatDateByDateAndTime(createdAt)}</span>,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
              <Space size="middle">
      
                <DetailButton>
                    <ReportDetail data={record}/>    
                </DetailButton>
             
              </Space>
            ),
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (text) => (
              <Checkbox checked={text === 1}/>
            ),
          },
       
      ];
  return (
    <div>
      <Table rowKey="_id" dataSource={data.data} columns={columns} />
        
    </div>
  )
}

export default ReportTable