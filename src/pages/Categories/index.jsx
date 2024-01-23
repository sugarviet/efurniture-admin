import { Table, Button , Space, Tag} from "antd"
import { Link } from "react-router-dom"
import { status } from "@constants/status";
import PageTitle from "@components/PageTitle";

const data = [
  {
    id: 1,
    key: 1,
    name: 'sofa',
    status: 'active'
  },
  {
    id: 2,
    key: 2,
    name: 'chair',
    status: 'active'
  }
]

const Categories = () => {



  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item) => (
        <Tag color={status[item].color}>{status[item].title}</Tag>
      )
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (item) => (
        <Space className="flex gap-4">
          <Link to={`/category/${item.id}`}>
            <Button className="primary" type="primary">
              Detail
            </Button>
            <Button className="primary" type="primary">
              Disable
            </Button>
          </Link>
      
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between px-3 my-3">
       <PageTitle title="Category management"/>
        <Button type="primary" className="primary">Create new category</Button>
      </div>
      <Table dataSource={data} columns={columns}/>
    </div>
  )
}

export default Categories