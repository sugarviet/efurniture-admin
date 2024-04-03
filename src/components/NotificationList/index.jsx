import { get_all_notification } from "../../api/notificationApi"
import { withFetchData } from "../../hocs/withFetchData"
import NotificationCard from "../NotificationCard"
import PropTypes from "prop-types";


const NotificationList = ({ data }) => {
    console.log(data);
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>
                        <NotificationCard key={item._id} data={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

NotificationList.propTypes = {
    data: PropTypes.array,
};


export default withFetchData(NotificationList, get_all_notification)