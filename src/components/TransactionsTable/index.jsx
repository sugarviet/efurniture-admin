import { Table } from 'antd';
import { withFetchData } from '../../hocs/withFetchData';
import { get_all_transactions } from '../../api/transactionsApi';

const TransactionsTable = ({data}) => {
    console.log(data);

    const dataNe = [
        {
          key: '1',
          transactionId: 'T123',
          amount: 1000,
          date: '2024-01-01',
          description: 'Payment for services',
        },
        
      ];
    
      const columns = [
        {
          title: 'Transaction ID',
          dataIndex: 'transactionId',
          key: 'transactionId',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        // Add more columns as needed
      ];
  return (
    <div>
        <Table dataSource={dataNe} columns={columns} />
    </div>
  )
}

export default withFetchData(TransactionsTable, get_all_transactions)