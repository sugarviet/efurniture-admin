export const get_all_warehouse = () => {
    return '/warehouse'
}

export const get_first_warehouse = () => {
    return '/warehouse/detail'
}

export const create_warehouse = () => {
    return '/warehouse/staff'
}

export const update_warehouse = () => {
    return `/warehouse/staff/edit`
}

export const get_warehouse_detail = (param) => {

    return `/warehouse/${param.id}`
}


export const get_switch_notification_in_warehouse = () => {

    return `/warehouse/staff/lowstock`
}

export const update_lowstock_qty_in_warehouse = () => {

    return `/warehouse/staff/lowStock/update`
}

export const add_more_stock_product = () => {
    return `/warehouse/staff/stock/update`
}

export const add_product_to_warehouse = (id) => {
    return `/warehouse/staff/${id}`

}

export const remove_product_from_warehouse = (id) => {
    return `/warehouse/staff/removeProduct/${id}`
}

export const get_product_in_warehouse = (id) => {
    return `/warehouse/staff/${id}`
}