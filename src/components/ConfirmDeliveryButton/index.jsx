import { confirm_delivery_trip_pending, get_all_delivery_trip_pending_staff } from "../../api/deliveryTripApi"
import { useUpdate } from "../../hooks/api-hooks"
import useNotification from "../../hooks/useNotification";
import PropTypes from "prop-types";

const ConfirmDeliveryButton = ({ deliveryId }) => {
    const { success_message, error_message } = useNotification();
    const { mutate: confirm } = useUpdate(confirm_delivery_trip_pending(deliveryId), undefined, () => {
        success_message('deliveryTrip', 'confirm')
    }, () => {
        error_message('deliveryTrip', 'confirm')

    }, get_all_delivery_trip_pending_staff());
    return (
        <button onClick={() => confirm()} className="bg-black text-white font-bold px-3 py-2 rounded-lg hover:opacity-80">Confirm</button>

    )
}

ConfirmDeliveryButton.propTypes = {
    deliveryId: PropTypes.string,
};


export default ConfirmDeliveryButton