export const get_all_user = (page=1) => {

    return `/account/adminMaster?page=${page}&limit=12`;
}

export const create_user = () => {

    return "/users";
}
