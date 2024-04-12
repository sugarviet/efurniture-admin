import useAuth from '../stores/useAuth';
import useNotificationStore from '../stores/useNotificationStore';
import useSocketStore from '../stores/useSocketStore';
import useGetNotiByRole from './useGetNotiByRole';

const useSocket = () => {
    const { role } = useAuth();
    const { socket } = useSocketStore();
    const { refreshNotification } = useGetNotiByRole()
    const { hasNewNoti } = useNotificationStore();

    const notificationSubscriptions = {
        admin: [
            'lowstockWareHouse',
            'lowstockInventory',
        ],
        staff: [
            'requestDeliveryTrip',
        ]
    };

   
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
        subcribeToNoti
    };
}

export default useSocket