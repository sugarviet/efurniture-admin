const USER_API = '/account/adminMaster';

export const get_all_user = (params = {}, searchValues = {}) => {
    const { page = 1, limit = 10 } = searchValues; 
    return `${USER_API}/user?page=${page}&limit=${limit}`;
};

export const get_all_system_account = (params = {}, searchValues = {}) => {   
    const { page = 1, limit = 10 } = searchValues; 
    return `${USER_API}/system?page=${page}&limit=${limit}`;
};

export const create_user = () => {
    return USER_API;
};

export const enable_account = () => {
    return `${USER_API}/enable`
}
export const disable_account = () => {
    return `${USER_API}/disable`
}

export const update_account = (id) => {
    return `${USER_API}/role/${id}`
}