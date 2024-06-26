export const get_all_flash_sale = () => {
    return '/flashsale/admin/'
}

export const create_flash_sale = () => {
    return '/flashsale/admin/'
}

export const edit_flashsale = (id) => {
    return `/flashsale/admin/${id}`
}

export const publish_flash_sale = (id) => {
    return `/flashsale/admin/publish/${id}`
}

export const draft_flash_sale = (id) => {
    return `/flashsale/admin/draft/${id}`
}

export const remove_flash_sale = () => {
    return `/flashsale/admin`
}

export const get_valid_product_flash_sale = () => {
    return `/product/admin/validFlashSale`
}

export const stop_flashsale = (id) => {
    return `/flashsale/admin/draft/${id}`
}