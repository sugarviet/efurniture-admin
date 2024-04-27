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
            'checkLogin'
        ],
        staff: [
            'requestDeliveryTrip',
            'checkLogin'

        ]
    };

    const loginSocket = () => {
        socket.emit('login-user', socket.id);
    }

   
    const subcribeToNoti = () => {
        loginSocket();
        const subscriptions = notificationSubscriptions[role] || [];
        subscriptions.forEach((eventName) => {
            socket.on(eventName, (arg) => {
                console.log(arg)
                refreshNotification();
                hasNewNoti();
            });
        });
    };



    return {
        subcribeToNoti,
        loginSocket,
        socket
        
    };
}

export default useSocket