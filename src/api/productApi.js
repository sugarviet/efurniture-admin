export const get_draft_product = () => {

    return "/product/admin/draft";
}

export const get_published_product = () => {

    return "/product";
}

export const get_draft_product_staff = () => {

    return "/product/staff/draft";
}

export const get_product_detail = (id) => {

    return `/products/${id}`;
}

export const create_product_staff = () => {

    return "/product/staff";
}

export const update_product_staff = (slug) => {

    return `/product/staff/${slug}`;
}

export const publish_product_admin = (type, slug) => {
    return `/product/admin/publish/${type}/${slug}`;   
}

export const draft_product_admin = (type, slug) => {
    return `/product/admin/draft/${type}/${slug}`;   
}

export const publish_product_staff = (type, slug) => {
    return `/product/staff/publish/${type}/${slug}`;   
}

export const draft_product_staff = (type, slug) => {
    return `/product/staff/draft/${type}/${slug}`;   
}

export const edit_product = (slug) => {
    return `/product/staff/${slug}`;
}

export const remove_draft_product = () => {
    return `/product/admin`;
}
export const remove_draft_product_staff = () => {
    return `/product/staff`;
}

export const add_more_stock_product = (id) => {
    return `/warehouse/staff/stock/update/${id}`
}

export const add_product_to_warehouse = (id) => {
    return `/warehouse/staff/${id}`

}

export const add_variation_to_product = (id) => {
    return `/product/staff/addVariation/${id}`

}

export const remove_variation = (id) => {
    return `/product/staff/removeVariation/${id}`

}