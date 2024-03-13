export const get_draft_product = () => {

    return "/product/admin/draft";
}

export const get_published_product = () => {

    return "/product";
}

export const get_product_detail = (id) => {

    return `/products/${id}`;
}

export const create_product_staff = () => {

    return "/product/staff";
}

export const publish_product_admin = (type, slug) => {
    return `/product/admin/publish/${type}/${slug}`;   
}