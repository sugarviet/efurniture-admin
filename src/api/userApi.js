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

export const enable_account = (id) => {
    return `${USER_API}/enable/${id}`
}
export const disable_account = (id) => {
    return `${USER_API}/disable/${id}`
}

export const update_account = (id) => {
    return `${USER_API}/role/${id}`
}

[
    {
        "_id": "65e6de1938cf4f1c2de6b5e6",
        "role": "User",
        "value": 2,
        "permission": "[101]",
        "action": "Get",
        "createdAt": "2024-03-05T08:55:53.593Z",
        "updatedAt": "2024-03-05T08:55:53.593Z",
        "__v": 0
    },
    {
        "_id": "65e6de3238cf4f1c2de6b5ec",
        "role": "User",
        "value": 4,
        "permission": "[102]",
        "action": "Post",
        "createdAt": "2024-03-05T08:56:18.285Z",
        "updatedAt": "2024-03-05T08:56:18.285Z",
        "__v": 0
    },
    {
        "_id": "65e6de3b38cf4f1c2de6b5f0",
        "role": "User",
        "value": 8,
        "permission": "[103]",
        "action": "Put",
        "createdAt": "2024-03-05T08:56:27.221Z",
        "updatedAt": "2024-03-05T08:56:27.221Z",
        "__v": 0
    },
    {
        "_id": "65e6de4438cf4f1c2de6b5f4",
        "role": "User",
        "value": 16,
        "permission": "[104]",
        "action": "Delete",
        "createdAt": "2024-03-05T08:56:36.264Z",
        "updatedAt": "2024-03-05T08:56:36.264Z",
        "__v": 0
    },
  ]