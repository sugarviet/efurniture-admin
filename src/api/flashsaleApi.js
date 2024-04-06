export const get_all_flash_sale = () => {
    return '/flashsale/admin/'
}

export const create_flash_sale = () => {
    return '/flashsale/admin/'
}

export const publish_flash_sale = (id) => {
    return `/flashsale/admin/publish/${id}`
}

export const draft_flash_sale = (id) => {
    return `/flashsale/admin/draft/${id}`
}