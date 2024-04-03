export const get_all_warehouse = () => {
    return '/warehouse'
}

export const create_warehouse = () => {
    return '/warehouse/staff'
}
export const get_warehouse_detail = (param) => {

    return `/warehouse/${param.id}`
}

export const get_switch_notification_in_warehouse = (param) => {

    return `/warehouse/${param.id}`
}

export const update_lowstock_qty_in_warehouse = (param) => {

    return `/warehouse/${param.id}`
}
