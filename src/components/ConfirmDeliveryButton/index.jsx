import { confirm_delivery_trip_pending } from "../../api/deliveryTripApi"
import { useUpdate } from "../../hooks/api-hooks"

const ConfirmDeliveryButton = ({ deliveryId }) => {
    const { mutate:confirm } = useUpdate(confirm_delivery_trip_pending(deliveryId), undefined, () => { 
        alert('thanh cong')
    }, () => { });
    return (
        <button onClick={() => confirm()} className="bg-black text-white font-bold px-3 py-2 rounded-lg hover:opacity-80">Confirm</button>

    )
}

export default ConfirmDeliveryButton