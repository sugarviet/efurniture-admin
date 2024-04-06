import React from 'react'
import { Table, Button, Space, Modal } from 'antd';
import { formatCurrency } from '../../utils/formatCurrency';
import { useFetch } from '../../hooks/api-hooks';
import { get_all_delivery_trip_detail } from '../../api/deliveryTripApi';

const TripDetail = ({ data }) => {
    const { data: tripDetail } = useFetch(get_all_delivery_trip_detail(data))
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => `${record.order.order_shipping.first_name} ${record.order.order_shipping.last_name}`,
        },
        {
            title: 'Email',
            dataIndex: ['order', 'order_shipping', 'email'],
            key: 'email',
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
            render: (text, record) => formatCurrency(text),

        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',

        },

    ];
    return (
        <div>
            <Table columns={columns} dataSource={tripDetail} pagination={{ hideOnSinglePage: true }} size="small" />
        </div>
    )
}

export default TripDetail