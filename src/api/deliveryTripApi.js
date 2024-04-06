export const get_all_delivery_trip_pending_staff = () => {
    return '/deliveryTrip/staff/pending'
}

export const confirm_delivery_trip_pending = (deliveryTripId) => {
    return `/deliveryTrip/staff/${deliveryTripId}`
}

export const get_all_delivery_trip_detail = (id) => {
    return `/deliveryTrip/share/detail/${id}`
}