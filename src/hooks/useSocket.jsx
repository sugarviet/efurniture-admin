import useNotificationStore from '../stores/useNotificationStore';
import useSocketStore from '../stores/useSocketStore';
import useNotification from './useNotification';

const useSocket = () => {
    const { socket } = useSocketStore();
    const { refreshNotification } = useNotification()
    const {hasNewNoti} = useNotificationStore();


    const subcribeLowStockWarehouseNotification = () => {
        socket.on('lowstockWareHouse', () => {
            refreshNotification()
            hasNewNoti()
        })
    }

    const subcribeLowStockInventoryNotification = () => {
        socket.on('lowstockInventory', () => {
            refreshNotification()
            hasNewNoti()

        })
    }


    return {
        subcribeLowStockWarehouseNotification,
        subcribeLowStockInventoryNotification
    };
}

export default useSocket