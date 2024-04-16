export const get_all_delivery_trip_pending_staff = () => {
    return '/deliveryTrip/staff/pending'
}

export const confirm_delivery_trip_pending = (deliveryTripId) => {
    return `/deliveryTrip/staff/confirm/${deliveryTripId}`
}

export const get_all_delivery_trip_detail = (id) => {
    return `/deliveryTrip/share/detail/${id}`
}

export const reject_delivery_trip = (deliveryTripId) => {
    return `/deliveryTrip/staff/reject/${deliveryTripId}`
}

export const get_all_delivery_account = () => {
    return `/account/staff/delivery`
}

export const create_delivery_trip = () => {
    return '/deliveryTrip'
}