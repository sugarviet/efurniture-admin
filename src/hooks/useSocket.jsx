import useSocketStore from '../stores/useSocketStore';
import useNotification from './useNotification';

const useSocket = () => {
    const { socket } = useSocketStore();
    const { refreshNotification } = useNotification()


    const subcribeLowStockWarehouseNotification = () => {
        socket.on('lowstockWareHouse', (args) => {
            refreshNotification()
        })
    }

    const subcribeLowStockInventoryNotification = () => {
        socket.on('lowstockInventory', (args) => {
            refreshNotification()
        })
    }


    return {
        subcribeLowStockWarehouseNotification,
        subcribeLowStockInventoryNotification
    };
}

export default useSocket