import { Table, Button, Descriptions, Tag } from 'antd';
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";

const TRIP_STATUS = {
    0: {
        name: 'On Processing',
        color: 'processing',
    },
    1: {
        name: 'Completed',
        color:'success',
    },
    2: {
        name: 'Failed',
        color: 'error',
    }
}

const TripDetail = ({ data }) => {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);

    console.log('detail', data);


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => `${record.order.order_shipping.first_name} ${record.order.order_shipping.last_name}`,
        },
        {
            title: 'Phone',
            dataIndex: ['order', 'order_shipping', 'phone'],
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: ['order', 'order_shipping', 'address'],
            key: 'address',
        },
        {
            title: 'District',
            dataIndex: ['order', 'order_shipping', 'district'],
            key: 'district',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text) => formatCurrency(text),
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
        },
        {
            title: 'Products',
            key: 'products',
            render: (_, record) => (
                <Button
                    className='flex justify-center mx-auto'
                    type="text"
                    onClick={() => toggleExpand(record)}
                    icon={expandedRowKeys.includes(record.key) ? <CaretDownOutlined/> : <CaretRightOutlined />}
                />
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => <Tag color={TRIP_STATUS[text].color}><span className='font-bold'>{TRIP_STATUS[text].name}</span></Tag>,
        },
    ];

    const toggleExpand = (record) => {
        const expandedKeys = [...expandedRowKeys];
        const index = expandedKeys.indexOf(record._id);
        if (index > -1) {
            expandedKeys.splice(index, 1);
        } else {
            expandedKeys.push(record._id);
        }
        setExpandedRowKeys(expandedKeys);
    };

    const expandedRowRender = (record) => (
        <ul>
            {record.order.order_products.map((product, index) => (
               
                    <li key={`${index}`}>
                        <div className='flex gap-4'>
                         #{index + 1} 
                         <div className='flex items-center gap-2'>
                            <div>
                                <img src={product.product.thumbs[0]} alt={product.product.name} style={{height: 20, width: 20}}/>
                            </div>
                           {product.product.name} x {product.quantity}
                         </div>
                        {product.variation.map(variation => (
                            <div key={variation.variation_id} style={{ width: 20, height:20, borderRadius: '50%', backgroundColor: variation.color }}/>
                        ))}
                        </div>
                    </li>
                
            ))}
        </ul>
    );

    return (
        <div>
         
            <Table
                rowKey="_id"
                columns={columns}
                dataSource={data}
                pagination={{ hideOnSinglePage: true }}
                size="small"
                expandable={{
                    expandedRowKeys: expandedRowKeys,
                    expandedRowRender: expandedRowRender,
                    onExpand: (_, record) => toggleExpand(record),
                    expandIcon: () => null, 
                }}
            />
        </div>
    )
}

TripDetail.propTypes = {
    data: PropTypes.array,
  };

export default TripDetail;
