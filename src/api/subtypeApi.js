const SUBTYPE_URL = '/subtype'
export const get_all_subType = () => {
    return  '/subtype/share'
}
export const get_all_publish_subType = () => {
    return  '/subtype/publish'
}


export const get_all_draft_subType = () => {
    return  '/subtype/share/draft'
}

export const create_subtype = () => {
    return '/subType/staff'
}


export const get_sub_type_by_type = (type) => {
    return `type/share/${type}`;
}

export const publish_subtypes_admin = (type, slug) => {
    return `/subType/admin/${type}/${slug}`;   
}

export const draft_subtypes_admin = (type, slug) => {
    return `/subType/admin/draft/${type}/${slug}`;   
}