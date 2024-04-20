import { Table, Tag } from 'antd';
import { withFetchData } from '../../hocs/withFetchData';
import { get_all_transactions } from '../../api/transactionsApi';
import PropTypes from "prop-types";
import { formatDateByDateAndTime } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/formatCurrency';
import { useSearchParams } from 'react-router-dom';

const TRANSACTION_TYPE = {
  Income: {
    color: 'green',
    text: 'Income'
  },
  Outcome: {
    color:'red',
    text: 'Outcome'
  }
}

const TransactionsTable = ({data}) => {
    console.log(data);
    const [searchParams, setSearchParams] = useSearchParams();
    const handleTableChange = (pagination) => {
      setSearchParams({
        page: pagination.current,
        limit: pagination.pageSize,
      });
    };
      const columns = [
        {
          title: 'Sender',
          dataIndex:'sender',
          key:'sender',
          render: (text) => (
            <div>{text.name ? <span>{text.name}</span> : <span>{text.first_name} {text.last_name}</span>}</div>
          )
        },
        {
          title: 'Receiver',
          dataIndex:'receiver',
          key:'receiver',
          render: (text) => (
            <div>{text.name ? <span>{text.name}</span> : <span>{text.first_name} {text.last_name}</span>}</div>
          )
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          render: (text) => formatCurrency(text),
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'tyoe',
          render: (text) => <Tag color={TRANSACTION_TYPE[text].color}><span className='font-bold'>{TRANSACTION_TYPE[text].text}</span></Tag>,
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: (date) => <span>{formatDateByDateAndTime(date)}</span>,
      },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },

      ];
  return (
    <div>
        <Table rowKey="_id" dataSource={data.data} columns={columns} onChange={handleTableChange}
          pagination={{
            current: searchParams.get("page") || 1,
            pageSize: 10,
            total: data.total,
            hideOnSinglePage: true,
          }} />
    </div>
  )
}

TransactionsTable.propTypes = {
  data: PropTypes.array,
};


export default withFetchData(TransactionsTable, get_all_transactions)