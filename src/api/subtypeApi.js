const SUBTYPE_URL = '/subtype'
export const get_all_subType = () => {
    return  '/subtype/share'
}

export const create_subtype = () => {
    return '/subType/staff'
}


export const get_sub_type_by_type = (type) => {
    return `type/share/${type}`;
}