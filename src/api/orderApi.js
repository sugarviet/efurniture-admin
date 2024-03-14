const ORDER_URL = "/order/admin"

export const get_order_by_type_api = (params = {}, searchValues) => {
    const { page, limit, type } = searchValues;
    return `${ORDER_URL}?page=${page}&limit=${limit}&type=${type}`
}