import { Tag } from "antd";

const orderStatus = {
    'pending': {
        color: 'yellow',
        title: 'Pending',
    },
    'shipping': {
        color: 'processing',
        title: 'Shipping',
    },
    'done': {
        color: 'success',
        title: 'Done',
    }
}

export default function useGetOrderStatus(){
    
    const handleGetOrderStatus = (status) => {
        return <Tag color={orderStatus[status].color}>{orderStatus[status].title}</Tag>
    }

    return {
        handleGetOrderStatus
    }
    
}