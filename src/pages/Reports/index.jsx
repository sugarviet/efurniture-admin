import { useState, lazy } from "react";
import { Table, Button, Space } from "antd";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import PageTitle from "../../components/PageTitle";
import TableCard from "../../components/TableCard";

const data = [
  {
    key: "1",
    name: "John Doe",
    product: 'Product 1',
    image: 'https://dummyimage.com/600x400/000/fff',
    reason: 'lorem ipsum dolor sit amet, consectetur',
    type: 'Refund',
  },
  {
    key: "2",
    name: "Jane Doe",
    product: 'Product 2',
    image: 'https://dummyimage.com/600x400/000/fff',
    reason: 'lorem ipsum dolor sit amet, consectetur',
    type: 'Refund',

  },
];


const ReportDetails = lazy(() => import('./components/ReportDetail'))


const Reports = () => {
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

    const toggleModalDetail = () => {
        setIsModalDetailOpen(!isModalDetailOpen)
    }

    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Product",
          dataIndex: "product",
          key: "product",
        },
        {
          title: "Image",
          dataIndex: "product",
          key: "product",
          render: (text, record) => (
            <img src={record.image} alt={record.name} width="100" />
          ),
        },
        {
          title: "Reason",
          dataIndex: "reason",
          key: "reason",
        },
        {
          title: "Type",
          dataIndex: "type",
          key: "type",
        },
       
      ];
  return (
    <div>
     
      <TableCard
        label="Reports"
       
      >
      <Table dataSource={data} columns={columns} />

      </TableCard>

      <AppModal isOpen={isModalDetailOpen} setIsOpen={setIsModalDetailOpen}>
        <AppSuspense>
          <ReportDetails />
        </AppSuspense>
      </AppModal>
    </div>
  );
};

export default Reports;
