export const get_all_user = (params) => {
    const {search: {page, limit}} = params;
    return `/account/adminMaster?page=${page}&limit=${limit}`;
}

export const create_user = () => {

    return "/users";
}
