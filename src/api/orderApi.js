const ORDER_URL = "/order/admin"

export const get_order_by_type_api = (params = {}, searchValues) => {
    const { page, limit, type } = searchValues;
    return `${ORDER_URL}?page=${page}&limit=${limit}&type=${type}`
}

export const get_orders_request_staff_api = (type = 'all', status = 1) => `/order/staff?page=1&limit=10&type=processing&status=1`