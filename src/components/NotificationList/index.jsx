import { get_all_notification } from "../../api/notificationApi"
import { withFetchData } from "../../hocs/withFetchData"
import useGetNotiByRole from "../../hooks/useGetNotiByRole";
import NotificationCard from "../NotificationCard"
import PropTypes from "prop-types";
import { Empty } from "antd";

const NotificationList = () => {
    const { data, isLoading } = useGetNotiByRole();
    if (isLoading) return;
    return (
        <div className="mt-2 p-4 h-40 overflow-y-auto ">
            {data.length ? <ul>
                {data.map((item) => (
                    <li key={item._id} className="mb-5">
                        <NotificationCard key={item._id} data={item} />
                    </li>
                ))}
            </ul>: <Empty  image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Notification Yet"/>}
        </div>
    )
}

NotificationList.propTypes = {
    data: PropTypes.array,
};


export default withFetchData(NotificationList, get_all_notification)