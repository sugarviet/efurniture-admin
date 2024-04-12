import useAuth from '../stores/useAuth';
import useNotificationStore from '../stores/useNotificationStore';
import useSocketStore from '../stores/useSocketStore';
import useNotification from './useNotification';

const useSocket = () => {
    const { role } = useAuth();
    const { socket } = useSocketStore();
    const { refreshNotification } = useNotification()
    const { hasNewNoti } = useNotificationStore();

    const notificationSubscriptions = {
        admin: [
            'lowstockWareHouse',
            'lowstockInventory',
        ],
        staff: [
            'requestDeliveryTrip',
        ],
    };

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

    const subcribeRequestDeliveryTripNotification = () => {
        socket.on('requestDeliveryTrip', () => {
            refreshNotification()
            hasNewNoti()
        })
    }

    const subcribeToNotiByRole = () => {
        if (role == 'admin') {
            subcribeLowStockWarehouseNotification()
            subcribeLowStockInventoryNotification()
        }
        if (role == 'staff') {
            subcribeRequestDeliveryTripNotification()
        }
    }
    const subcribeToNoti = () => {
        const subscriptions = notificationSubscriptions[role] || [];
        subscriptions.forEach((eventName) => {
            socket.on(eventName, () => {
                refreshNotification();
                hasNewNoti();
            });
        });
    };



    return {
        subcribeRequestDeliveryTripNotification,
        subcribeLowStockWarehouseNotification,
        subcribeLowStockInventoryNotification,
        subcribeToNotiByRole,
        subcribeToNoti
    };
}

export default useSocket