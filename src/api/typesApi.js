export const get_draft_type = () => {

    return "/type/share/draft";
}

export const get_published_type = () => {

    return "/type";
}


export const create_type = () => {

    return "/type";
}

export const get_all_types = () => {
    return "/type/share";
}


export const create_draft_type= () => {
    return `/type/staff`;
}

export const publish_types_admin= (type) => {
    return `/type/admin/${type}`;
}

export const draft_types_admin= (type) => {
    return `/type/admin/draft/${type}`;
}

export const publish_types_staff= (type) => {
    return `/type/staff/${type}`;
}

export const draft_types_staff= (type) => {
    return `/type/staff/draft/${type}`;
}

export const remove_types= () => {
    return `/type/admin/draft`;
}