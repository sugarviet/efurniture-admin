import { get_notification_admin, get_notification_staff } from '../api/notificationApi';
import useAuth from '../stores/useAuth'
import { useFetch } from './api-hooks';
import { useQueryClient } from '@tanstack/react-query';
const NOTI_BY_ROLE = {
    admin: () => get_notification_admin(),
    staff: () => get_notification_staff(),
    superAdmin: () => () => {},
}

const useGetNotiByRole = () => {
  const queryClient = useQueryClient();
    const { role } = useAuth();
    const { data, isLoading } = useFetch(NOTI_BY_ROLE[role]() || '')

    const refreshNotification = () => {
        queryClient.invalidateQueries(NOTI_BY_ROLE[role]());
    
      }
    return {
        data,
        isLoading,
        refreshNotification
    }
}

export default useGetNotiByRole